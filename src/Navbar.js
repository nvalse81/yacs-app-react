import React from 'react';
import logo from './image.png';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav-container">
      {/* Logo */}
      <Link to="/" className="logo-container">
        <img src={logo} alt="Logo" className='logo-image' />
      </Link>

      {/* Yellow strip with links */}
      <div className="yellow-strip">
        {/* Navigation links */}
        <nav>
          <ul>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/Events">Events</CustomLink>
            <CustomLink to="/Sponsors">Sponsors</CustomLink>
            <CustomLink to="/Scholarships">Scholarships</CustomLink>
            <CustomLink to="/Contactus">Contact Us</CustomLink>
          </ul>
        </nav>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
