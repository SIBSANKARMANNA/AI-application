// frontend/src/App.js

import React, { useState,useEffect } from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import NotFound from './pages/NotFound';
// import AnalyzeSentiment from './components/AI/analyzeSentiment';
// import AdminCreateUser from './pages/CreateAdminPage';
import ResetPassword from './pages/ResetPassword';
// import AdminDashboard from './pages/AdminDashboard';
// import Recommendations from './components/AI/Recommendations';
import RecommendationsPage from './pages/RecommendationsPage';
import { useNavigate } from 'react-router-dom';
import AnalyzeSentimentPage from './pages/AnalyzeSentimentPage'
import CreateAdminPage from './pages/CreateAdminPage';
import AdminDashboardPage from './pages/AdminDashboardPage';


const App = () => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLoginSuccess = (userData) => {
    setToken(userData.token);
    localStorage.setItem('token', userData.token);
    localStorage.setItem('user',userData.role);
    setUser(userData);
  };
  useEffect(() => {
    const clearTokenOnRefresh = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    };

    window.addEventListener('beforeunload', clearTokenOnRefresh);

    return () => {
      window.removeEventListener('beforeunload', clearTokenOnRefresh);
      navigate("/");
    };
  }, []);
 
  return (
 
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route
              path="/login"
              element={<LoginPage onLoginSuccess={handleLoginSuccess} />}
            />

          <Route path="/register" element={<RegisterPage/>} />
          <Route
              path="/profile"
              element={<ProfilePage token={token} />}
            />
          <Route component={NotFound} />
          <Route path="/sentiment" element={<AnalyzeSentimentPage/>}/>
          <Route path="/suggestions" element={<RecommendationsPage/>}/>
          <Route path="/create-admin" element={<CreateAdminPage/>}/>
          <Route path="/reset-password" element={<ResetPassword/>}/>
          <Route path="/admin" element={<AdminDashboardPage/>}/>
        </Routes>
      </div>
  );
};

export default App;
