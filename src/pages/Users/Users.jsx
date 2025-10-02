import React, { useState, useEffect } from 'react';
import styles from './Users.css';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import User from '../../components/User/User';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '../../utiles/api';
import { HEADERS } from './consts';

export default function Users() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [serchText, setSerchText] = useState('');

  const handleSearch = (e) => {
    setSerchText(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    const keys = Object.keys(user);
    let isMatch = false;

    keys.forEach((key) => {
      if (user[key].includes(serchText)) {
        isMatch = true;
      }
    });

    return isMatch;
  });

  const sortedUsers = filteredUsers.sort((user1, user2) => {});

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/users`);
      setUsers(response.data);
    } catch (err) {
      console.error('Ошибка при загрузке пользователей:', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`${API_URL}/users/${userId}`);
      alert('Пользователь удален');
      fetchUsers();
    } catch (error) {
      toast.error('Ошибка при удалении пользователя');
      console.error(error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    console.log('open');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onCreateUser = async (formValues) => {
    const response = await axios.post(`${API_URL}/users`, formValues);
    fetchUsers();
  };

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
            {isModalOpen && <Modal onCreateUser={onCreateUser} onClose={closeModal} />}
            <img className="button__img" src="./plus.svg" alt="+" />
          </div>
        </div>
        <nav className="users__link">
          <a href="" className="link__active">
            Administration
          </a>
          <a href="" className="link">
            General Partners
          </a>
          <a href="" className="link">
            Wealt Managers
          </a>
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
                    filteredUsers.map((user) => (
                      <User
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        email={user.email}
                        role={user.role}
                        created={user.created}
                        status={user.status}
                        onDelete={handleDeleteUser}
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
