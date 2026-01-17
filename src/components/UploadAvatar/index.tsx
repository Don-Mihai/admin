import { ChangeEvent } from 'react';
import styles from './UploadAvatart.module.css';

interface Props {
  className?: string;
  imageUrl: string;
  uploadFile: (file: File) => void;
}

const UploadAvatar = ({ className, imageUrl, uploadFile }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value, 'файл');
    const file = e?.target?.files?.[0];

    file && uploadFile(file);
  };
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt="" className={styles.img + ' ' + className} />
      <input onChange={handleChange} className={styles.input} type="file" />
    </div>
  );
};

export default UploadAvatar;
