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
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dachbord" element={<Daсhbord />} />
                <Route path="/users" element={<Users />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/catalog" element={<Catalog />} />
              </Routes>
            </main>
          </div>
        </Router>
      </GoogleOAuthProvider>
    </Provider>
  );
}
export default App;
