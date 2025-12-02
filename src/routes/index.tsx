import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { memo, lazy } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { ROUTES } from './types';

const Profile = lazy(() => import('../pages/Profile/Profile'));
const Dashbord = lazy(() => import('../pages/Dachbord/Dachbord'));
const Catalog = lazy(() => import('../pages/Catalog/Catalog'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Users = lazy(() => import('../pages/Users/Users'));

// Основной компонент приложения
export default memo(function App() {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId="<your_client_id>">
        <Router>
          <div className="app">
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Profile />} />
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.REGISTER} element={<Register />} />
                <Route path={ROUTES.DASHBOARD} element={<Dashbord />} />
                <Route path={ROUTES.USERS} element={<Users />} />
                <Route path={ROUTES.PROFILE} element={<Profile />} />
                <Route path={ROUTES.CATALOG} element={<Catalog />} />
              </Routes>
            </main>
          </div>
        </Router>
      </GoogleOAuthProvider>
    </Provider>
  );
});
