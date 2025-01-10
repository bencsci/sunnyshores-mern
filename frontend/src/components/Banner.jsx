import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router";
import { ShopContext } from "../context/shopContext";

const Banner = () => {
  const { setCartItem, getCartCount, navigate, token, setToken } =
    useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItem({});
    navigate("/login");
  };

  return (
    <div className="w-full bg-sand shadow-md">
      {/* Main content container */}
      <div className="w-full flex flex-wrap md:flex-nowrap items-center p-6">
        {/* Left side: Logo */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 p-2 flex justify-center md:justify-start">
          <img
            src={assets.Logo}
            alt="Sunny Shores Logo"
            className="max-h-32 md:max-h-40 object-contain"
          />
        </div>

        {/* Right side: User info, date/time, login, quote */}
        <div className="w-full md:w-1/2 p-2 flex flex-col items-end">
          {/* Card with welcome text and action buttons */}
          <div className="bg-white rounded shadow p-4 w-full md:w-full lg:w-3/4 xl:w-1/2 text-right">
            <h5 className="text-black text-lg md:text-xl font-semibold mb-1">
              Welcome!
            </h5>
            <h6 className="text-black text-sm leading-relaxed">
              (Placeholder) Logged-in user info goes here.
              <br />
              It&apos;s (placeholder day), (placeholder date),
              <br />
              and the time is (placeholder time).
            </h6>

            {/* Action Buttons */}
            <div className="mt-3 flex justify-end gap-3">
              {/* Search Button */}
              <Link to="/catalog">
                <button
                  className="w-14 lg:w-20 bg-teal text-white px-3 py-2 rounded shadow hover:bg-teal-600 transition-colors flex items-center justify-center"
                  title="Catalog"
                >
                  <FaSearch size={18} />
                </button>
              </Link>

              {/* Cart Button */}
              <div className="relative">
                <Link to="/cart">
                  <button
                    className="w-14 lg:w-20 bg-teal text-white px-3 py-2 rounded shadow hover:bg-teal-600 transition-colors flex items-center justify-center"
                    title="Cart"
                  >
                    <FaShoppingCart size={18} />
                  </button>
                </Link>
                {/* Cart Count */}
                {getCartCount() > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </div>

              <div className="relative group">
                <button
                  onClick={() => (token ? null : navigate("/login"))}
                  className="w-14 lg:w-20 bg-teal text-white px-3 py-2 rounded shadow hover:bg-teal-600 transition-colors flex items-center justify-center"
                  title="User"
                >
                  <FaUser size={18} />
                </button>

                {/* User Dropdown */}
                {token && (
                  <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded text-black w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <ul className="text-left">
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        <Link to="/login">My Profile</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        <Link to="/orders">Orders</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                        <Link to="/login" onClick={logout}>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Placeholder for a quote or slogan */}
          <p className="quote text-black mt-3 w-full md:w-full lg:w-3/4 xl:w-1/2 italic">
            “(Placeholder) Random quote from the database...”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
