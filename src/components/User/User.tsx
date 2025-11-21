// components/User/User.jsx
import styles from './User.css';
import React from 'react';

interface Props {
  id: string;
  name: string;
  email: string;
  role: string;
  created: string;
  status: string;
  onDelete: (id: string) => void;
}

export default function User({ id, name, email, role, created, status, onDelete }: Props) {
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
      <img onClick={() => onDelete(id)} className="trash" src="./del.svg" alt="Удалить пользователя" />
    </div>
  );
}
