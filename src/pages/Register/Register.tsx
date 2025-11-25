import { Link } from 'react-router-dom';
import Socials from '../../components/Socials/Socials';
import styles from './Register.module.css';

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Создать аккаунт</h1>
          <p className={styles.subtitle}>Присоединяйтесь к нам сегодня</p>
        </div>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Имя</label>
            <input type="text" className={styles.input} placeholder="Введите ваше имя" />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Email</label>
            <input type="email" className={styles.input} placeholder="Введите email адрес" />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Логин</label>
            <input type="text" className={styles.input} placeholder="Придумайте логин" />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Пароль</label>
            <input type="password" className={styles.input} placeholder="Придумайте пароль" />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Подтвердите пароль</label>
            <input type="password" className={styles.input} placeholder="Повторите пароль" />
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

          <button type="submit" className={styles.submitButton}>
            Зарегистрироваться
          </button>
        </form>

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
