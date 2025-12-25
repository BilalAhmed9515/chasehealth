"use client"
import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { VscMenu } from "react-icons/vsc";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [menuopen, setMenuOpen] = useState(false)
  const openmenu = () => {
    setMenuOpen(!menuopen)
  }
  return (
    <nav className="w-ful py-1 px-2 shadow-md lg:h-28 h-20">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <div className="lg:ml-12">
          <h1 className="text-white text-xl font-bold cursor-pointer">
            <a href="/"><img src="/logo.webp" alt="logo" className="lg:w-28 w-20" /></a>
          </h1>
        </div>

        {/*Desktop Menu */}
        <div>
          <ul className="hidden lg:flex gap-6 text-[#1E4491] font-bold text-md">
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



        {/*Mobile Menu */}
        {
          menuopen && (
            <div className="lg:hidden absolute top-20 w-full bg-white left-0 p-4">
            <ul className="gap-2 flex flex-col text-[#1E4491] font-bold text-md justify-center">
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
          )   
        }

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          {
            menuopen ? <RxCross1 onClick={openmenu} className="text-[#1E4491] text-2xl" /> :
            <VscMenu onClick={openmenu} className="text-[#1E4491] text-2xl"/>
          }
        </div>





      </div>
    </nav>
  );
};

export default Navbar;
