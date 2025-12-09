import { Link, useNavigate } from 'react-router-dom';
import Socials from '../../components/Socials/Socials';
import styles from './Login.module.css';

import { loginSchema } from '../../utiles/validation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { loginUser } from '@/redux/User/user';
import { LoginFormValuesI } from '@/redux/User/types';
import { ROUTES } from '@/routes/types';

const Login = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(loginSchema)
  });
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onSubmit = async (formValues: LoginFormValuesI) => {
    console.log(formValues);
    const user = await dispatch(loginUser(formValues)).unwrap();
    if (user?.id) {
      localStorage.setItem('userId', user.id);
      navigate(ROUTES.PROFILE);
    }
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
            <input {...register('email')} className={styles.input} placeholder="Введите логин" />
            <p className={styles.error}>{formState.errors.email?.message}</p>
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
