import { useState } from "react";
import "../styles/login.css";
import CustomFormField from "../components/custom_form_field";
import { Link, useNavigate } from "react-router-dom";

const UserLogIn = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();  

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (email.length === 0) {
            alert("Email cannot be empty");
            return;
        }
        if (password.length < 6) {
            alert("Password should have minimum 6 characters");
            return;
        }
    
        const userData = {
            email,
            password,
        };
    
        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                alert("Login successful!");
    
                // Store the user ID in localStorage
                localStorage.setItem("userLoggedIn", "true");
                localStorage.setItem("userId", data.user_id); // Store user ID
                
                setIsLoggedIn(true);  // Update state
                navigate("/");  // Redirect to the home page or dashboard
            } else {
                alert(data.error || "Invalid email or password");
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("Error during login");
        }
    };
    

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    return (
        <div id="login-container">
            <div id="login-left">
                <div id="snakus-title">Snackus</div>

                <form id="login-box" onSubmit={handleSubmit}>
                    <h1 id="login-title">LOGIN</h1>
                    <CustomFormField
                        label="Email"
                        cName="email"
                        placeholder="Enter your email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <CustomFormField
                        label="Password"
                        cName="password"
                        placeholder="Enter a strong password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <div id="login-button">
                        <input value="Login" type="submit" />
                    </div>
                    <div id="signup-field">
                        <p>Don't have an account? <Link to="/signup">Signup</Link></p>
                    </div>
                </form>
            </div>

            <div id="login-right"></div>
        </div>
    );
};

export default UserLogIn;
