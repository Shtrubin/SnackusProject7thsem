import "../styles/navbar_styles.css"
import { Link } from "react-router-dom";
const Navbar = ({title}) => {
    return (
        <>
            {/* main nav bar */}
            <div id='nav' >
                {/* first section */}
                <div id='logo'>
                    <img src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?t=st=1723686274~exp=1723689874~hmac=7ace5166283ca85861a61b7f4f176518d0cb69ab6fc197716f1d5b3671102780&w=996' alt='Logo' width={80} height={80} />
                    <h1>{title}</h1>
                </div>
                {/* second seciont */}
                <div id='menus'>
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/documents">Documents</Link></p>
                    <p><Link to="/settings">Setting</Link></p>
                    <p><Link to="/profile">Profile</Link></p>
                    <p><Link to="/download">Downloads</Link></p>
                </div>
            </div>
        </>
    );
}
export default Navbar