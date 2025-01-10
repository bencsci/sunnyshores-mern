import React, { useState, useEffect, useContext } from "react";
import { ShopContext } from "../context/shopContext";
import Placeholder from "../assets/Placeholder.png";

const Hero = () => {
  const { products } = useContext(ShopContext); // Access products from ShopContext
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (products.length > 0) {
        setCurrentIndex((prev) => (prev + 1) % products.length);
      }
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [products]);

  // Determine the current product or use placeholder
  const currentProduct =
    products.length > 0
      ? products[currentIndex]
      : { image: Placeholder, name: "Loading Product..." };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* Text Section */}
      <article>
        <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Coastal Escape to Summer Style!
        </h3>
        <p className="text-black mb-4 leading-relaxed">
          Established in 2024, <strong>Sunny Shores</strong> was born out of a
          passion for capturing the essence of summer and the coastal lifestyle.
          Our journey takes us to beaches around the globe, where we explore the
          vibrant world of surf essentials. We delve into the sandy shores and
          azure waves to curate a collection that reflects the spirit of carefree
          summer days.
        </p>
        <p className="text-black leading-relaxed mb-6">
          Step into our e-store, where summer never ends, and beach memories
          await. Embrace the sunshine, and let your style shine with Sunny
          Shores.
        </p>
        <button className="bg-teal text-white py-2 px-6 rounded shadow hover:bg-teal-600 transition-colors">
          Shop Now
        </button>
      </article>

      {/* Carousel Section */}
      <div className="flex flex-col items-center md:items-start">
        <div className="relative w-full text-white flex items-center justify-center">
          <img
            src={currentProduct.image}
            alt={currentProduct.name}
            className="h-full w-auto object-contain"
          />
        </div>
        <div className="bg-teal py-3 px-4 text-white w-full text-center">
          {currentProduct.name}
        </div>
      </div>
    </div>
  );
};

export default Hero;
