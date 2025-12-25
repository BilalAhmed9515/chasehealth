import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="w-ful py-1 px-2 shadow-md">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <div className="ml-12">
          <h1 className="text-white text-xl font-bold cursor-pointer">
            <a href="/"><img src="/logo.webp" alt="logo" className="w-28" /></a>
          </h1>
        </div>

        {/*Desktop Menu */}
        <div>
          <ul className="flex gap-6 text-[#1E4491] font-bold text-md">
            <li>
              <a href="/Training" className="hover:text-[#FFA500] transition">Training</a>
            </li>
            <li>
              <a href="/Treatments" className="hover:text-[#FFA500] transition">Treatments</a>
            </li>
            <li>
              <a href="/Contact" className="hover:text-[#FFA500] transition">Contact Us</a>
            </li>
            <li>
              <a href="/FAQ" className="hover:text-[#FFA500] transition">FAQ</a>
            </li>
            <li>
              <a href="/Reviews" className="hover:text-[#FFA500] transition">Reviews</a>
            </li>
          </ul>
        </div>

        <div>
          {/* icons */}
          <ul className="flex gap-4 text-md justify-center items-center">
            <li><a href="#"><MdOutlineShoppingCart className="text-xl" /></a></li>
            <li><a href="#"><FaSearch /></a></li>
            <li><a href="#" className="text-blue-500">Login/Register</a></li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
