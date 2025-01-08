import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-8 ">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-screen-lg w-full space-y-6">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
          About Sunny Shores
        </h1>

        {/* Introduction */}
        <div className="text-center space-y-4">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Welcome to <strong>Sunny Shores</strong>, your one-stop destination
            for embracing the coastal lifestyle. Established in 2024, we are
            dedicated to bringing you high-quality products that capture the
            essence of sun, sand, and surf.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Whether you're a surfer, a beach lover, or simply someone who
            appreciates the vibrant energy of summer, we have something special
            for you.
          </p>
        </div>

        {/* Mission Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-teal-600 text-center">
            Our Mission
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center">
            At Sunny Shores, our mission is simple: to make every day feel like
            summer. We strive to deliver not just products but experiences that
            inspire joy, relaxation, and adventure. From eco-friendly surfboards
            to stylish beachwear, every item in our store is handpicked with
            care.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-teal-600 text-center">
            What We Stand For
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-2">
            <li>Commitment to quality and sustainability.</li>
            <li>Empowering local communities and artisans.</li>
            <li>Encouraging outdoor exploration and a healthy lifestyle.</li>
            <li>Providing exceptional customer service and satisfaction.</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Sunny Shores Beach"
            className="rounded-lg shadow-lg w-full max-w-md md:max-w-2xl"
          />
        </div>

        {/* Closing Note */}
        <div className="text-center space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Thank You for Choosing Sunny Shores!
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We’re excited to be part of your journey. Whether you’re riding the
            waves or soaking up the sun, we hope our products bring you endless
            joy and inspiration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
