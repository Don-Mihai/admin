import { addUser } from '../../utiles/validation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

export const useModalForm = (onCreateUser: (formValues: any) => void, onClose: () => void) => {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(addUser)
  });

  const onSubmit = async (formValues: any) => {
    try {
      onCreateUser(formValues);
      reset();
      alert('Пользователь добавлен');
      console.log(formValues);
      onClose();
    } catch (error) {
      toast.error('Ошибка при добавлении пользователя');
      console.error(error);
    }
  };

  return { register, handleSubmit, formState, onSubmit };
};
