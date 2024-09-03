import { useState } from "react";
import "../styles/login.css"
import CustomFormField from "../components/custom_form_field";
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = ()=>{
        console.log("email = ", email)
        console.log("password = ", password)
    }
    const handleEmailChange = (event)=>{
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event)=>{
        setPassword(event.target.value)
    }
    return (
        <form>
            <div id="login-box">
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
                    placeholder="Enter strong password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <div id="login-button" onClick={handleSubmit}>
                    Login
                </div>
            </div>
        </form>
    );
}
export default Login