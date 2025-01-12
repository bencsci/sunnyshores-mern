import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        `${backendUrl}/api/order/user-orders`,
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        const allItemOrders = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allItemOrders.push(item);
          });
        });
        setOrderData(allItemOrders.reverse());
      }
    } catch (error) {}
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="max-w-screen-lg mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Your Orders
        </h1>

        {orderData.length === 0 ? (
          <div className="text-center space-y-6">
            <h2 className="text-lg md:text-xl font-bold text-gray-800">
              You have no orders yet.
            </h2>
            <p className="text-gray-600">
              Start shopping and create your first order!
            </p>
            <Link to="/catalog">
              <button className="bg-teal text-white px-4 py-2 md:px-6 md:py-2 rounded shadow mt-6">
                Browse Catalogue
              </button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {orderData.map((item) => (
              <div
                key={item._id}
                className=" bg-white shadow-lg rounded-lg p-4 md:p-6 flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 w-full md:w-[800px]"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-72 h-72 object-cover rounded-lg mx-auto md:mx-0"
                />

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-semibold text-teal">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    <strong>Price:</strong> {currency}
                    {item.price.toFixed(2)}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    <strong>Quantity:</strong> {item.quantity}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    <strong>Subtotal:</strong> {currency}
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                  <p className="text-gray-500 text-sm mt-4">
                    <strong>Order Date:</strong>{" "}
                    {new Date(item.date).toDateString()}
                  </p>
                  <p className="text-gray-500 text-sm mt-4">
                    <strong>Payment Method:</strong>{" "}
                    {item.paymentMethod === "cod"
                      ? "Cash on Delivery"
                      : item.paymentMethod}
                  </p>
                  <p className="text-gray-500 text-sm mt-4">
                    <strong>Status:</strong> {item.status}
                  </p>
                </div>

                {/* View Details Button */}
                <div>
                  <Link
                    to={`/product/${item._id}`}
                    className="hover:underline text-sm font-semibold"
                  >
                    View Product Details
                  </Link>
                </div>
              </div>
            ))}

            {/* Fill Empty Space */}
            {orderData.length < 3 && (
              <div className="flex-grow flex flex-col justify-center items-center bg-white shadow-lg rounded-lg p-4 md:p-6 h-40">
                <p className="text-gray-600 text-sm">
                  Add more products to your cart to see them here!
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="shadow-lg py-4">
        <div className="max-w-screen-lg mx-auto text-center text-gray-500">
          Thank you for shopping with us!
        </div>
      </div>
    </div>
  );
};

export default Orders;
