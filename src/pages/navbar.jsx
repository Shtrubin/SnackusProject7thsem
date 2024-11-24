import "../styles/navbar_styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div id="nav">
        <div id="nav-top">
          <div id="logo">
            <img
              src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?t=st=1723686274~exp=1723689874~hmac=7ace5166283ca85861a61b7f4f176518d0cb69ab6fc197716f1d5b3671102780&w=996"
              alt="Logo"
            />
            <h1>SnackUs</h1>
          </div>
          <div id="ad-image">
            <img src="https://via.placeholder.com/350x100" alt="Advertisement" />
          </div>
        </div>
        <div id="menus">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/Local">Local</Link></p>
          <p><Link to="/Mid-range">Mid-range</Link></p>
          <p><Link to="/High-End">High-End</Link></p>
          <p><Link to="/Search">Search</Link></p>
          <p><Link to="/signup">SignUp</Link></p>
          <p><Link to="/login">Login</Link></p>
          <p><Link to="/chatbot">Chatbot</Link></p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
