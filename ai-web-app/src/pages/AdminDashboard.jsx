

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://ai-application-5lad.onrender.com/api/admin/users', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setUsers(response.data.users);
      } catch (err) {
        setError(err.response?.data?.message || 'Error fetching users');
      }
    };
    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`https://ai-application-5lad.onrender.com/api/admin/users/${userId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setUsers(users.filter((user) => user._id !== userId)); // Update the user list after deletion
    } catch (err) {
      setError(err.response?.data?.message || 'Error deleting user');
    }
  };

  return (
    <div className="admin-dashboard">
      <h2 className="admin-dashboard__title">Admin Dashboard</h2>
      {error && <p className="error-message">{error}</p>}
      {/* Apply scrolling only to the user list */}
      <ul className="user-list">
        {users.map((user) => (
          <li key={user._id} className="user-list__item">
            <img
              src={`http://localhost:5000/${user.profilePicture}`} 
              alt="Profile"
              style={{ width: '150px', height: '150px', borderRadius: '50%' }}
            />
            <span className="user-name">{user.name}</span>
            <span className="user-email">{user.email}</span>
            <button onClick={() => handleDeleteUser(user._id)} className="delete-button">
              Delete User
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
