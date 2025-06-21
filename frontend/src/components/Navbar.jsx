/*import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
         <nav className="bg-gradient-to-r from-green-900 via-green-700 to-green-900 bg-[length:200%_200%] animate-gradient-move text-white p-4 shadow-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide animate-bounce">BLW Golf Club</div>
        <div className="space-x-6 text-lg">
          <Link to="/" className="hover:text-yellow-300 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300 transition duration-300">About Us</Link>
          <Link to="/gallary" className="hover:text-yellow-300 transition duration-300">Gallery</Link>
          <Link to="/register" className="hover:text-yellow-300 transition duration-300">Register</Link>
          <Link to="/login" className="hover:text-yellow-300 transition duration-300">Login</Link>
          <Link to="/dashboard" className="hover:text-yellow-300 transition duration-300">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
}*/



import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Trophy, HomeIcon, UserPlus, LogIn, Info, Camera,LogOut } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const linkClass = (path) =>
    `flex items-center gap-1 px-2 hover:text-green-800 ${
      location.pathname === path ? 'font-bold text-green-900' : 'text-green-900'
    }`;

  return (
    <nav className="bg-gradient-to-r from-green-200 to-green-400 px-6 py-4 flex items-center justify-between shadow-md">
      {/* Logo and Title */}
      <div className="flex items-center gap-3">
        <div className="bg-white p-2 rounded-xl shadow-md">
          <Trophy className="text-green-600" size={28} />
        </div>
        <div>
          <h1 className="text-xl font-bold text-green-800">BLW Golf Club</h1>
          <p className="text-xs text-green-700 font-semibold tracking-wide">★ PREMIUM EXCELLENCE ★</p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 text-sm font-semibold">
        <Link to="/" className={linkClass('/')}>
          <HomeIcon size={18} /> Home
        </Link>
        <Link to="/register" className={linkClass('/register')}>
          <UserPlus size={18} /> Registration
        </Link>
        <Link to="/login" className={linkClass('/login')}>
          <LogIn size={18} /> Login
        </Link>
        <Link to="/about" className={linkClass('/about')}>
          <Info size={18} /> About Us
        </Link>
        <Link to="/gallery" className={linkClass('/gallery')}>
          <Camera size={18} /> Gallery
        </Link>
         <Link to="/dashboard" className={linkClass('/dashboard')}>
          <Info size={18} /> DASHBOARD
        </Link>
        <Link to="/logout" className={linkClass('/logout')}>
          <LogOut size={18} /> LOGOUT
        </Link>
         <Link to="/admin/login" className={linkClass('/admin/login')}>
          <LogIn size={18} /> ADMIN LOGIN
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
