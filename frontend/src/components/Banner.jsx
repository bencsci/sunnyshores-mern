import React from 'react';
import Logo from '../assets/SunnyShoresLogo.png';

const Banner = () => {
  return (
    <div className="w-full bg-sand shadow-md">
      {/* Main content container - now w-full, no max-width */}
      <div className="w-full flex flex-wrap md:flex-nowrap items-center p-6">
        {/* Left side: Logo */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 p-2 flex justify-center md:justify-start">
          <img
            src={Logo}
            alt="Sunny Shores Logo"
            className="max-h-32 md:max-h-40 object-contain"
          />
        </div>

        {/* Right side: User info, date/time, login, quote */}
        <div className="w-full md:w-1/2 p-2 flex flex-col items-end">
          {/* Card with welcome text and login button */}
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

            {/* Login/Logout Button */}
            <button className="mt-3 bg-teal text-white px-3 py-1 rounded shadow hover:bg-teal-600 transition-colors">
              Log In
            </button>
          </div>

          {/* Placeholder for a quote or slogan */}
          <p className="quote text-black mt-3 w-full md:w-full lg:w-3/4 xl:w-1/2 italic">
            “(Placeholder) Random quote from the database...”
          </p>
        </div>
      </div>

      {/* Optional decorative wave at the bottom of the banner */}
      <div className="-mb-1">
        <svg
          className="w-full h-8 text-sand"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,208C672,224,768,224,864,192C960,160,1056,96,1152,58.7C1248,21,1344,11,1392,5.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Banner;