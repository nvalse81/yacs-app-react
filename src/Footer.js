import React from 'react';
import { Link } from "react-router-dom"

import './footer.css';
export default function Footer() {
    return (
        <div className="footer">
            <nav className="footer-container">
                {/* Yellow strip with links */}
                <div className="footer-strip">
                    {/* Navigation links */}
                    {/* <nav> */}
                        <ul>
                            <Link to="/">Home</Link>
                            <Link to="/Events">Events</Link>
                            <Link to="/Sponsors">Sponsors</Link>
                            <Link to="/Scholarships">Scholarships</Link>
                            <Link to="/Contactus">Contact Us</Link>
                        </ul>
                    {/* </nav> */}
                </div>
            </nav>
            
            <p className='copyright'>© 2021 YACS</p>
        </div>
    );
}