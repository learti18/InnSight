import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setError(null); // Clear any previous errors when input changes
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { email, password } = inputs;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!email || !password || !emailRegex.test(email)) {
            setError("Please fill all fields correctly.");
            return;
        }
    
        try {
            const res = await axios.post("http://localhost:8800/api/auth/login", {
                email,
                password
            });
            navigate("/"); // Redirect to home page after successful login
            console.log("Success:", res.data);
        } catch (error) {
            setError(error.response?.data.error || "Error during login");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form className="flex flex-col gap-4">
                <h1 className="text-center text-2xl">Login</h1>
                <div className="flex flex-col">
                    <label>Email</label>
                    <input
                        required
                        className="rounded bg-gray-200 p-2 text-lg w-80"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={inputs.email}
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
                        placeholder="Password"
                        value={inputs.password}
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
                    <span>Don't have an account? </span>
                    <Link to="/SignUp" className="text-stone-400 no-underline">
                        Register
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
