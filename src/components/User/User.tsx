// components/User/User.jsx
import { UserI } from '@/redux/User/types';
import './User.css';
import React, { useState } from 'react';
import Modal, { MODAL_MODE } from '../Modal/ui';

interface Props {
  user: UserI;
  onDelete: (id: string) => void;
  onEdit: (user: UserI) => void;
}

export default function User({ user, onDelete, onEdit }: Props) {
  const { id, name, email, role, created, status } = user;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <div className="table__body">
      <div className="header__name">
        <div className="body__name">
          <div className="table__checkbox"></div>
          <p className="name">{name}</p>
        </div>
      </div>
      <div className="header__name">
        <p className="name">{email}</p>
      </div>
      <div className="header__name">
        <p className="name">{role}</p>
      </div>
      <div className="header__name">
        <p className="created">{new Date(created).toLocaleDateString('ru-RU')}</p>
      </div>
      <div className="header__name">
        <p className={`Status_a ${status?.toLowerCase() || 'active'}`}>{status}</p>
      </div>
      <div className="actions">
        <img onClick={openModal} className="user__trash" src="./edit.svg" alt="Редактировать пользователя" />
        <img onClick={() => onDelete(id)} className="user__trash" src="./del.svg" alt="Удалить пользователя" />
      </div>
      {isModalOpen && <Modal title="Редакитрование пользователя" user={user} onEditUser={onEdit} onClose={closeModal} mode={MODAL_MODE.EDIT} />}
    </div>
  );
}
