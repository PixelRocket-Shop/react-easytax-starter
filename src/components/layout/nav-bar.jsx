import { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getRouteByName, getNavigationRoutes } from '@app/router';

/**
 * Reusable navigation bar component
 * @param {Object} props - Component props
 * @param {'light'|'dark'} [props.theme='light'] - Navigation theme (affects logo and styles)
 * @param {boolean} [props.transparent=false] - Whether nav has transparent background
 */
function NavBar({ theme = 'light' }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  const toggleMobileNav = useCallback(() => {
    setMobileNavOpen(prev => !prev);
  }, []);

  const closeMobileNav = useCallback(() => {
    setMobileNavOpen(false);
  }, []);

  const logoSrc = theme === 'light' ? '/images/logo-white.svg' : '/images/logo-black.svg';

  const navItems = getNavigationRoutes();

  return (
    <>
      <nav className="py-5 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={getRouteByName('home')}>
              <img src={logoSrc} alt="EasyTax" />
            </Link>

            {/* Desktop Navigation Menu */}
            <ul className="hidden lg:flex gap-2 p-1 rounded-full bg-white/10">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    className={`flex px-3 py-2 rounded-full text-white text-sm hover:bg-white/20 transition duration-200 ${
                      location.pathname === item.to ? 'bg-white/20' : ''
                    }`}
                    to={item.to}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop Sign In */}
            <Link
              className="hidden lg:flex items-center gap-2 text-white hover:text-pink-500 transition duration-200"
              to={getRouteByName('login')}
            >
              <span className="text-sm font-medium">Sign in</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.5 3L10.5 8L5.5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button className="lg:hidden" onClick={toggleMobileNav}>
              <svg width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" rx="28" fill="white"></rect>
                <path d="M37 32H19M37 24H19" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={`${mobileNavOpen ? 'block' : 'hidden'} fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-[9999]`}>
        <div className="fixed inset-0 bg-black opacity-20 z-[9998]" onClick={toggleMobileNav}></div>
        <nav className="relative p-8 w-full h-full bg-white overflow-y-auto z-[9999]">
          <div className="flex items-center justify-between">
            <Link className="inline-block" to={getRouteByName('home')}>
              <img src="/images/logo-black.svg" alt="EasyTax" />
            </Link>
            <button onClick={toggleMobileNav}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
          <ul className="flex flex-col gap-12 py-12 my-12">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  className={`text-sm font-medium ${
                    location.pathname === item.to ? 'text-pink-500' : 'text-black'
                  }`}
                  to={item.to}
                  onClick={closeMobileNav}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <Link
              className="inline-flex items-center gap-2 text-black hover:text-opacity-80 transition duration-200"
              to={getRouteByName('login')}
              onClick={closeMobileNav}
            >
              <span className="text-sm font-medium">Sign in</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.5 3L10.5 8L5.5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;