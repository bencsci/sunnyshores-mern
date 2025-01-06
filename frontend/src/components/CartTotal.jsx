import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";

const CartTotal = () => {
  const { currency, getCartAmount, navigate } = useContext(ShopContext);
  const [amounts, setAmounts] = useState({
    subtotal: 0,
    taxes: 0,
    shipping: 0,
    total: 0,
  });

  useEffect(() => {
    const fetchCartAmounts = async () => {
      const totals = await getCartAmount();
      setAmounts(totals);
    };

    fetchCartAmounts();
  }, [getCartAmount]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="flex justify-between text-gray-600 mb-2">
        <p>Subtotal:</p>
        <p>
          {currency}
          {amounts.subtotal.toFixed(2)}
        </p>
      </div>
      <div className="flex justify-between text-gray-600 mb-2">
        <p>Shipping:</p>
        <p>
          {currency}
          {amounts.shipping.toFixed(2)}
        </p>
      </div>
      <div className="flex justify-between text-gray-600 mb-2">
        <p>Taxes:</p>
        <p>
          {currency}
          {amounts.taxes.toFixed(2)}
        </p>
      </div>
      <div className="flex justify-between text-black font-semibold text-lg">
        <p>Total:</p>
        <p>
          {currency}
          {amounts.total.toFixed(2)}
        </p>
      </div>
      <button
        onClick={() => navigate("/place-order")}
        className="mt-4 w-full bg-teal text-white py-2 rounded shadow hover:bg-teal-500 transition"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartTotal;
