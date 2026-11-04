import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="brand">
          <div className="brand-logo">AG</div>
          <div className="brand-text">
            <span className="brand-title">AgriSmart</span>
            <span className="brand-subtitle">Smart Agriculture Portal</span>
          </div>
        </div>

        <nav className="nav-menu">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink to="/crops" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Crops & Telemetry
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            About System
          </NavLink>
        </nav>

        <div className="header-status">
          <span className="status-pill">
            <span className="status-dot"></span>
            Sensors Online
          </span>
          <span className="badge-batch">B3 • 16010125139</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
