import "../styles/navbar_styles.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import headAds from "../assets/headAds.png"

const Navbar = () => {
  return (
    <>
      <div id="nav">
        <div id="nav-top">
          <div id="logo">
            <img
              src={logo}
              alt="Logo"
            />
            <h1>SnackUs</h1>
          </div>
          <div id="ad-image">
            <img src={headAds} alt="Advertisement" />
          </div>
        </div>
        <div id="menus">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/Local">Local</Link></p>
          <p><Link to="/Mid-range">Mid-range</Link></p>
          <p><Link to="/High-End">High-End</Link></p>
          <p><Link to="/search">Search</Link></p>
          <p><Link to="/signup">SignUp</Link></p>
          <p><Link to="/login">Login</Link></p>
          <p><Link to="/chatbot">Chatbot</Link></p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
