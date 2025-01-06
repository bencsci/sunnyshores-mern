import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import ProductItem from "./ProductItem";

const FeaturedProducts = () => {
  const { products } = useContext(ShopContext);

  // Calculate the starting index for today's featured products
  const today = new Date().getDate();
  const startIndex = today % products.length;

  // Select three products for the day
  const featuredProducts = [
    products[startIndex],
    products[(startIndex + 1) % products.length],
    products[(startIndex + 2) % products.length],
  ];

  return (
    <section className="mt-16">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredProducts.map((product) => (
          <ProductItem
            id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
