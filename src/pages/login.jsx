import { useState } from "react";
import "../styles/login.css";
import CustomFormField from "../components/custom_form_field";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email.length === 0) {
            alert("Please enter email");
            return;
        }
        if (password.length < 6) {
            alert("Please enter a strong password");
            return;
        }
        console.log("email =", email);
        console.log("password =", password);
    };

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    return (
        <div id="login-container">
            {/* Left Side */}
            <div id="login-left">
                {/* Snackus Title */}
                <div id="snakus-title">Snackus</div>

                {/* Login Form */}
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
                        <p>Don't have an account? <Link to="/register">Signup</Link></p>
                    </div>
                </form>
            </div>

            {/* Right Side */}
            <div id="login-right"></div>
        </div>
    );
};

export default Login;
