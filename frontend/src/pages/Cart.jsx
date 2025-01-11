import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length === 0) return;

    const tempData = [];

    // cartItems should be an object: { itemId: quantity, ... }
    for (const itemId in cartItems) {
      const quantity = cartItems[itemId];
      if (quantity > 0) {
        // Find the corresponding product by _id
        const product = products.find((p) => p._id === itemId);
        if (product) {
          tempData.push({
            ...product,
            quantity,
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItems, products]);

  return (
    <>
      {products.length === 0 ? (
        <div className="flex justify-center h-[750px]"></div>
      ) : (
        <div className="max-w-screen-lg mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Your Shopping Cart
          </h1>
          {cartData.length === 0 ? (
            <div className="text-center space-y-6">
              {/* Motivational Message */}
              <h2 className="text-xl font-bold text-gray-800">
                Your cart is currently empty.
              </h2>
              <p className="text-gray-600">
                Let’s add some exciting products to your cart and get ready for
                your next adventure!
              </p>

              <div className="flex justify-center h-80">
                <img src={assets.Logo} />
              </div>

              {/* Browse Catalogue Button */}
              <Link to="/catalog">
                <button className="bg-teal text-white px-6 py-2 rounded shadow mt-6">
                  Browse Catalogue
                </button>
              </Link>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-6 mb-6">
                {cartData.map((item) => (
                  <div
                    key={item._id}
                    className="flex flex-col sm:flex-row items-center sm:justify-between bg-white shadow rounded-lg p-4 space-y-4 sm:space-y-0 sm:space-x-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    <div className="flex-1 text-center sm:text-left">
                      <Link
                        to={`/product/${item._id}`}
                        className="text-lg font-semibold text-teal hover:underline"
                      >
                        {item.name}
                      </Link>
                      <p className="text-gray-600 text-sm">
                        Price: {currency}
                        {item.price.toFixed(2)}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Subtotal: {currency}
                        {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) =>
                          e.target.value === "" || e.target.value === "0"
                            ? null
                            : updateQuantity(item._id, Number(e.target.value))
                        }
                        className="w-16 text-center border border-gray-300 rounded px-2 py-1"
                      />
                    </div>
                    <button
                      onClick={() => updateQuantity(item._id, 0)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="mt-8">
                <CartTotal />
                <button
                  onClick={() => navigate("/place-order")}
                  className="mt-4 w-full bg-teal text-white py-2 rounded shadow-xl"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
