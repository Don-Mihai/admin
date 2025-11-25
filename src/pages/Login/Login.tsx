import { Link } from 'react-router-dom';
import Socials from '../../components/Socials/Socials';
import styles from './Login.module.css';
import { useState } from 'react';
import { loginSchema } from '../../utiles/validation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const Login = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit = (formValues: any) => {
    console.log(formValues);
  };
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Добро пожаловать</h1>
          <p className={styles.subtitle}>Войдите в свой аккаунт</p>
        </div>
        <div className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Логин</label>
            <input {...register('login')} className={styles.input} placeholder="Введите логин" />
            <p className={styles.error}>{formState.errors.login?.message}</p>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Пароль</label>
            <input {...register('password')} type="password" className={styles.input} placeholder="Введите пароль" />
            <p className={styles.error}>{formState.errors.password?.message}</p>
          </div>

          <div className={styles.options}>
            <label className={styles.checkbox}>
              <input {...register('checkbox')} type="checkbox" />
              <span className={styles.checkmark}></span>
              Запомнить меня
            </label>
            <p className={styles.error}>{formState.errors.checkbox?.message}</p>
            <a href="#" className={styles.forgotPassword}>
              Забыли пароль?
            </a>
          </div>

          <button onClick={handleSubmit(onSubmit)} className={styles.submitButton}>
            Войти
          </button>
        </div>
        <div className={styles.footer}>
          <p>
            Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
          </p>
        </div>

        <Socials />
      </div>
    </div>
  );
};

export default Login;
