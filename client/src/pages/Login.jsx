// Login.jsx
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

import axios from "axios";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      console.log("Login successful");
    
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col gap-4">
        <h1 className="text-center text-2xl">Login</h1>
        <div className="flex flex-col">
          <label>Username</label>
          <input
            required
            className="rounded bg-gray-200 p-2 text-lg w-80"
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label>Password</label>
          <input
            required
            className="rounded bg-gray-200 p-2 text-lg w-80"
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
        </div>
        {error && <p className="text-red-600">{error}</p>}
        <div className="mt-4">
          <button
            type="button"
            className="w-full rounded bg-stone-400 py-2 text-white text-lg cursor-pointer"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
        <div className="text-center pt-2">
          <label>
            Don't have an account?{" "}
            <Link to="/SignUp" className="text-stone-400 no-underline">
              Register
            </Link>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Login;
