import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const Hero = () => {
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

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [carouselImages.length]);

  const { src, name } = carouselImages[currentIndex];

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
          <img src={src} alt={name} className="h-full w-auto object-contain" />
        </div>
        <div className="bg-teal py-3 px-4 text-white w-full text-center">
          {name}
        </div>
      </div>
    </div>
  );
};

export default Hero;
