import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Chrome  } from 'lucide-react';
import { contactInfo } from '../config/contact';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { currentLanguage } = useLanguage();

  const quickLinks = [
    { name: currentLanguage === 'en' ? 'Home' : 'హోమ్', href: '/' },
    { name: currentLanguage === 'en' ? 'About Us' : 'మా గురించి', href: '/about' },
    { name: currentLanguage === 'en' ? 'Departments' : 'విభాగాలు', href: '/departments' },
    { name: currentLanguage === 'en' ? 'Doctors' : 'వైద్యులు', href: '/doctors' },
    { name: currentLanguage === 'en' ? 'Services' : 'సేవలు', href: '/services' },
    { name: currentLanguage === 'en' ? 'Gallery' : 'గ్యాలరీ', href: '/gallery' },
    { name: currentLanguage === 'en' ? 'Contact' : 'సంప్రదించండి', href: '/contact' },
    { name: currentLanguage === 'en' ? 'FAQ' : 'ప్రశ్నలు', href: '/faq' },
  ];

  const departments = [
    currentLanguage === 'en' ? 'IVF Infertility' : 'ఐవిఎఫ్ బంధ్యత్వం',
    'ENT',
    currentLanguage === 'en' ? 'Gynecology' : 'స్త్రీరోగవిజ్ఞానం',
    currentLanguage === 'en' ? 'Cosmetic Gynecology' : 'కాస్మెటిక్ స్త్రీరోగవిజ్ఞానం',
    currentLanguage === 'en' ? 'Orthopaedic' : 'అస్థిపంజర',
    currentLanguage === 'en' ? 'MD General' : 'ఎండీ జనరల్',
  ];

  const services = [
    currentLanguage === 'en' ? 'Primary Care' : 'ప్రాథమిక సంరక్షణ',
    currentLanguage === 'en' ? 'Specialist Consultation' : 'విశేషజ్ఞ సలహా',
    currentLanguage === 'en' ? 'Diagnostic Imaging' : 'నిర్ధారణ చిత్రీకరణ',
    currentLanguage === 'en' ? 'Laboratory Services' : 'ప్రయోగశాల సేవలు',
    currentLanguage === 'en' ? 'Physical Therapy' : 'భౌతిక చికిత్స',
    currentLanguage === 'en' ? 'Surgery' : 'శస్త్రచికిత్స',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                <img src="/logo.png" alt="Neravati Multi Speciality Hospital Logo" className="w-10 h-10 object-cover rounded-full" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Neravati</h3>
                <p className="text-sm text-gray-400">Multispeciality Hospital</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {currentLanguage === 'en' 
                ? 'Providing exceptional healthcare services with compassion, innovation, and excellence. Your health is our priority.'
                : 'కరుణ, నవీకరణ మరియు ఉత్తమత్వంతో అనుపమ ఆరోగ్య సంరక్షణ సేవలను అందిస్తాము. మీ ఆరోగ్యం మా ప్రాధాన్యత.'}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/neravatimultispecialityhospital/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/NeravatiC42987" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/neravati_testtube_babycentre/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.google.com/search?q=Neravati+Hospitals" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Chrome  className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">
              {currentLanguage === 'en' ? 'Quick Links' : 'త్వరిత లింకులు'}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-green-300 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">
              {currentLanguage === 'en' ? 'Departments' : 'విభాగాలు'}
            </h4>
            <ul className="space-y-2">
              {departments.map((dept) => (
                <li key={dept}>
                  <Link
                    to={`/departments#${dept.toLowerCase()}`}
                    className="text-gray-300 hover:text-green-300 transition-colors text-sm"
                  >
                    {dept}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">
              {currentLanguage === 'en' ? 'Contact Info' : 'సంప్రదింపు సమాచారం'}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    {contactInfo.address}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-300 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">{contactInfo.phoneNumbers[0]}</p>
                  <p className="text-gray-400 text-xs">
                    {currentLanguage === 'en' ? 'Emergency:' : 'అత్యవసర:'} {contactInfo.emergencyNumber}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-300 flex-shrink-0" />
                <p className="text-gray-300 text-sm">{contactInfo.email}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-green-300 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    {currentLanguage === 'en' ? 'Mon-Fri: 8AM-6PM' : 'సోమ-శుక్ర: 8AM-6PM'}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {currentLanguage === 'en' ? 'Emergency: 24/7' : 'అత్యవసర: 24/7'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {currentLanguage === 'en' 
                ? 'Neravati Multispeciality Hospital. All rights reserved.'
                : 'నెరావతి మల్టీస్పెషాలిటీ హాస్పిటల్. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.'}
            </p>
            {/* <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-green-300 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-green-300 transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-green-300 transition-colors">
                Sitemap
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
