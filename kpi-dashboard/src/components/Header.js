// Header.js
import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <input type="text" placeholder="Search..." />
      <div className="profile-icon">
        <img src="path_to_icon" alt="Profile" />
      </div>
    </header>
  );
};

export default Header;
