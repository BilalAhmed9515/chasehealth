import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 px-6 py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo */}
        <h1 className="text-white text-xl font-bold cursor-pointer">
          Logo
        </h1>

        {/* Menu */}
        <ul className="flex gap-6 text-white">
          <li>
            <a href="/" className="hover:text-gray-300 transition">
              Home
            </a>
          </li>
          <li>
            <a href="/About" className="hover:text-gray-300 transition">
              About
            </a>
          </li>
          <li>
            <a href="/Services" className="hover:text-gray-300 transition">
              Services
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
