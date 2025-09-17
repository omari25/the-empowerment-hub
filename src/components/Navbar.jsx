import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scrolling when sidebar is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href='/' className="flex items-center space-x-3" onClick={closeMenu}>
              <img
                src="/logo.jpg"
                alt="Empowerment Hub Logo"
                className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
              />
              <div className="hidden sm:block">
                <h1 className="text-[#3B175D] font-bold text-lg lg:text-xl">
                  Empowerment Hub
                </h1>
                <p className="text-[#E58E2F] text-xs lg:text-sm font-medium">
                  Youth Initiative
                </p>
              </div>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a key={item.name} href={item.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-[#3B175D] bg-[#E58E2F]/10'
                      : 'text-gray-700 hover:text-[#3B175D] hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[#3B175D] hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Navigation - Right Side Slide */}
      <div className="lg:hidden">
        {/* Backdrop overlay */}
        <div 
          className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeMenu}
        />
        
        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 h-full overflow-y-auto">
            {/* Close button */}
            <div className="flex justify-end mb-6">
              <button
                onClick={closeMenu}
                className="p-2 rounded-full text-gray-600 hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Navigation items */}
            <div className="space-y-4">
              {navItems.map((item) => (
                <a href={item.path} key={item.name}
                  onClick={closeMenu}
                  className={`block px-4 py-4 rounded-md text-lg font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-[#3B175D] bg-[#E58E2F]/20 border-l-4 border-[#E58E2F]'
                      : 'text-gray-700 hover:text-[#3B175D] hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;