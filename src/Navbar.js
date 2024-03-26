import React from 'react';
import logo from './image.png';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="nav-container">
      {/* Logo */}
      <div className="logo-container">
        <Link to="/" >
          <img src={logo} alt="Logo" className='logo-image' />
        </Link>
      </div>


      {/* Yellow strip with links */}
      <div className="yellow-strip">
        {/* Navigation links */}
        {/* <nav> */}
        <ul>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/Events">Events</CustomLink>
          <CustomLink to="/Sponsors">Sponsors</CustomLink>
          <CustomLink to="/Scholarships">Scholarships</CustomLink>
          <CustomLink to="/Contactus">Contact Us</CustomLink>
        </ul>
        {/* </nav> */}
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <Link to={to} {...props}>
      <li className={isActive ? "active" : ""}>
        {children}
      </li>
    </Link>
  )
}
