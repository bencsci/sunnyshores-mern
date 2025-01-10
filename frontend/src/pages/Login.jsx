import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleState = () => {
    setCurrentState(currentState === "Sign Up" ? "Log In" : "Sign Up");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(`${backendUrl}/api/user/register`, {
          name,
          email,
          password,
        });
        console.log(response.data);

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
          console.log("clank");
        }
      } else {
        const response = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  return (
    <div className="flex items-center justify-center py-6 md:py-10 lg:py-12">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md md:max-w-lg lg:max-w-xl mx-4">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          {currentState === "Sign Up" ? "Create an Account" : "Welcome Back"}
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {currentState === "Sign Up" && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal text-white py-2 px-4 rounded-lg shadow-lg hover:bg-teal-600 transition"
          >
            {currentState}
          </button>
        </form>

        {/* Toggle Sign Up/Log In */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            {currentState === "Sign Up"
              ? "Already have an account?"
              : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={toggleState}
              className="text-teal-500 font-semibold hover:underline"
            >
              {currentState === "Sign Up" ? "Log In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
