import "../styles/navbar_styles.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import headAds from "../assets/headAds.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood , faHouse, faMugSaucer,faUtensils,faMagnifyingGlass,faRightFromBracket,faUserPlus,faRightToBracket} from '@fortawesome/free-solid-svg-icons';
import { faRocketchat } from '@fortawesome/free-brands-svg-icons';

const Navbar = ({ isLoggedIn }) => {
  const handleLogout = () => {
    localStorage.setItem("userLoggedIn", "false");
    window.location.reload(); 
  };

  return (
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
        <p><Link to="/"><FontAwesomeIcon icon={faHouse} /> Home</Link></p>
        <p><Link to="/Local"><FontAwesomeIcon icon={faBowlFood} /> Local</Link></p>
        <p><Link to="/Mid-range"><FontAwesomeIcon icon={faMugSaucer} /> Mid-range</Link></p>
        <p><Link to="/High-End"><FontAwesomeIcon icon={faUtensils} /> High-End</Link></p>
        <p><Link to="/search"><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</Link></p>
        <p><Link to="/chatbot"><FontAwesomeIcon icon={faRocketchat} /> Chatbot</Link></p>
        {!isLoggedIn ? (
          <>
            <p><Link to="/signup"><FontAwesomeIcon icon={faUserPlus} /></Link></p>
            <p><Link to="/login"><FontAwesomeIcon icon={faRightToBracket} /></Link></p>
          </>
        ) : (
          <p onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket} /></p>
        )}
      </div>
    </div>
  );
};

export default Navbar;
