import React from 'react';
import './Header.css';

const Header = ({ titulo }) => {
  return (
    <header className="main-header-standard">
      <div className="header-title">
        <h2>{titulo}</h2>
      </div>
      
      <div className="header-right-side">
        <button className="top-icon-button" aria-label="Notificações">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-svg">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="notification-dot" />
        </button>

        <div className="user-profile-box">
          <div className="user-text">
            <strong>Luma Oliveira</strong>
            <span>Monitora: Engenharia de Software</span>
          </div>
          <div className="user-avatar-circle">L</div>
        </div>
      </div>
    </header>
  );
};

export default Header;