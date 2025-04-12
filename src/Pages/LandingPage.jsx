import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">MyStore</span>
        </h1>
        <p className="text-gray-600 text-lg mb-6 max-w-xl">
          Find what you need — fast, fresh, and reliable.
        </p>
        <Link
          to="/products"
          className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700 transition"
        >
          Browse Products
        </Link>
      </main>
    </div>
  );
};

export default LandingPage;
