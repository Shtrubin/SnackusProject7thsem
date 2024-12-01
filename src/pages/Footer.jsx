import React from 'react';
import '../styles/footer.css'
const Footer = () => {
    return (
        <footer id="footer">
            <div id="footer-content">
                <p>&copy; 2024 Snakus. All rights reserved.</p>
                <div id="footer-links">
                    <button className="footer-link" onClick={() => alert('Privacy Policy Clicked')}>Privacy Policy</button>
                    <button className="footer-link" onClick={() => alert('Terms of Service Clicked')}>Terms of Service</button>
                    <button className="footer-link" onClick={() => alert('Contact Clicked')}>Contact</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
