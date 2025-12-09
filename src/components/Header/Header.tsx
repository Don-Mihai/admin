import React, { memo, useEffect, useState } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '@/routes/types';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { fetchUserById } from '@/redux/User/user';
import { UserI } from '@/redux/User/types';

export default memo(function Header() {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const [user, setUser] = useState<UserI>({} as UserI);

  const fetchUser = async () => {
    const userId = localStorage.getItem('userId');
    const user = await dispatch(fetchUserById(userId)).unwrap();
    setUser(user);
  };

  useEffect(() => {
    fetchUser();
  }, []);

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
            <picture>
              {/* <source srcSet="./imgSmoll.png" media="(max-width: 768px)" />
              <source srcSet="./imgMedium.png" media="(max-width: 1024px)" /> */}
              <img src="./img.png" alt="Profile" />
            </picture>
            <p>{user.name}</p>
            <img className="profile__img" src="./care.svg" alt="Dropdown" />
          </Link>
        </header>
      </div>
    </div>
  );
});
