import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Catelog from "./pages/Catelog";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catelog" element={<Catelog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product:productid" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
