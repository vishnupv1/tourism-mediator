import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login"; // Adjust the import path as needed

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e")',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Content */}
      <div className="relative z-10 px-4 text-center max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Explore the World with Us
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
          Your gateway to unforgettable travel experiences. Discover
          destinations, book your next adventure, and make memories that last a
          lifetime.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/signup"
            className="bg-purple-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg uppercase transition duration-300 hover:bg-purple-700 focus:outline-none focus:ring-0 ring-0 border-none"
          >
            Start Exploring
          </Link>

          <button
            onClick={() => setShowLogin(true)}
            className="bg-white text-purple-600 text-lg font-semibold py-3 px-8 rounded-full shadow-lg uppercase transition duration-300 hover:bg-gray-200 focus:outline-none focus:ring-0 ring-0 border-none"
          >
            Login
          </button>
        </div>
      </div>

      {/* Login Popup */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </div>
  );
};

export default LandingPage;
