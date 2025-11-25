import { addUser } from '../../utiles/validation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { UserI } from '@/redux/User/types';

export type LocalUserI = Omit<UserI, 'id'>;

export const useModalForm = (onCreateUser: (formValues: LocalUserI) => void, onClose: () => void) => {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(addUser)
  });

  const onSubmit = async (formValues: LocalUserI) => {
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
