import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../components/Header/Header'; // путь к вашему Header
import Users from '../pages/Users/Users';
import Profile from '../pages/Profile/Profile';
import Daсhbord from '../pages/Dachbord/Dachbord';
import Catalog from '../pages/Catalog/Catalog';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { ROUTES } from './types';

// Основной компонент приложения
function App() {
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
                <Route path={ROUTES.DASHBOARD} element={<Daсhbord />} />
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
}
export default App;
