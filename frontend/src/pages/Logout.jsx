// pages/Logout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const token = localStorage.getItem('token');

    try {
      await fetch('http://localhost:3000/api/users/logout', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert('Logged out successfully');
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Logout failed. Please try again.');
    } finally {
      localStorage.clear();
      navigate('/login');
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-green-50 text-center px-4">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Confirm Logout</h2>
      <p className="text-lg text-gray-700 mb-4">
        Are you sure you want to log out from your BLW Golf Club account?
      </p>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;