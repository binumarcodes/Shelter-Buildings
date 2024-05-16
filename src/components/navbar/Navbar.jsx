import React, { useState } from 'react';
import logo from '/src/assets/images/logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className='navbar'>
      <img src={logo} className='logo' alt='logo' />
      <div className={`menu-icon ${showSidebar ? 'active' : ''}`} onClick={toggleSidebar}>
        <div className='menu-line'></div>
        <div className='menu-line'></div>
        <div className='menu-line'></div>
      </div>
      <div className={`sidebar ${showSidebar ? 'active' : ''}`}>
        <nav>
          <ul>
            <li>
              <Link to='/' className='link' onClick={toggleSidebar}>Welcome</Link>
            </li>
            <li>
              <Link to='/services' className='link' onClick={toggleSidebar}>Services</Link>
            </li>
            <li>
              <Link to='/portfolio' className='link' onClick={toggleSidebar}>Portfolio</Link>
            </li>
            <li>
              <Link to='/blog' className='link' onClick={toggleSidebar}>Gallery</Link>
            </li>
            <li>
              <Link to='/about' className='link' onClick={toggleSidebar}>About us</Link>
            </li>
            <li>
              <Link to='/contact' className='link' onClick={toggleSidebar}>Contact</Link>
            </li>
            <li>
              <Link to='/contact' className='link' onClick={toggleSidebar}>Client Page</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
