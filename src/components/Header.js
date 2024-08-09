import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <h1>Welcome to the Tech Job Board</h1>
      <div className="menu-icon" onClick={toggleMenu}>&#9776;</div>
      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          <li><a href="/job-listings">Job Listings</a></li>
          <li><a href="/job-detail">Job Detail</a></li>
          <li><a href="/candidate-dashboard">Candidate Dashboard</a></li>
          <li><a href="/employer-dashboard">Employer Dashboard</a></li>
          <li><a href="/application-form">Application Form</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
