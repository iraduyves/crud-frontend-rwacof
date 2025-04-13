import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-8 m:px-4 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Rwacoff</NavLink>
        </div>

        <div className="hidden md:flex space-x-4 text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-white font-semibold pb-1"
                : "hover:text-gray-100 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-white font-semibold pb-1"
                : "hover:text-gray-100 transition"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-white font-semibold pb-1"
                : "hover:text-gray-100 transition"
            }
          >
            Analytics
          </NavLink>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-blue-300 px-4 pb-4">
          <NavLink
            to="/"
            className="block py-2 text-white hover:text-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="block py-2 text-white hover:text-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
