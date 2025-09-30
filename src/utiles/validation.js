// utils/validation.js
import * as yup from "yup";

export const addUser = yup.object({
  name: yup.string().required("Имя обязательно"),
  email: yup.string().email("Некорректный email").required("Email обязателен"),
  role: yup.string().required("Роль обязательна"),
  created: yup.date().required("Дата создания обязательна"),
  status: yup.string().required("Статус обязателен"),
});
