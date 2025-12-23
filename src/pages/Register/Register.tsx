import { Link, useNavigate } from 'react-router-dom';
import Socials from '../../components/Socials/Socials';
import styles from './Register.module.css';
import { AppDispatch } from '@/redux/store';
import { LocalUserI } from '@/redux/User/types';
import { createUsers } from '@/redux/User/user';
import { registerSchema } from '@/utiles/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ROUTES } from '@/routes/types';
import { sendEmail } from '@/services/email';

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const Register = () => {
  const { register, handleSubmit, formState } = useForm<RegisterFormValues>({
    resolver: yupResolver(registerSchema)
  });
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onSubmit = async (formValues: RegisterFormValues) => {
    try {
      const userData: LocalUserI = {
        name: formValues?.name,
        email: formValues.email,
        password: formValues.password,
        created: new Date().toISOString(),
        role: 'client',
        status: 'student'
      };
      // const res = await dispatch(createUsers(userData)).unwrap();
      // localStorage.setItem('userId', res?.id || '');

      await sendEmail('mihai807@mail.ru', { message: 'Welcome to our platform', data: userData });

      // navigate(ROUTES.PROFILE);
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
    }
  };

  const onError = (errors: any) => {
    console.log('Ошибки валидации:', errors);
  };
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Создать аккаунт</h1>
          <p className={styles.subtitle}>Присоединяйтесь к нам сегодня</p>
        </div>

        <div className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Имя</label>
            <input {...register('name')} className={styles.input} placeholder="Введите ваше имя" />
            {formState.errors.name && <p className={styles.error}>{formState.errors.name.message}</p>}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Email</label>
            <input {...register('email')} type="email" className={styles.input} placeholder="Введите email адрес" />
            {formState.errors.email && <p className={styles.error}>{formState.errors.email.message}</p>}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Пароль</label>
            <input {...register('password')} type="password" className={styles.input} placeholder="Придумайте пароль" />
            {formState.errors.password && <p className={styles.error}>{formState.errors.password.message}</p>}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Подтвердите пароль</label>
            <input {...register('repeatPassword')} type="password" className={styles.input} placeholder="Повторите пароль" />
            {formState.errors.repeatPassword && <p className={styles.error}>{formState.errors.repeatPassword.message}</p>}
          </div>

          <div className={styles.options}>
            <label className={styles.checkbox}>
              <input type="checkbox" />
              <span className={styles.checkmark}></span>Я согласен с{' '}
              <a href="#" className={styles.termsLink}>
                условиями использования
              </a>{' '}
              и{' '}
              <a href="#" className={styles.termsLink}>
                политикой конфиденциальности
              </a>
            </label>
          </div>

          <button type="button" className={styles.submitButton} onClick={handleSubmit(onSubmit, onError)}>
            Зарегистрироваться
          </button>
        </div>

        <div className={styles.footer}>
          <p>
            Уже есть аккаунт? <Link to="/login">Войти</Link>
          </p>
        </div>

        <Socials />
      </div>
    </div>
  );
};

export default Register;
