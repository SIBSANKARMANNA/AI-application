import React from 'react';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import AdminDashboard from './AdminDashboard';
import './AdminDashboardPage.css';

const AdminDashboardPage = () => (
  <div className="admin-dashboard-page">
    <Navbar />
    <main>
      <AdminDashboard />
    </main>
    <Footer />
  </div>
);

export default AdminDashboardPage;
