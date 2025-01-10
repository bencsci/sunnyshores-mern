import { createContext, useEffect, useState } from "react";
//import { products } from "../assets/assets";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const currency = "$";
  const delivery_fee = 10;
  const tax_rate = 0.15;
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const addToCart = (itemId) => {
    const cartData = structuredClone(cartItems);
    cartData[itemId] = (cartData[itemId] || 0) + 1;
    setCartItems(cartData);
  };

  const updateQuantity = async (itemId, change) => {
    const cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += change;
      if (cartData[itemId] <= 0) {
        delete cartData[itemId];
      }
    }
    setCartItems(cartData);
  };

  const getCartAmount = async () => {
    const subtotal = Object.entries(cartItems).reduce(
      (total, [itemId, quantity]) => {
        const product = products.find((p) => p._id === itemId);
        return total + product.price * quantity;
      },
      0
    );

    const taxes = subtotal * tax_rate;
    const total = subtotal + taxes + delivery_fee;

    return {
      subtotal,
      taxes,
      shipping: delivery_fee,
      total,
    };
  };

  const getCartCount = () => {
    return Object.values(cartItems).reduce(
      (total, quantity) => total + quantity,
      0
    );
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const getProductData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error fetching product data");
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const value = {
    products,
    currency,
    delivery_fee,
    cartItems,
    addToCart,
    updateQuantity,
    getCartAmount,
    getCartCount,
    navigate,
    backendUrl,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
