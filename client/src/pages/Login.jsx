import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    // Placeholder for validation function
    const validate = (event) => {
        // Prevent form submission if validation fails
        event.preventDefault();
    console.log("Validating form...");

    // Get form input values
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    // Regular expression to check if the username is in email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Simple validation example: check if username and password are not empty
    if (!username) {
        document.getElementById('invalid-email').innerText = "Username is required";
    } else if (!emailRegex.test(username)) {
        document.getElementById('invalid-email').innerText = "Please enter a valid email address";
    } else {
        document.getElementById('invalid-email').innerText = ""; // Clear error message
    }

    if (!password) {
        document.getElementById('invalid-pass').innerText = "Password is required";
    } else if (password.length < 8) {
        document.getElementById('invalid-pass').innerText = "Password must be at least 8 characters long";
    } else {
        document.getElementById('invalid-pass').innerText = ""; // Clear error message
    }

    // If validation passes, you can proceed with form submission
    if (username && password && emailRegex.test(username) && password.length >= 8) {
        console.log("Form submitted successfully!");
        // Add additional actions here, such as submitting form data
    }
    };

    return (
        
            <div className="flex items-center justify-center items-center h-screen w-[100%] ">
                
                <form method="post" action="Login" onSubmit={validate} className=" flex flex-col gap-4">
                    <h1 className="text-center text-2xl">Login</h1>
                    <div className="flex flex-col">
                        <label>Username</label>
                        <input className="rounded bg-gray-200 p-2 text-lg w-80 " type="text" required id="email" name="username" />
                        <p id="invalid-email" className="text-sm font-light text-red-600"></p>
                    </div>
                    <div className="flex flex-col">
                        <label>Password</label>
                        <input className="rounded bg-gray-200 p-2 text-lg w-80" type="password" id="pass" required name="password" />
                        <p id="invalid-pass" className="text-sm font-light text-red-600"></p>
                    </div>
                    <div className="flex justify-between items-center text-sm w-80">
                        <div className="flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <label className="pl-1">Keep me signed in</label>
                        </div>
                        <a href="#" className="text-stone-400 no-underline">Forgot password?</a>
                    </div>
                    <div className="mt-4">
                        <button type="submit" id="submit-btn" name="login" className="w-full rounded bg-stone-400 py-2 text-white text-lg cursor-pointer w-80">Login</button>
                    </div>
                    
                    <div className="text-center pt-2">
                        <label>Don't have an account? <Link to="SignUp" className="text-stone-400 no-underline w-80">Register</Link></label>
                    </div>
                </form>
            </div>
        );
     }
        export default Login;
        

