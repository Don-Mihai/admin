import React from "react";
import styles from "./Modal.css";
import { addUser } from "../../utiles/validation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import axios from "axios";

function Modal({ onClose }) {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(addUser),
  });

  const onSubmit = async (formValues) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/users",
        formValues
      );
      reset();
      alert("Пользователь добавлен");
      console.log(formValues);
      onClose();
    } catch (error) {
      toast.error("Ошибка при добавлении пользователя");
      console.error(error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Добавить пользователя</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="modal__content">
            <input
              {...register("name")}
              type="text"
              placeholder="Имя пользователя"
              className="name"
            />
            <p className="error">{formState.errors.name?.message}</p>

            <input
              {...register("email")}
              type="email"
              placeholder="Введите Email"
              className="email"
            />
            <p className="error">{formState.errors.email?.message}</p>

            <input
              {...register("role")}
              type="text"
              placeholder="Укажите свою роль"
              className="role"
            />
            <p className="error">{formState.errors.role?.message}</p>

            <input
              {...register("created")}
              type="date"
              placeholder="Введите дату создания"
              className="created"
            />
            <p className="error">{formState.errors.created?.message}</p>

            <input
              {...register("status")}
              type="text"
              placeholder="Укажите статус"
              className="status"
            />
            <p className="error">{formState.errors.status?.message}</p>
          </div>

          <div className="modal-actions">
            <button type="submit">Добавить</button>
            <button type="button" onClick={onClose}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
