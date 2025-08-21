import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';
import { contactInfo } from '../config/contact';
import { departments, services } from '../data/doctors';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Departments', href: '/departments' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'Services', href: '/services' },
    { name: 'IVF', href: '/ivf' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-2 sm:mb-0">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-xs sm:text-sm">{contactInfo.phoneNumbers[0]}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-xs sm:text-sm">Padmavathi Nagar, Nandyala, Andhra Pradesh 518501</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-red-600 text-white font-semibold text-xs sm:text-sm px-2 py-1 rounded animate-pulse">Emergency: 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed left-0 right-0 z-50 transition-all duration-300 top-16 ${
        isScrolled ? 'bg-white' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center">
                {/* <span className="text-white font-bold text-lg">N</span> */}
                <img src="./logo.jpeg" alt="logo" className="w-16 h-16" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Neravati</h1>
                <p className="text-xs text-gray-600">Multispeciality Hospital</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => {
                const hasDropdown = item.name === 'Departments' || item.name === 'Services';
                
                if (hasDropdown) {
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link
                        to={item.href}
                        className={`text-sm font-bold transition-colors flex items-center space-x-1 ${
                          location.pathname === item.href
                            ? 'text-blue-900'
                            : 'text-gray-700 hover:text-blue-900'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </Link>
                      
                      {/* Dropdown Menu */}
                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                          {item.name === 'Departments' && (
                            <div className="grid grid-cols-1">
                              {departments.slice(0, 6).map((dept, index) => (
                                <div key={dept.id}>
                                  <Link
                                    to={`/departments#${dept.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="px-4 py-3 hover:bg-blue-50 transition-colors text-gray-700 hover:text-blue-900 font-medium block"
                                  >
                                    {dept.name}
                                  </Link>
                                  {index < departments.slice(0, 6).length - 1 && (
                                    <div className="border-b border-gray-200 mx-4 h-px"></div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {item.name === 'Services' && (
                            <div className="grid grid-cols-1">
                              {services.slice(0, 8).map((service, index) => (
                                <div key={service.id}>
                                  <Link
                                    to={`/services#${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="px-4 py-3 hover:bg-blue-50 transition-colors text-gray-700 hover:text-blue-900 font-medium block"
                                  >
                                    {service.name}
                                  </Link>
                                  {index < services.slice(0, 8).length - 1 && (
                                    <div className="border-b border-gray-200 mx-4 h-px"></div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-bold transition-colors ${
                      location.pathname === item.href
                        ? 'text-blue-900'
                        : 'text-gray-700 hover:text-blue-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                to="/appointment"
                className="bg-blue-900 hover:bg-blue-950 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-900 transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

                                    {/* Mobile Navigation */}
                {isOpen && (
                  <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-4 py-6 space-y-4">
                      {navigation.map((item) => {
                        const hasDropdown = item.name === 'Departments' || item.name === 'Services';
                        
                        if (hasDropdown) {
                          return (
                            <div key={item.name} className="space-y-2">
                              <Link
                                to={item.href}
                                className={`flex items-center justify-between text-base font-bold transition-colors ${
                                  location.pathname === item.href
                                    ? 'text-blue-900'
                                    : 'text-gray-700 hover:text-blue-900'
                                }`}
                                onClick={() => setIsOpen(false)}
                              >
                                <span>{item.name}</span>
                                <ChevronDown className="w-4 h-4" />
                              </Link>
                              
                              {/* Mobile Dropdown Content */}
                              <div className="ml-4 space-y-3 border-l-2 border-blue-100 pl-4">
                                {item.name === 'Departments' && departments.slice(0, 4).map((dept) => (
                                  <Link
                                    key={dept.id}
                                    to={`/departments#${dept.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="block text-sm text-gray-600 hover:text-blue-900 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {dept.name}
                                  </Link>
                                ))}
                                
                                {item.name === 'Services' && services.slice(0, 4).map((service) => (
                                  <Link
                                    key={service.id}
                                    to={`/services#${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="block text-sm text-gray-600 hover:text-blue-900 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                                
                                <Link
                                  to={item.href}
                                  className="block text-sm text-blue-900 font-semibold hover:text-blue-950 transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  View All {item.name}
                                </Link>
                              </div>
                            </div>
                          );
                        }
                        
                        return (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={`block text-base font-bold transition-colors ${
                              location.pathname === item.href
                                ? 'text-blue-900'
                                : 'text-gray-700 hover:text-blue-900'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                      <Link
                        to="/appointment"
                        className="block bg-blue-900 hover:bg-blue-950 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-32"></div>
    </>
  );
};

export default Navbar; 