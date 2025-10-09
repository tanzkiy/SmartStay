import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Sun, Moon, Menu, X, Download, Contrast, Globe, LogOut } from 'lucide-react';

const Header = ({ darkMode, toggleDarkMode, highContrast, toggleHighContrast, language, changeLanguage, showInstallPrompt, handleInstallClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleUserRoleChange = () => {
      const role = localStorage.getItem('userRole');
      setUserRole(role);
    };

    window.addEventListener('userRoleChanged', handleUserRoleChange);
    handleUserRoleChange(); // Set initial role on component mount

    return () => {
      window.removeEventListener('userRoleChanged', handleUserRoleChange);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    setUserRole(null);
    window.dispatchEvent(new Event('userRoleChanged'));
    navigate('/login');
  };

  const navLinkClass = ({ isActive }) => [
    'px-1 text-sm md:text-base transition-colors',
    isActive
      ? 'text-mountain-green dark:text-mountain-green-light relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-mountain-green/80 dark:after:bg-mountain-green-light/80'
      : 'text-gray-700 dark:text-gray-200 hover:text-mountain-green dark:hover:text-mountain-green-light'
  ].join(' ');

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 dark:border-gray-800 backdrop-blur supports-backdrop-blur:bg-white/70 bg-white/90 dark:bg-gray-900/70">
      <div className="container mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-mountain-green dark:text-white font-extrabold tracking-tight text-xl md:text-2xl">
              SmartStay<span className="text-mountain-green-light"> </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={navLinkClass} end>Home</NavLink>
            <NavLink to="/listings" className={navLinkClass}>Listings</NavLink>
            {userRole === 'user' && (
              <NavLink to="/dashboard" className={navLinkClass}>Dashboard</NavLink>
            )}
            {userRole === 'admin' && (
              <NavLink to="/admin" className={navLinkClass}>Admin</NavLink>
            )}
            {!userRole && (
              <NavLink to="/login" className={navLinkClass}>Login</NavLink>
            )}
            {userRole && (
              <button
                onClick={handleLogout}
                className="px-1 text-sm md:text-base text-gray-700 dark:text-gray-200 hover:text-mountain-green dark:hover:text-mountain-green-light transition-colors flex items-center gap-1"
              >
                <LogOut className="h-4 w-4" /> Logout
              </button>
            )}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Language Selector */}
            <div className="relative hidden md:block">
              <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="appearance-none bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg px-2 py-1 pr-6 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-mountain-green/40"
                aria-label="Select language"
              >
                <option value="en">EN</option>
                <option value="fil">FIL</option>
                <option value="ilo">ILO</option>
              </select>
              <Globe className="h-3 w-3 text-gray-500 absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* High Contrast Toggle */}
            <button
              onClick={toggleHighContrast}
              aria-label={highContrast ? 'Disable high contrast' : 'Enable high contrast'}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-mountain-green/40"
              title="Toggle High Contrast"
            >
              <Contrast className={`h-5 w-5 ${highContrast ? 'text-mountain-green' : 'text-gray-700 dark:text-gray-300'}`} />
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-mountain-green/40"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>

            {/* Install PWA Button - Only show if available */}
            {showInstallPrompt && (
              <button
                onClick={handleInstallClick}
                className="hidden md:inline-flex items-center gap-2 bg-mountain-green text-white px-3 py-1.5 rounded-xl hover:bg-mountain-green-light shadow-sm focus:outline-none focus:ring-2 focus:ring-mountain-green/40"
                aria-label="Install App"
              >
                <Download className="h-4 w-4" />
                <span className="text-sm">Install App</span>
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-mountain-green/40"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 dark:text-white" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav id="mobile-nav" className="md:hidden mt-3 pb-4 space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) => [
                'block py-2 px-4 rounded-lg transition-colors',
                isActive
                  ? 'bg-mountain-green/10 text-mountain-green dark:text-mountain-green-light'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
              ].join(' ')}
              onClick={() => setIsMenuOpen(false)}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/listings"
              className={({ isActive }) => [
                'block py-2 px-4 rounded-lg transition-colors',
                isActive
                  ? 'bg-mountain-green/10 text-mountain-green dark:text-mountain-green-light'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
              ].join(' ')}
              onClick={() => setIsMenuOpen(false)}
            >
              Listings
            </NavLink>
            {userRole === 'user' && (
              <NavLink
                to="/dashboard"
                className={({ isActive }) => [
                  'block py-2 px-4 rounded-lg transition-colors',
                  isActive
                    ? 'bg-mountain-green/10 text-mountain-green dark:text-mountain-green-light'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                ].join(' ')}
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </NavLink>
            )}
            {userRole === 'admin' && (
              <NavLink
                to="/admin"
                className={({ isActive }) => [
                  'block py-2 px-4 rounded-lg transition-colors',
                  isActive
                    ? 'bg-mountain-green/10 text-mountain-green dark:text-mountain-green-light'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                ].join(' ')}
                onClick={() => setIsMenuOpen(false)}
              >
                Admin
              </NavLink>
            )}
            {!userRole && (
              <NavLink
                to="/login"
                className={({ isActive }) => [
                  'block py-2 px-4 rounded-lg transition-colors',
                  isActive
                    ? 'bg-mountain-green/10 text-mountain-green dark:text-mountain-green-light'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                ].join(' ')}
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </NavLink>
            )}
            {userRole && (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 mt-2 bg-mountain-green text-white hover:bg-mountain-green-light rounded-xl"
                aria-label="Logout"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            )}
            {showInstallPrompt && (
              <button
                onClick={() => {
                  handleInstallClick();
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 mt-2 bg-mountain-green text-white hover:bg-mountain-green-light rounded-xl"
                aria-label="Install App"
              >
                <Download className="h-4 w-4" />
                <span>Install App</span>
              </button>
            )}
            
            {/* Mobile Language Selector */}
            <div className="w-full mt-2 p-2">
              <label htmlFor="mobile-language" className="text-sm text-gray-600 dark:text-gray-300 mb-1 block">
                Language:
              </label>
              <select
                id="mobile-language"
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="w-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-mountain-green/40"
              >
                <option value="en">English</option>
                <option value="fil">Filipino</option>
                <option value="ilo">Ilocano</option>
              </select>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
