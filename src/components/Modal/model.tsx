import { addUser } from '../../utiles/validation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { UserI } from '@/redux/User/types';
import { MODAL_MODE } from './ui';
import { useEffect } from 'react';

export type LocalUserI = Omit<UserI, 'id'>;

export const useModalForm = (
  onClose: () => void,
  mode: MODAL_MODE,
  user?: UserI,
  onCreateUser?: (formValues: LocalUserI) => void,
  onEditUser?: (formValues: UserI) => void
) => {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(addUser)
  });

  useEffect(() => {
    if (MODAL_MODE.EDIT === mode && user) {
      reset({
        name: user.name,
        email: user.email,
        role: user.role,
        created: user.created instanceof Date ? user.created : new Date(user.created),
        status: user.status
      });
    }
  }, [mode, user, reset]);

  const onSubmit = async (formValues: LocalUserI | UserI) => {
    if (!('id' in formValues) && mode === MODAL_MODE.CREATE) {
      try {
        onCreateUser?.(formValues);
        reset();
        alert('Пользователь добавлен');
        console.log(formValues);
        onClose();
      } catch (error) {
        toast.error('Ошибка при добавлении пользователя');
        console.error(error);
      }
    }

    if ('id' in formValues && mode === MODAL_MODE.EDIT) {
      try {
        onEditUser?.(formValues);
        reset();
        alert('Пользователь редактирован');
        console.log(formValues);
        onClose();
      } catch (error) {
        toast.error('Ошибка при редактировании пользователя');
        console.error(error);
      }
    }
  };

  return { register, handleSubmit, formState, onSubmit };
};
