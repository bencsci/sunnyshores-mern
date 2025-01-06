import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <div>
      <div className="bg-white shadow-lg rounded p-4 text-center">
        <img src={image[0]} className="mb-2 flex items-center justify-center" />
        <h3 className="text-lg font-semibold text-black">{name}</h3>
        <p className="text-black font-bold mt-2">
          {currency}
          {price}
        </p>
        <Link to={`/product/${id}`}>
          <button className="mt-3 bg-teal text-white py-1 px-3 rounded hover:bg-teal-600 transition-colors">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
