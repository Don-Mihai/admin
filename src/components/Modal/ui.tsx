import React from 'react';
import './styles.css';
import { useModalForm } from './model';
import { LocalUserI, UserI } from '@/redux/User/types';
import { createPortal } from 'react-dom';

export enum MODAL_MODE {
  CREATE = 'create',
  EDIT = 'edit'
}

interface Props {
  onCreateUser?: (formValues: LocalUserI) => void;
  onEditUser?: (formValues: UserI) => void;
  onClose: () => void;
  title: string;
  mode: MODAL_MODE;
  user?: UserI;
}

function Modal({ onClose, onCreateUser, onEditUser, title, mode, user }: Props) {
  const { register, handleSubmit, formState, onSubmit } = useModalForm(onClose, mode, user, onCreateUser, onEditUser);
  console.log(formState.defaultValues);

  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <form onSubmit={handleSubmit((formValues) => onSubmit(formValues, user?.id))}>
          <div className="modal__content">
            <input {...register('name')} type="text" placeholder="Имя пользователя" className="name" />
            <p className="error">{formState.errors.name?.message}</p>

            <input {...register('email')} type="email" placeholder="Введите Email" className="email" />
            <p className="error">{formState.errors.email?.message}</p>

            <input {...register('role')} type="text" placeholder="Укажите свою роль" className="role" />
            <p className="error">{formState.errors.role?.message}</p>

            <input {...register('created')} type="date" placeholder="Введите дату создания" className="created" />
            <p className="error">{formState.errors.created?.message}</p>

            <input {...register('status')} type="text" placeholder="Укажите статус" className="status" />
            <p className="error">{formState.errors.status?.message}</p>
          </div>

          <div className="modal-actions">
            <button type="submit">Сохранить</button>
            <button type="button" onClick={onClose}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
