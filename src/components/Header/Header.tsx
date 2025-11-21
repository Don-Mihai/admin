import React from 'react';
// import styles from './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <div className="wrapper">
        <header className="header container">
          <Link to="/" className="logo">
            Ecomora
          </Link>
          <nav className="nav">
            <Link to="/dachbord" className="link__active">
              Dashboard
            </Link>
            <Link to="/catalog" className="link">
              Products
            </Link>

            <Link to="/users" className="link">
              Users
            </Link>
          </nav>
          <Link to="/profile" className="profile">
            <img src="./img.png" alt="Profile" />
            <p>Adriano Darvin</p>
            <img className="profile__img" src="./care.svg" alt="Dropdown" />
          </Link>
        </header>
      </div>
    </div>
  );
}
