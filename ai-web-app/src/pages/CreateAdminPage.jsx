import React from 'react';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import CreateAdmin from './AdminCreateUser';
import './CreateAdminPage.css';

const CreateAdminPage = () => (
  <div className="create-admin-page">
    <Navbar />
    <main>
      <CreateAdmin />
    </main>
    <Footer />
  </div>
);

export default CreateAdminPage;
