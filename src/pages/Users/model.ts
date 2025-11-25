import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { createUsers, deleteUsers, fetchUsers } from '../../redux/user';
import { UserI } from '@/redux/User/types';
import { RootState } from '@/redux/store';

export const useUsers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const users = useSelector((state: RootState) => state.user.users);
  const [serchText, setSerchText] = useState('');
  const [activeRole, setActiveRole] = useState('clients');

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSerchText(e.target.value);
  };

  const filteredUsers = users.filter((user: UserI) => {
    const keys = Object.keys(user);
    let isMatch = false;

    keys.forEach((key) => {
      if (user[key].includes(serchText)) {
        isMatch = true;
      }
    });

    // if (activeRole === 'admins') {
    //   isMatch = user.role === 'admin';
    // } else {
    //   isMatch = user.role === 'client';
    // }

    return isMatch;
  });

  const sortedUsers = filteredUsers.sort((user1, user2) => {});

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    console.log('open');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateUsers = (formValues: UserI) => {
    dispatch(createUsers(formValues));
  };

  const handleDeleteUsers = (userId: string) => {
    dispatch(deleteUsers(userId));
  };

  return {
    isModalOpen,
    filteredUsers,
    handleSearch,
    openModal,
    closeModal,
    setActiveRole,
    activeRole,
    createUsers: handleCreateUsers,
    deleteUsers: handleDeleteUsers
  };
};
