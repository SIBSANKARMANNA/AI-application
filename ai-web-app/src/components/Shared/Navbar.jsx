
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const user=localStorage.getItem('user')
  const isAdmin = (user=== 'admin');
  // console.log('user',user);
  // console.log('isAdmin',isAdmin);
  const handleLogout = () => {
    // Remove token and user from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Redirect to homepage
    navigate('/');
  };
  return (
    <nav className="navbar">
      
      {/* <Link to="/register">Register</Link>
      <Link to="/login">Login</Link> */}
        {!user && (
          <>
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      {user && (
        <>
          <Link to="/profile">Profile</Link>
          <Link to="/sentiment">Sentiment</Link>
          <Link to="/suggestions">Suggestions</Link>
          {isAdmin && (
            <>
              <Link to="/admin">Admin Dashboard</Link>
              <Link to="/create-admin">Create Admin</Link>
            </>
          )}
        </>
      )} 
  <button onClick={handleLogout}>Logout</button>
    </nav> 
  );
};

export default Navbar;


