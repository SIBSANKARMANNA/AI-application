

import React, { useEffect, useState } from 'react';
import { getUserProfile, updateUserProfile } from '../../api/userApi';

const UserProfile = ({ token }) => {
  const [profile, setProfile] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getUserProfile(token);
      setProfile(data);
      setName(data.name);
      setEmail(data.email);
      setProfilePicture(data.profilePicture);
      // console.log('profile picture',data.profilePicture);
    };
    fetchProfile();
  }, [token]);

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    if (profilePicture) {
      formData.append('profilePicture', profilePicture);
    }

    await updateUserProfile(formData, token);
    setSuccess(true);
  };

  return profile ? (
    <div className="user-profile">
      <h2>User Profile</h2>

      {/* Display profile picture */}
      {profile.profilePicture && (
        <img src={profile.profilePicture} alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
      )}

      <form onSubmit={handleUpdate} encType="multipart/form-data">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input type="file" onChange={handleFileChange} accept="image/*" />
        <button type="submit">Update Profile</button>
        {success && <p>Profile updated successfully!</p>}
      </form>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default UserProfile;

