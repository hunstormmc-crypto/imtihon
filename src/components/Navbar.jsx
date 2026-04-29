import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiSettings, FiBell, FiGlobe, FiLock } from 'react-icons/fi';
import { MovieContext } from '../context/MovieContext';

const Navbar = () => {
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [hoverHome, setHoverHome] = useState(false);
  const [hoverAdmin, setHoverAdmin] = useState(false);
  const [hoverSearch, setHoverSearch] = useState(false);
  const [hoverSettings, setHoverSettings] = useState(false);
  const [hoverBell, setHoverBell] = useState(false);
  const [hoverGlobe, setHoverGlobe] = useState(false);
  const [hoverLock, setHoverLock] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const { searchTerm, setSearchTerm, language, setLanguage } = useContext(MovieContext);

  const translations = {
    uz: {
      home: 'Bosh sahifa',
      admin: 'Admin',
      searchPlaceholder: 'Kino nomini kiriting...',
    },
    en: {
      home: 'Home',
      admin: 'Admin',
      searchPlaceholder: 'Enter movie name...',
    },
    ru: {
      home: 'Главная',
      admin: 'Админ',
      searchPlaceholder: 'Введите название фильма...',
    }
  };

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      const opacity = Math.min(0.8, window.scrollY / (window.innerHeight / 2));
      setScrollOpacity(opacity);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (showLanguageDropdown) {
      const handleClickOutside = (event) => {
        if (!event.target.closest('.language-container')) {
          setShowLanguageDropdown(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [showLanguageDropdown]);

  useEffect(() => {
    if (showSearch) {
      // If not on home or admin page, navigate to home and scroll to movies
      if (window.location.pathname !== '/' && window.location.pathname !== '/admin') {
        window.location.href = '/#movies';
      } else if (window.location.pathname === '/') {
        // Scroll to movies section if on home page
        const moviesSection = document.getElementById('movies');
        if (moviesSection) {
          moviesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }

      const handleClickOutside = (event) => {
        if (!event.target.closest('.search-container')) {
          setShowSearch(false);
          setSearchTerm(''); // clear search when closing
        }
      };

      const handleEscape = (event) => {
        if (event.key === 'Escape') {
          setShowSearch(false);
          setSearchTerm('');
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [showSearch, setSearchTerm]);

  const navStyle = {
    display: 'flex',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: `rgba(9, 10, 13, ${scrollOpacity})`,
    borderBottom: scrollOpacity > 0 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
    color: '#fff',
    zIndex: 50,
    backdropFilter: scrollOpacity > 0 ? 'blur(12px)' : 'none',
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
    cursor: 'pointer',
    transition: 'color 0.2s ease, transform 0.2s ease',
    transform: 'scale(1)',
  };

  const hoverLinkStyle = {
    ...linkStyle,
    color: '#fff',
    transform: 'scale(1.1)',
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
    transition: 'background-color 0.2s ease, transform 0.2s ease',
    transform: 'scale(1)',
  };

  const hoverIconStyle = {
    ...iconStyle,
    transform: 'scale(1.1)',
  };

  const inputStyle = {
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '20px',
    color: '#fff',
    padding: '8px 12px',
    fontSize: '0.9rem',
    outline: 'none',
    width: '200px',
    transition: 'width 0.3s ease',
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={leftStyle}>
          <a href="/#carousel" style={logoStyle}>
            KinoUz
          </a>

          <a 
            href="/#carousel" 
            style={hoverHome ? hoverLinkStyle : linkStyle}
            onMouseEnter={() => setHoverHome(true)}
            onMouseLeave={() => setHoverHome(false)}
          >
            {t.home}
          </a>
          <Link 
            to="/admin" 
            style={hoverAdmin ? hoverLinkStyle : linkStyle}
            onMouseEnter={() => setHoverAdmin(true)}
            onMouseLeave={() => setHoverAdmin(false)}
          >
            {t.admin}
          </Link>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="search-container" style={{ position: 'relative', width: showSearch ? '200px' : '36px', transition: 'width 0.3s ease' }}>
            {showSearch ? (
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  ...iconStyle,
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  outline: 'none',
                  cursor: 'text',
                }}
                autoFocus
              />
            ) : (
              <span 
                style={hoverSearch ? hoverIconStyle : iconStyle} 
                title="Search"
                onClick={() => setShowSearch(true)}
                onMouseEnter={() => setHoverSearch(true)}
                onMouseLeave={() => setHoverSearch(false)}
              >
                <FiSearch />
              </span>
            )}
          </div>
          <span 
            style={hoverSettings ? hoverIconStyle : iconStyle} 
            title="Settings"
            onMouseEnter={() => setHoverSettings(true)}
            onMouseLeave={() => setHoverSettings(false)}
          >
            <FiSettings />
          </span>
          <span 
            style={hoverBell ? hoverIconStyle : iconStyle} 
            title="Notifications"
            onMouseEnter={() => setHoverBell(true)}
            onMouseLeave={() => setHoverBell(false)}
          >
            <FiBell />
          </span>
          <div className="language-container relative">
            <span 
              style={hoverGlobe ? hoverIconStyle : iconStyle} 
              title={language.toUpperCase()}
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              onMouseEnter={() => setHoverGlobe(true)}
              onMouseLeave={() => setHoverGlobe(false)}
            >
              {language.toUpperCase()}
            </span>
            {showLanguageDropdown && (
              <div className="absolute top-full mt-2 right-0 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-50">
                <button
                  onClick={() => { setLanguage('uz'); setShowLanguageDropdown(false); }}
                  className="block w-full px-4 py-2 text-left text-white hover:bg-gray-700 first:rounded-t-lg"
                >
                  UZ
                </button>
                <button
                  onClick={() => { setLanguage('en'); setShowLanguageDropdown(false); }}
                  className="block w-full px-4 py-2 text-left text-white hover:bg-gray-700"
                >
                  EN
                </button>
                <button
                  onClick={() => { setLanguage('ru'); setShowLanguageDropdown(false); }}
                  className="block w-full px-4 py-2 text-left text-white hover:bg-gray-700 last:rounded-b-lg"
                >
                  RU
                </button>
              </div>
            )}
          </div>
          <Link 
            to="/admin" 
            style={hoverLock ? hoverIconStyle : iconStyle} 
            title="Login"
            onMouseEnter={() => setHoverLock(true)}
            onMouseLeave={() => setHoverLock(false)}
          >
            <FiLock />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
