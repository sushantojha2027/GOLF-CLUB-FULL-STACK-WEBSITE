import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RegisterFormFull from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import AboutUs from "./pages/About"
import Gallery from "./pages/Gallery"
import Logout from "./pages/Logout"
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDasboard';
import './App.css'

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterFormFull />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
         <Route path="/logout" element={<Logout />} />
           <Route path="/admin/login" element={<AdminLogin />} />
           <Route path= '/admin/dashboard' element= {<AdminDashboard/>} />
      </Routes>
    </div>
  );
}
