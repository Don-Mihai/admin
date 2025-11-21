import React, { useState, useEffect } from 'react';
import styles from './Users.css';
import Header from '../../components/Header/Header';
import Modal from '../../modules/Modal/ui';
import User from '../../components/User/User';

import { HEADERS } from './consts';
import { useUsers } from './model';
import { UserI } from '@/redux/User/types';

export default function Users() {
  const { isModalOpen, filteredUsers, handleSearch, createUsers, deleteUsers, openModal, closeModal, setActiveRole, activeRole } = useUsers();
  return (
    <div>
      <div className="wrapper"></div>
      <Header />
      <section className="users container">
        <div className="users__title">
          <h3 className="title">Users</h3>
          <div className="users__button">
            <button onClick={openModal} className="button">
              Add User
            </button>
            {isModalOpen && <Modal onCreateUser={createUsers} onClose={closeModal} />}
            <img className="button__img" src="./plus.svg" alt="+" />
          </div>
        </div>
        <nav className="users__link">
          <button onClick={() => setActiveRole('admins')} className={activeRole === 'admins' ? 'link__active' : 'link'}>
            Admins
          </button>
          <button onClick={() => setActiveRole('clients')} className={activeRole === 'clients' ? 'link__active' : 'link'}>
            Clients
          </button>
        </nav>
        <div className="users__container">
          <div className="users__top">
            <div className="users__input">
              <img src="./search.svg" alt="" className="input__img" />
              <input onChange={handleSearch} className="input" type="text" name="" id="" placeholder="Searh Users" />
            </div>
            <div className="users__left">
              <img src="./filter.svg" alt="" className="users__left__img" />
              <button className="users__left__button">Filters</button>
            </div>
          </div>
          <div className="users__table">
            <div className="table">
              <div className="table__info">
                <div className="table__header">
                  {HEADERS.map((header) => {
                    return (
                      <div className="header__name">
                        <div className="table__checkbox"></div>
                        <p className="name">{header}</p>
                        <img src="./chevron1.svg" alt="" className="table__img" />
                      </div>
                    );
                  })}
                </div>

                <div>
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((user: UserI) => (
                      <User
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        email={user.email}
                        role={user.role}
                        created={user.created}
                        status={user.status}
                        onDelete={deleteUsers}
                      />
                    ))
                  ) : (
                    <div>Пользователи не найдены</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
