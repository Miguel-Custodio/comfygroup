import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT US' },
    { path: '/catalogue', label: 'INFLATABLES' },
    { path: '/contact', label: 'CONTACT' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img 
              src="https://static.readdy.ai/image/42ea4f69f7f6abb89f88992a6d7eca39/2e1033b4aa8bddff1ba1414ee789dd50.png" 
              alt="Comfy Play Logo" 
              className="h-16 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold tracking-wider transition-colors ${
                  location.pathname === link.path
                    ? isScrolled
                      ? 'text-purple-600'
                      : 'text-white'
                    : isScrolled
                    ? 'text-gray-700 hover:text-purple-600'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.facebook.com/profile.php?id=61577642781403"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide hover:shadow-xl transition-all whitespace-nowrap cursor-pointer"
            >
              BOOK NOW
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden w-10 h-10 flex items-center justify-center cursor-pointer ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            <i className={`text-2xl ${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-xl"
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-sm font-bold tracking-wider ${
                  location.pathname === link.path ? 'text-purple-600' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.facebook.com/profile.php?id=61577642781403"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide text-center cursor-pointer"
            >
              BOOK NOW
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
