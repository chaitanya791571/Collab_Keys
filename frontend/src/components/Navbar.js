import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import "../styles/Stylex.css"; // Assuming the CSS for Navbar is in Stylex.css

const Navbar = () => {
  // State to control the side menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  // Theme toggle functionality
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(`${savedTheme}-theme`);
    setIsDarkTheme(savedTheme === 'dark');

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
        setIsLoggedIn(true);
        setUser(storedUser);
    }
}, []);

const handleThemeToggle = () => {
  const newTheme = !isDarkTheme ? 'dark' : 'light';
  setIsDarkTheme(!isDarkTheme);
  document.body.classList.remove('dark-theme', 'light-theme');
  document.body.classList.add(`${newTheme}-theme`);
  localStorage.setItem('theme', newTheme);
};

 const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data
    setIsLoggedIn(false); // Update state
    setUser(null); // Clear user state
    setDropdownVisible(false); // Close the dropdown
    navigate('/'); // Redirect if necessary
  };

  const toggleDropdown = () => {
    setDropdownVisible(prev => !prev);
};

  const handleEventsNavigation = () => {
    isLoggedIn ? navigate('/events') : navigate('/login');
};
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          {/* Button to open the menu */}
          <a href="javascript:void(0);" className="toggle-button" onClick={toggleMenu} aria-label="Open navigation menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
          <div className="brand-title">
            <Link to="/"><b>CollabKeys</b></Link>
          </div>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><button onClick={handleEventsNavigation} className="link-button">Events</button></li>
          <li><Link to="/careerpath">CareerPath</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/contact">Contact</Link></li>
            {user?.isAdmin && (<li><Link to="/admin">Admin Dashboard</Link></li>)}
        </ul>
        <div className="login-button">
        {isLoggedIn ? (
            <div className="profile-icon" onClick={toggleDropdown} style={{ position: 'relative', cursor: 'pointer' }}>
                <span>{user?.name[0]}</span>
                {dropdownVisible && (
                    <div className="tooltip1">
                        <span className="fa-solid fa-caret-left"></span>
                        <p>{user?.name}</p>
                        <button 
                        onClick={handleLogout} 
                        type="button" 
                        style={{ cursor: 'pointer', position: 'relative', zIndex: 999 }}
                        >
                        Logout
                        </button>
                    </div>
                    
                )}
            </div>
        ) : (
            <button id="loginBtn" onClick={() => navigate('/login')}>Login</button>
        )}
        </div>
        <div className="toggle-wrapper">
        <input type="checkbox" id="theme-toggle" className="toggle" checked={isDarkTheme} onChange={handleThemeToggle} aria-label="Toggle dark theme" />
          <label htmlFor="theme-toggle" className="toggle-label">🌙</label>
        </div>
      </nav>

      {/* Side Menu for Small Screens */}
      <div id="side-menu" className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <a href="javascript:void(0);" className="close-button" onClick={toggleMenu} aria-label="Close navigation menu">&times;</a>
        <ul className="side-nav-links">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/About" onClick={toggleMenu}>About</Link></li>
          <li><button onClick={() => { handleEventsNavigation(); toggleMenu(); }} className="link-button">Events</button></li>
          <li><Link to="/careerpath" onClick={toggleMenu}>CareerPath</Link></li>
          <li><Link to="/courses" onClick={toggleMenu}>Courses</Link></li>
          <li><Link to="/team" onClick={toggleMenu}>Team</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          {user?.isAdmin && (<li><Link to="/admin" onClick={toggleMenu}>Admin Dashboard</Link></li>)}
        </ul>
      </div>

      {/* Overlay to Close Side Menu */}
      <div id="overlay" className={`overlay ${isMenuOpen ? 'show' : ''}`} onClick={toggleMenu}></div>
    </>
  );
};

export default Navbar;
