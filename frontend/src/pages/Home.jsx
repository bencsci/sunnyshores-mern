import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const Home = () => {
  // Array of images with name labels
  const carouselImages = [
    { src: assets.BlueSurfBoard, name: "Blue Surfboard" },
    { src: assets.PurpleSurfBoard, name: "Purple Surfboard" },
    { src: assets.RedSurfBoard, name: "Red Surfboard" },
    { src: assets.BucketHat, name: "Bucket Hat" },
    { src: assets.LyocellShirt, name: "Lyocell Shirt" },
    { src: assets.ResortShirt, name: "Resort Shirt" },
    { src: assets.Sandles, name: "Sandals" },
    { src: assets.StrawHat, name: "Straw Hat" },
    { src: assets.SwimTrunks, name: "Swim Trunks" },
    { src: assets.SunGlasses, name: "Sunglasses" },
  ];

  // Track current index in local state
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [carouselImages.length]);

  // Get the current image object
  const { src, name } = carouselImages[currentIndex];

  return (
    <main className="bg-sand py-10">
      {/* Outer container to limit max width on large screens and center the content */}
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Main Hero / Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Section */}
          <article>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Coastal Escape to Summer Style!
            </h3>
            <p className="text-black mb-4 leading-relaxed">
              Established in 2024, <strong>Sunny Shores</strong> was born out of
              a passion for capturing the essence of summer and the coastal
              lifestyle. Our journey takes us to beaches around the globe, where
              we explore the vibrant world of surf essentials. We delve into the
              sandy shores and azure waves to curate a collection that reflects
              the spirit of carefree summer days.
            </p>
            <p className="text-black leading-relaxed mb-6">
              Step into our e-store, where summer never ends, and beach memories
              await. Embrace the sunshine, and let your style shine with Sunny
              Shores.
            </p>

            {/* Call to Action */}
            <button className="bg-teal text-white py-2 px-6 rounded shadow hover:bg-teal-600 transition-colors">
              Shop Now
            </button>
          </article>

          {/* Carousel Section with automatic transitions */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-full text-white flex items-center justify-center">
              {/* Display current image */}
              <img
                src={src}
                alt={name}
                className="h-full w-auto object-contain"
              />
            </div>

            {/* Display the image's name below the carousel */}
            <div className="bg-teal py-3 px-4 text-white w-full text-center">
              {name}
            </div>
          </div>
        </div>

        {/* Featured Products Section */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example Product Cards */}
            <div className="bg-white shadow-lg rounded p-4 text-center">
              <div className="bg-gray-200 h-40 mb-2 flex items-center justify-center text-gray-500">
                Product Image
              </div>
              <h3 className="text-lg font-semibold text-black">Surfboard X</h3>
              <p className="text-gray-600 text-sm mt-1">
                High-Performance Surfboard
              </p>
              <p className="text-black font-bold mt-2">$299.99</p>
              <button className="mt-3 bg-teal text-white py-1 px-3 rounded hover:bg-teal-600 transition-colors">
                View Details
              </button>
            </div>

            <div className="bg-white shadow-lg rounded p-4 text-center">
              <div className="bg-gray-200 h-40 mb-2 flex items-center justify-center text-gray-500">
                Product Image
              </div>
              <h3 className="text-lg font-semibold text-black">Wetsuit Pro</h3>
              <p className="text-gray-600 text-sm mt-1">
                Full Coverage Wetsuit
              </p>
              <p className="text-black font-bold mt-2">$149.99</p>
              <button className="mt-3 bg-teal text-white py-1 px-3 rounded hover:bg-teal-600 transition-colors">
                View Details
              </button>
            </div>

            <div className="bg-white shadow-lg rounded p-4 text-center">
              <div className="bg-gray-200 h-40 mb-2 flex items-center justify-center text-gray-500">
                Product Image
              </div>
              <h3 className="text-lg font-semibold text-black">
                Beach Essentials Kit
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Towel, Umbrella &amp; Sunscreen
              </p>
              <p className="text-black font-bold mt-2">$39.99</p>
              <button className="mt-3 bg-teal text-white py-1 px-3 rounded hover:bg-teal-600 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
            Why Choose Sunny Shores?
          </h2>
          <ul className="list-disc list-inside text-black space-y-2 leading-relaxed">
            <li>
              Over <strong>10 years</strong> of surf industry experience
            </li>
            <li>
              A team of dedicated surfers and beach lovers who understand
              quality
            </li>
            <li>
              Environmentally-conscious products and sustainable packaging
            </li>
            <li>Fast &amp; free shipping on orders over $75</li>
            <li>24/7 customer support and easy returns</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Home;
