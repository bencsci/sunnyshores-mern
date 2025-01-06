import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { ShopContext } from "../context/shopContext";
import ProductItem from "../components/ProductItem";
import Reviews from "../components/Review";

const Product = () => {
  const { productId } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);

  const fetchProductData = async () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
    } else {
      setProductData(undefined); // Indicate no product was found
    }
  };

  useEffect(() => {
    if (products && products.length > 0) {
      fetchProductData();
    }
  }, [productId, products]);

  if (productData === undefined) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-4">
          Sorry, we couldn't find the product you're looking for.
        </p>
        <Link
          to="/catalog"
          className="bg-teal text-white px-6 py-2 rounded shadow hover:bg-teal-500 transition"
        >
          Back to Catalogue
        </Link>
      </div>
    );
  }

  if (!productData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading product...</p>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (item) => item.category === productData.category && item._id !== productId
  );

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img
              src={productData.image[0]}
              alt={productData.name}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{productData.name}</h1>
            <p className="text-gray-600 mb-4">{productData.description}</p>
            <p className="text-2xl font-semibold text-teal-600 mb-4">
              {productData.currency || "$"}
              {productData.price}
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>High-quality materials</li>
              <li>Eco-friendly manufacturing</li>
              <li>Available in multiple sizes</li>
              <li>Perfect for outdoor activities</li>
            </ul>
            <button
              onClick={() => addToCart(productData._id)}
              className="bg-teal text-white px-6 py-2 rounded shadow hover:bg-teal-500 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Related Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((product) => (
              <ProductItem
                id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            ))
          ) : (
            <p className="text-gray-600 text-center">
              No related products found.
            </p>
          )}
        </div>
      </div>

      <div className="mt-12 bg-white shadow-lg rounded-lg p-6 max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
        <Reviews reviews={productData.reviews} />
      </div>
    </div>
  );
};

export default Product;
