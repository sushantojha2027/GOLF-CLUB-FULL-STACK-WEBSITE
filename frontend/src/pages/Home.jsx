/*import { useNavigate } from 'react-router-dom';
import bg from '../assets/golf-bg.jpg'; 

export default function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    const isRegistered = localStorage.getItem('token');
    navigate(isRegistered ? '/login' : '/register');
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white brightness-75"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-xl text-center ">
        <div className='flex justify-center mb-4'>
        <img
          src="https://www.searchurcollege.com/blog/wp-content/uploads/2022/03/Untitled-26.png"
          alt="Golf Logo"
          className="w-48 h-auto mb-4 shadow-lg border-2 border-black animate-fade-in justify-content center aligh-items center "
          
        />
        </div>
        <h1 className="text-4xl font-bold mb-6">Welcome to BLW Golf Club</h1>
        <button
          onClick={handleStart}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg"
        >Get Started
        </button>
      </div>
    </div>
  );
}*/
import React from 'react';
import { Trophy, Users, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

  const handleStart = () => {
    const isRegistered = localStorage.getItem('token');
    navigate(isRegistered ? '/login' : '/register');
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/golf-background')" }}
    >
      {/* Hero Section */}
      <section className="flex flex-col items-center text-white text-center pt-20 px-6">
        <div className="flex items-center gap-3">
          <Trophy size={36} className="text-yellow-400" />
          <h2 className="text-5xl font-extrabold">BLW Golf Club</h2>
        </div>
        <div className="mt-2 w-40 border-b-4 border-green-300"></div>
        <p className="mt-6 text-2xl font-semibold">Welcome to Elite Golfing Excellence</p>
        <p className="mt-4 max-w-2xl text-lg">
          Join our prestigious golf community where champions are made. Experience world-class facilities,
          professional coaching, and connect with fellow golf enthusiasts.
        </p>
      </section>

      {/* Features Section */}
      <section className="mt-16 px-10 flex flex-col md:flex-row gap-8 justify-center pb-10">
        <div className="bg-black/50 rounded-xl text-white p-6 w-full md:w-1/3 text-center shadow-lg">
          <Trophy size={36} className="mx-auto text-yellow-400" />
          <h3 className="text-xl font-bold mt-4">Championship Course</h3>
          <p className="text-sm mt-2">Play on our meticulously maintained 18-hole championship course</p>
        </div>
        <div className="bg-black/50 rounded-xl text-white p-6 w-full md:w-1/3 text-center shadow-lg">
          <Users size={36} className="mx-auto text-green-300" />
          <h3 className="text-xl font-bold mt-4">Elite Community</h3>
          <p className="text-sm mt-2">Connect with like-minded golfers and industry professionals</p>
        </div>
        <div className="bg-black/50 rounded-xl text-white p-6 w-full md:w-1/3 text-center shadow-lg">
          <MapPin size={36} className="mx-auto text-blue-400" />
          <h3 className="text-xl font-bold mt-4">Prime Location</h3>
          <p className="text-sm mt-2">Conveniently located with premium amenities and services</p>
        </div>
    

      </section>
          <div className="flex justify-center">
  <button
    onClick={handleStart}
    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg"
  >
    Get Started
  </button>
</div>
      

    </div>
  );
};

export default Home;
