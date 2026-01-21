import React, { memo, useEffect, useState } from 'react';
import './Header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/routes/types';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { fetchUserById, logoutUser } from '@/redux/User/user';
import { UserI } from '@/redux/User/types';

export default memo(function Header() {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [user, setUser] = useState<UserI>({} as UserI);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const fetchUser = async () => {
    const userId = localStorage.getItem('userId');
    const user = await dispatch(fetchUserById(userId)).unwrap();
    setUser(user);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isDropdownOpen && !target.closest('.profile-container')) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    dispatch(logoutUser());
    navigate(ROUTES.LOGIN);
    // setIsDropdownOpen(false);
  };

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
          <div className="profile-container">
            <div className="profile" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <picture>
                {/* <source srcSet="./imgSmoll.png" media="(max-width: 768px)" />
                <source srcSet="./imgMedium.png" media="(max-width: 1024px)" /> */}
                <img src="./img.png" alt="Profile" />
              </picture>
              <p>{user?.name}</p>
              <img className="profile__img" src="./care.svg" alt="Dropdown" />
            </div>
            {isDropdownOpen && (
              <div className="profile-dropdown">
                <Link to={ROUTES.PROFILE} className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>
                  Профиль
                </Link>
                <button className="dropdown-item logout-button" onClick={handleLogout}>
                  Выйти
                </button>
              </div>
            )}
          </div>
        </header>
      </div>
    </div>
  );
});
