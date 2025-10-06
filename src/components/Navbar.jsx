import { useState, useEffect, useMemo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';
import { contactInfo } from '../config/contact';
import { departments, services, doctors } from '../data/doctors';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset dropdown when language changes
  useEffect(() => {
    setActiveDropdown(null);
  }, [currentLanguage]);

  // Stable callback functions
  const handleMouseEnter = useCallback((itemName) => {
    setActiveDropdown(itemName);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  // Create stable navigation structure
  const navigationItems = useMemo(() => [
    { id: 'home', nameEn: 'Home', nameTe: 'హోమ్', href: '/' },
    { id: 'about', nameEn: 'About', nameTe: 'గురించి', href: '/about' },
    { id: 'departments', nameEn: 'Departments', nameTe: 'విభాగాలు', href: '/departments' },
    { id: 'doctors', nameEn: 'Doctors', nameTe: 'వైద్యులు', href: '/doctors' },
    { id: 'doctorz', nameEn: 'Doctorz', nameTe: 'వైద్యులు', href: '/doctorz' },
    { id: 'services', nameEn: 'Services', nameTe: 'సేవలు', href: '/services' },
    { id: 'ivf', nameEn: 'IVF', nameTe: 'ఐవిఎఫ్', href: '/ivf' },
    { id: 'gallery', nameEn: 'Gallery', nameTe: 'గ్యాలరీ', href: '/gallery' },
    { id: 'contact', nameEn: 'Contact', nameTe: 'సంప్రదించండి', href: '/contact' },
    { id: 'faq', nameEn: 'FAQ', nameTe: 'ప్రశ్నలు', href: '/faq' },
  ], []);

  const navigation = useMemo(() => 
    navigationItems.map(item => ({
      ...item,
      name: currentLanguage === 'en' ? item.nameEn : item.nameTe
    })), [navigationItems, currentLanguage]
  );

  // Memoize services with current language for dropdowns
  const servicesWithLanguage = useMemo(() => 
    services.map(service => ({
      ...service,
      displayName: service.name[currentLanguage] || service.name
    })), [services, currentLanguage]
  );

  // Memoize doctors for dropdowns (doctors data is static, but memoize to prevent re-renders)
  const doctorsMemoized = useMemo(() => doctors, []);
  
  // Memoize departments for dropdowns (departments data is static, but memoize to prevent re-renders)
  const departmentsMemoized = useMemo(() => departments, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-green-400 text-white flex justify-center items-center">
        <div className="container m-2 px-2 sm:m-3 sm:px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6 mb-1 sm:mb-0 w-full sm:w-auto">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-[11px] sm:text-xs md:text-sm">{contactInfo.phoneNumbers[0]}</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2  mt-1 sm:mt-0 w-full sm:w-auto">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-[10px] sm:text-xs md:text-sm leading-tight truncate sm:whitespace-normal w-full sm:w-auto">
                  25/684-43-1A, Doctors lane, opp rythubazar, Padmavathi Nagar, Nandyala-518501
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 mt-1 sm:mt-0">
              <span className="bg-red-600 text-white font-semibold text-[10px] sm:text-xs md:text-sm px-2 py-1 rounded animate-pulse whitespace-nowrap">Emergency: 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed left-0 right-0 z-50 transition-all duration-300 top-12 ${isScrolled ? 'bg-white' : 'bg-white/95 backdrop-blur-sm'
        }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                <img src="/logo.png" alt="Neravati Multi Speciality Hospital Logo" className="w-18 h-18 object-cover rounded-full" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">NERAVATI</h1>
                <p className="text-xs font-bold text-gray-600">Multispeciality Hospital</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => {
                const hasDropdown = item.id === 'departments' || item.id === 'services' || item.id === 'doctorz';

                if (hasDropdown) {
                  return (
                    <div
                      key={item.id}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        to={item.href}
                        className={`text-sm font-bold transition-colors flex items-center space-x-1 ${location.pathname === item.href
                          ? 'text-green-700'
                          : 'text-gray-700 hover:text-green-700'
                          }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                      </Link>

                      {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                          {item.id === 'departments' && (
                            <div className="grid grid-cols-1">
                              {departmentsMemoized.slice(0, 6).map((dept, index) => (
                                <div key={dept.id}>
                                  <Link
                                    to={`/departments#${dept.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="px-4 py-3 hover:bg-green-50 transition-colors text-gray-700 hover:text-green-700 font-medium block"
                                  >
                                    {dept.name}
                                  </Link>
                                  {index < departmentsMemoized.slice(0, 6).length - 1 && (
                                    <div className="border-b border-gray-200 mx-4 h-px"></div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}

                          {item.id === 'services' && (
                            <div className="grid grid-cols-1">
                              {servicesWithLanguage.slice(0, 8).map((service, index) => (
                                <div key={service.id}>
                                  <Link
                                    to={`/services#${(service.name.en || service.name).toLowerCase().replace(/\s+/g, '-')}`}
                                    className="px-4 py-3 hover:bg-green-50 transition-colors text-gray-700 hover:text-green-700 font-medium block"
                                  >
                                    {service.displayName}
                                  </Link>
                                  {index < servicesWithLanguage.slice(0, 8).length - 1 && (
                                    <div className="border-b border-gray-200 mx-4 h-px"></div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}

                          {item.id === 'doctorz' && (
                            <div className="grid grid-cols-1">
                              {doctorsMemoized.map((doctor, index) => (
                                <div key={doctor.id}>
                                  <Link
                                    to={`/doctor/${doctor.id}`}
                                    className="px-4 py-3 hover:bg-green-50 transition-colors text-gray-700 hover:text-green-700 font-medium block"
                                  >
                                    {doctor.name}
                                  </Link>
                                  {index < doctorsMemoized.length - 1 && (
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
                    className={`text-sm font-bold transition-colors ${location.pathname === item.href
                      ? 'text-green-700'
                      : 'text-gray-700 hover:text-green-700'
                      }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="flex items-center space-x-4">
                <LanguageToggle />
                <Link
                  to="/appointment"
                  className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  {currentLanguage === 'en' ? 'Book Appointment' : 'అపాయింట్‌మెంట్ బుక్ చేయండి'}
                </Link>
              </div>
            </div>

            {/* Mobile menu button and language toggle */}
            <div className="md:hidden flex items-center space-x-3">
              <LanguageToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-green-700 transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto mobile-nav-scrollbar">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => {
                const hasDropdown = item.id === 'departments' || item.id === 'services' || item.id === 'doctorz';

                if (hasDropdown) {
                  return (
                    <div key={item.id} className="space-y-2">
                      <Link
                        to={item.href}
                        className={`flex items-center justify-between text-base font-bold transition-colors ${location.pathname === item.href
                          ? 'text-green-700'
                          : 'text-gray-700 hover:text-green-700'
                          }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </Link>

                      {/* Mobile Dropdown Content */}
                      <div className="ml-4 space-y-3 border-l-2 border-green-100 pl-4">
                        {item.id === 'departments' && departmentsMemoized.slice(0, 4).map((dept) => (
                          <Link
                            key={dept.id}
                            to={`/departments#${dept.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block text-sm text-gray-600 hover:text-green-700 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {dept.name}
                          </Link>
                        ))}

                        {item.id === 'services' && servicesWithLanguage.slice(0, 4).map((service) => (
                          <Link
                            key={service.id}
                            to={`/services#${(service.name.en || service.name).toLowerCase().replace(/\s+/g, '-')}`}
                            className="block text-sm text-gray-600 hover:text-green-700 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {service.displayName}
                          </Link>
                        ))}

                        {item.id === 'doctorz' && doctorsMemoized.map((doctor) => (
                          <Link
                            key={doctor.id}
                            to={`/doctor/${doctor.id}`}
                            className="block text-sm text-gray-600 hover:text-green-700 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {doctor.name}
                          </Link>
                        ))}

                        <Link
                          to={item.href}
                          className="block text-sm text-green-700 font-semibold hover:text-green-800 transition-colors"
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
                    className={`block text-base font-bold transition-colors ${location.pathname === item.href
                      ? 'text-green-700'
                      : 'text-gray-700 hover:text-green-700'
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                to="/appointment"
                className="block bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {currentLanguage === 'en' ? 'Book Appointment' : 'అపాయింట్‌మెంట్ బుక్ చేయండి'}
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-28"></div>
    </>
  );
};

export default Navbar;
