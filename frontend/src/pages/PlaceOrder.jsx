import React, { useContext, useState } from "react";
import { ShopContext } from "../context/shopContext";
import CartTotal from "../components/CartTotal";

const PlaceOrder = () => {
  const {navigate } = useContext(ShopContext);
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const [totals, setTotals] = useState({
    subtotal: 0,
    taxes: 0,
    shipping: 0,
    total: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo({ ...deliveryInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order placed:", { deliveryInfo, paymentMethod, totals });
    alert("Order placed successfully!");
  };

  return (
    <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Place Your Order</h1>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
        {/* Left Column: Delivery Info */}
        <form
          className="bg-white shadow-lg rounded-lg p-8 lg:p-12"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-6">Delivery Information</h2>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={deliveryInfo.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 mt-2"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={deliveryInfo.address}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 mt-2"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                name="city"
                value={deliveryInfo.city}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-3 mt-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Postal Code
              </label>
              <input
                type="text"
                name="postalCode"
                value={deliveryInfo.postalCode}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-3 mt-2"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={deliveryInfo.phone}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 mt-2"
            />
          </div>
        </form>

        {/* Right Column: Cart Totals and Payment Method */}
        <div>
          <div className="mb-8">
            <CartTotal totals={totals} />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 lg:p-12">
            <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="stripe"
                  checked={paymentMethod === "stripe"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-3"
                />
                Stripe
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-3"
                />
                PayPal
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-3"
                />
                Cash on Delivery
              </label>
              <button
                onClick={() => navigate("/orders")}
                type="submit"
                className="bg-teal text-white px-6 py-3 rounded shadow mt-8 hover:bg-teal-600 transition w-full"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
