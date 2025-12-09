// utils/validation.js
import { boolean, number, object, ref, string } from 'yup';

export const addUser = object({
  name: string().required('Имя обязательно'),
  email: string().email('Некорректный email').required('Email обязателен'),
  role: string().required('Роль обязательна'),
  created: string().required('Дата создания обязательна'),
  status: string().required('Статус обязателен')
});

export const loginSchema = object({
  email: string().required('Email обязательное поле'),
  password: string().required('Пароль обязательное поле'),
  checkbox: boolean().isTrue('Согласие с условиями обязательное поле')
});

export const registerSchema = object({
  name: string().required('Имя обязательно'),
  email: string().email('Некорректный email').required('Email обязателен'),
  password: string().required('Пароль обязателен'),
  repeatPassword: string()
    .required('Подтверждение пароля обязательно')
    .oneOf([ref('password')], 'Пароли не совпадают')
});

export const addProduct = object({
  image: string().required('Изображение обязательно'),
  title: string().required('Название товара обязательно'),
  price: number().positive('Цена должна быть положительным числом').required('Цена обязательна'),
  stock: number()
    .integer('Количество на складе должно быть целым числом')
    .min(0, 'Количество на складе не может быть отрицательным')
    .required('Количество на складе обязательно'),
  sold: number()
    .integer('Количество проданных должно быть целым числом')
    .min(0, 'Количество проданных не может быть отрицательным')
    .required('Количество проданных обязательно')
});
