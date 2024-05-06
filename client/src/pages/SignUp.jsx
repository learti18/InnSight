import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        lastname: "",
        date: "",
        email: "",
        password: "",
        confirmPassword: "",
    

    });
    const navigate =useNavigate()

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { name, lastname, date, email, password, confirmPassword } = inputs;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!name || !lastname || !date || !email || !password || password !== confirmPassword || !emailRegex.test(email) || password.length < 8) {
            alert("Please fill all fields correctly.");
            return;
        }
    
        try {
            const res = await axios.post("http://localhost:8800/api/auth/register", {
                name,
                lastname,
                date,
                email,
                password
            });
            navigate("/login")
    
            console.log("Success:", res.data);
            alert("Registration successful!");
        } catch (error) {
            console.error("Error:", error.response?.data || "Error during registration");
            alert("Registration failed: " + (error.response?.data.error || "Server error"));
        }
    };
    

    return (
        <div className="flex items-center justify-center h-screen w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h1 className="text-center text-2xl">Sign Up</h1>

                <div className="flex flex-col">
                    <label htmlFor="name">First Name</label>
                    <input type="text" id="name" name="name" autoComplete="given-name" onChange={handleChange} required className="rounded bg-gray-200 p-2 text-lg w-80" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id="lastname" name="lastname" autoComplete="family-name" onChange={handleChange} required className="rounded bg-gray-200 p-2 text-lg w-80" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="date">Date of Birth</label>
                    <input type="date" id="date" name="date" autoComplete="bday" onChange={handleChange} required className="rounded bg-gray-200 p-2 text-lg w-80" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" autoComplete="email" onChange={handleChange} required className="rounded bg-gray-200 p-2 text-lg w-80" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" autoComplete="new-password" onChange={handleChange} required className="rounded bg-gray-200 p-2 text-lg w-80" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" autoComplete="new-password" onChange={handleChange} required className="rounded bg-gray-200 p-2 text-lg w-80" />
                </div>

                <button type="submit" className="w-full rounded bg-stone-400 py-2 text-white text-lg cursor-pointer w-80 mt-4">Sign Up</button>

                <div className="text-center pt-2">
                    <label>Already have an account? <Link to="/Login" className="text-stone-400 no-underline">Log in</Link></label>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
