import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '@/routes/types';

export default function Header() {
  const location = useLocation();

  return (
    <div>
      <div className="wrapper">
        <header className="header container">
          <Link to="/" className="logo">
            Ecomora
          </Link>
          <nav className="nav">
            <Link to={ROUTES.DASHBOARD} className={location.pathname === ROUTES.DASHBOARD ? 'link__active' : 'link'}>
              Dashboard
            </Link>
            <Link to={ROUTES.CATALOG} className={location.pathname === ROUTES.CATALOG ? 'link__active' : 'link'}>
              Products
            </Link>

            <Link to={ROUTES.USERS} className={location.pathname === ROUTES.USERS ? 'link__active' : 'link'}>
              Users
            </Link>
          </nav>
          <Link to={ROUTES.PROFILE} className="profile">
            <img src="./img.png" alt="Profile" />
            <p>Adriano Darvin</p>
            <img className="profile__img" src="./care.svg" alt="Dropdown" />
          </Link>
        </header>
      </div>
    </div>
  );
}
