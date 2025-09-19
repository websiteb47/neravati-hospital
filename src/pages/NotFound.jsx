import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Phone } from 'lucide-react';

const NotFound = () => {
  const quickLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Appointments', href: '/appointment' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="container mx-auto px-4 text-center">
        {/* 404 Content */}
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-green-600 mb-4">404</h1>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8">
              Sorry, the page you're looking for doesn't exist. It might have been moved, 
              deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Navigation</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-green-50 transition-colors duration-200 group"
                >
                  <link.icon className="w-6 h-6 text-green-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-green-600">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-gradient-to-r from-green-400 to-green-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
            <p className="text-green-200 mb-6">
              If you're looking for something specific or need assistance, 
              our team is here to help you find what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Search className="w-5 h-5" />
                <span>Contact Us</span>
              </a>
              <a
                href="tel:(555) 123-4567"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 
