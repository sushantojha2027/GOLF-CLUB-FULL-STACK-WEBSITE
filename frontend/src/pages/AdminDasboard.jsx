
// pages/AdminDashboard.jsx
import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const fetchAllUsers = async () => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      setError('No admin token found');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/admin/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (res.ok) setUsers(data);
      else setError(data.message || 'Error fetching users');
    } catch (err) {
      setError('Network error');
      console.error(err);
    }
  };

 const deleteUser = async (userId) => {
  const confirmDelete = window.confirm('Are you sure you want to delete this user?');
  if (!confirmDelete) return;

  const token = localStorage.getItem('adminToken');
  try {
    const res = await fetch(`http://localhost:3000/api/admin/user/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const contentType = res.headers.get('content-type');
    if (!res.ok) {
      if (contentType && contentType.includes('application/json')) {
        const data = await res.json();
        throw new Error(data.message || 'Delete failed');
      } else {
        throw new Error('Unexpected server response');
      }
    }

    alert('User deleted successfully');
    fetchAllUsers();
  } catch (err) {
    console.error('Delete error:', err);
    alert(err.message || 'Network error');
  }
};

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className="p-6 bg-gradient-to-br from-green-50 to-white min-h-screen">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-8">Admin Dashboard</h1>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <div className="overflow-x-auto shadow-lg rounded-xl bg-white p-4">
        <table className="min-w-full table-auto">
          <thead className="bg-green-200">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Mobile</th>
              <th className="px-4 py-2 text-left">Profession</th>
              <th className="px-4 py-2 text-left">Golf Experience</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id} className="border-t hover:bg-green-50">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.mobile}</td>
                <td className="px-4 py-2">{user.profession}</td>
                <td className="px-4 py-2">{user.golfExperience}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md shadow"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;