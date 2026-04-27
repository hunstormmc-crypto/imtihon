import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiSettings, FiBell, FiGlobe, FiLock } from 'react-icons/fi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle = {
    display: 'flex',
    position: 'sticky',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: scrolled ? 'rgba(9, 10, 13, 0.78)' : '#090A0D',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#fff',
    zIndex: 50,
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    transition: 'background-color 0.25s ease, backdrop-filter 0.25s ease',
  };

  const containerStyle = {
    display: 'flex',
    width: '100%',
    maxWidth: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px',
    gap: '24px',
  };

  const leftStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  };

  const linkStyle = {
    color: '#E5E7EB',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: 500,
  };

  const logoStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.25rem',
    fontWeight: 900,
    letterSpacing: '0.08em',
  };

  const iconStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '9999px',
    backgroundColor: 'rgba(255,255,255,0.08)',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={leftStyle}>
          <Link to="/" style={logoStyle}>
            KinoUz
          </Link>

          <Link to="/" style={linkStyle}>
            Bosh sahifa
          </Link>
          <Link to="/admin" style={linkStyle}>
            Admin
          </Link>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={iconStyle} title="Search">
            <FiSearch />
          </span>
          <span style={iconStyle} title="Settings">
            <FiSettings />
          </span>
          <span style={iconStyle} title="Notifications">
            <FiBell />
          </span>
          <span style={iconStyle} title="Language">
            <FiGlobe />
          </span>
          <Link to="/admin" style={iconStyle} title="Login">
            <FiLock />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
