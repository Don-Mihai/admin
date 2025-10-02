import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '../../utiles/api';

export const useUsers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [serchText, setSerchText] = useState('');
  const [activeRole, setActiveRole] = useState('clients');

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

    if (activeRole === 'admins') {
      isMatch = user.role === 'admin';
    } else {
      isMatch = user.role === 'client';
    }

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

  return {
    isModalOpen,
    filteredUsers,
    handleSearch,
    handleDeleteUser,
    openModal,
    closeModal,
    onCreateUser,
    setActiveRole,
    activeRole
  };
};
