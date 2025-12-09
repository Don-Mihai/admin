import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { memo, lazy, ReactNode } from 'react';
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

interface Props {
  children: any;
}
const PrivateRoute = ({ children }: Props) => {
  const isAuth = localStorage.getItem('userId');
  return isAuth ? children : <Navigate to={ROUTES.LOGIN} />;
};

// Основной компонент приложения
export default memo(function App() {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId="<your_client_id>">
        <Router>
          <div className="app">
            <main className="main-content">
              <Routes>
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.REGISTER} element={<Register />} />

                <Route
                  path="/"
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  }
                />
                <Route
                  path={ROUTES.DASHBOARD}
                  element={
                    <PrivateRoute>
                      <Dashbord />
                    </PrivateRoute>
                  }
                />
                <Route
                  path={ROUTES.USERS}
                  element={
                    <PrivateRoute>
                      <Users />
                    </PrivateRoute>
                  }
                />
                <Route
                  path={ROUTES.PROFILE}
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  }
                />
                <Route
                  path={ROUTES.CATALOG}
                  element={
                    <PrivateRoute>
                      <Catalog />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </main>
          </div>
        </Router>
      </GoogleOAuthProvider>
    </Provider>
  );
});
