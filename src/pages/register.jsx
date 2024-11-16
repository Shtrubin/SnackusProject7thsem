import { useState } from "react";
import "../styles/register.css";
import CustomFormField from "../components/custom_form_field";
import { Link } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username.trim() === "") {
            alert("Please enter a username");
            return;
        }
        if (email.trim() === "") {
            alert("Please enter an email");
            return;
        }
        if (password.length < 6) {
            alert("Password should be at least 6 characters long");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        console.log("Signup details:", { username, email, password });
    };

    return (
        <div id="signup-container">
            {/* Left Side */}
            <div id="signup-left">
                {/* Snackus Title */}
                <div id="snakus-title">Snackus</div>

                {/* Signup Form */}
                <form id="signup-box" onSubmit={handleSubmit}>
                    <h1 id="signup-title">SIGN UP</h1>
                    <CustomFormField
                        label="Username"
                        cName="username"
                        placeholder="Enter your username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <CustomFormField
                        label="Email"
                        cName="email"
                        placeholder="Enter your email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <CustomFormField
                        label="Password"
                        cName="password"
                        placeholder="Enter your password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <CustomFormField
                        label="Confirm Password"
                        cName="confirm-password"
                        placeholder="Confirm your password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div id="signup-button">
                        <input value="Sign Up" type="submit" />
                    </div>
                    <div id="login-field">
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </form>
            </div>

            {/* Right Side */}
            <div id="signup-right"></div>
        </div>
    );
};

export default Register;
