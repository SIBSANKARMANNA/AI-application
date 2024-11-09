import React, { useState } from 'react';
import axios from 'axios';
import './AdminCreateUser.css'; // Import the CSS file
import Navbar from '../components/Shared/Navbar';

const AdminCreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default to user

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://ai-application-5lad.onrender.com/api/admin/create', { name, email, password, role }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message || 'Error creating user');
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default AdminCreateUser;
