import React, { useState, useEffect, ChangeEvent } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';

import { LocalUserI, UserI } from '@/redux/User/types';
import { AppDispatch, RootState } from '@/redux/store';
import { createUsers, deleteUsers, editUsers, fetchUsers } from '@/redux/User/user';
import { ROLES, RolesType } from './consts';

export const useUsers = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const users = useSelector((state: RootState) => state.user.users);
  const [serchText, setSerchText] = useState<string>('');
  const [activeRole, setActiveRole] = useState<RolesType>(ROLES.CLIENTS);

  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSerchText(e.target.value);
  };

  const filteredUsers = users.filter((user: UserI) => {
    const keys = Object.keys(user);
    let isMatch = false;

    keys.forEach((key) => {
      // @ts-ignore
      if (user[key as keyof UserI].includes(serchText)) {
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

  const handleCreateUsers = (formValues: LocalUserI) => {
    dispatch(createUsers(formValues));
  };

  const handleDeleteUsers = (userId: string) => {
    dispatch(deleteUsers(userId));
  };

  const handleEditUser = (formValues: UserI) => {
    dispatch(editUsers(formValues));
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
    deleteUsers: handleDeleteUsers,
    editUser: handleEditUser
  };
};
