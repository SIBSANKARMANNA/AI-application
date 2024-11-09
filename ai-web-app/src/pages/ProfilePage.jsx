// frontend/src/pages/ProfilePage.js

import React from 'react';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import UserProfile from '../components/Profile/UserProfile';
import "./ProfilePage.css";

const ProfilePage = ({ token }) => (
  <div className="profile-page">
    <Navbar />
    <main>
      <UserProfile token={token} />
    </main>
    <Footer />
  </div>
);

export default ProfilePage;
