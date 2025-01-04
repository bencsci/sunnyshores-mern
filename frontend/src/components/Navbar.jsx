import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 bg-teal px-4 text-white">
      <h1 className="text-3xl font-bold">
        <NavLink to="/">Sunny Shores</NavLink>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        <li className="p-4 hover:underline">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li className="p-4 hover:underline">
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : ""
            }
          >
            Catalogue
          </NavLink>
        </li>
        <li className="p-4 hover:underline">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : ""
            }
          >
            About
          </NavLink>
        </li>
        <li className="p-4 hover:underline">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : ""
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          nav ? "left-0" : "-left-full"
        } fixed top-0 w-[60%] h-full bg-teal text-white ease-in-out duration-300`}
      >
        <h1 className="text-3xl font-bold m-4">
          <NavLink to="/" onClick={handleNav}>
            Sunny Shores
          </NavLink>
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-white">
            <NavLink
              to="/"
              onClick={handleNav}
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="p-4 border-b border-white">
            <NavLink
              to="/catalog"
              onClick={handleNav}
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : ""
              }
            >
              Catalogue
            </NavLink>
          </li>
          <li className="p-4 border-b border-white">
            <NavLink
              to="/about"
              onClick={handleNav}
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li className="p-4 border-b border-white">
            <NavLink
              to="/contact"
              onClick={handleNav}
              className={({ isActive }) =>
                isActive ? "underline font-semibold" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
