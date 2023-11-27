import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { IoMenuOutline as MenuIcon } from 'react-icons/io5';
import { LINKS } from '../../data';
import Sidebar from '../Sidebar/Sidebar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className='navbar'>
        {/* Logo */}
        <div className='logo'>
          <NavLink to='/'>
            <img
              style={{ width: '100px', height: 'auto' }}
              src={require('./Logo.png')}
              alt='Logo'
            />
          </NavLink>
        </div>
        {/* Links */}
        <div className={`links ${isOpen ? 'hidden' : ''}`}>
          {LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) => (isActive ? 'activeLink' : '')}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Menu icon */}
        <div className='menuBtn' onClick={toggleSidebar}>
          <MenuIcon size={30} />
        </div>
      </div>
      {/* SIDEBAR */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
};

export default Header;
