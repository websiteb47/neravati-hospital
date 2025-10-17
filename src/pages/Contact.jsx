import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { contactInfo as hospitalContact } from '../config/contact';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { currentLanguage } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      title: currentLanguage === 'en' ? "Phone" : "ఫోన్",
      details: [
        { label: currentLanguage === 'en' ? "Main Office" : "ముఖ్య కార్యాలయం", value: hospitalContact.phoneNumbers[0] },
        { label: currentLanguage === 'en' ? "Emergency" : "అత్యవసరం", value: hospitalContact.emergencyNumber },
      ]
    },
    {
      icon: Mail,
      title: currentLanguage === 'en' ? "Email" : "ఇమెయిల్",
      details: [
        { label: currentLanguage === 'en' ? "General Inquiries" : "సాధారణ ప్రశ్నలు", value: hospitalContact.email },
      ]
    },
    {
      icon: MapPin,
      title: currentLanguage === 'en' ? "Address" : "చిరునామా",
      details: [
        { label: currentLanguage === 'en' ? "Main Office" : "ముఖ్య కార్యాలయం", value: hospitalContact.address },
        { label: currentLanguage === 'en' ? "City, State" : "నగరం, రాష్ట్రం", value: "Nandyala, Andhra Pradesh 518501" },
        { label: currentLanguage === 'en' ? "Country" : "దేశం", value: "India" }
      ]
    },
    {
      icon: Clock,
      title: currentLanguage === 'en' ? "Hours" : "సమయాలు",
      details: [
        { label: currentLanguage === 'en' ? "Monday - Sunday" : "సోమవారం - ఆదివారం", value: "9:00 AM - 3:00 PM & 6:00 PM - 10:00 PM" },
        { label: currentLanguage === 'en' ? "Emergency" : "అత్యవసరం", value: currentLanguage === 'en' ? "Available 24/7" : "24/7 అందుబాటులో ఉంది" }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-400 to-green-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {currentLanguage === 'en' ? "Contact Us" : "మమ్మల్ని సంప్రదించండి"}
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            {currentLanguage === 'en'
              ? "Get in touch with us for any questions, concerns, or to schedule an appointment. We're here to help you with all your healthcare needs."
              : "ఏవైనా ప్రశ్నలు, ఆందోళనలు లేదా అపాయింట్‌మెంట్‌ను షెడ్యూల్ చేయడానికి మమ్మల్ని సంప్రదించండి. మీ ఆరోగ్య అవసరాలకు మేము సహాయం చేయడానికి సిద్ధంగా ఉన్నాము."}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'en' ? "Get in Touch" : "మమ్మల్ని సంప్రదించండి"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentLanguage === 'en'
                ? "We're here to help. Contact us through any of the following methods or fill out the form below and we'll get back to you as soon as possible."
                : "మేము మీకు సహాయం చేయడానికి ఇక్కడ ఉన్నాము. కింది పద్ధతులలో ఏదో ఒకదాని ద్వారా మమ్మల్ని సంప్రదించండి లేదా ఫారమ్ నింపి పంపించండి, మేము వీలైనంత త్వరగా మిమ్మల్ని సంప్రదిస్తాము."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-30 h-30 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{info.title}</h3>
                <div className="space-y-3">
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex}>
                      <p className="text-sm text-gray-600 font-medium">{detail.label}</p>
                      <p className="text-gray-900 font-semibold">{detail.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="p-10">
        <div className="h-96 md:h-150 bg-gray-200 relative">
          <iframe
            title="Neravati Multispeciality Hospital Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1922.506682159715!2d78.48150512883663!3d15.483713309638121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5ad0065304f3b%3A0x1ac591798d88cbc0!2sNeravati%20multispeciality%20hospital!5e0!3m2!1sen!2sin!4v1760636560594!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              {currentLanguage === 'en' ? "Emergency Contact" : "అత్యవసర సంప్రదింపు"}
            </h2>
            <p className="text-xl mb-8">
              {currentLanguage === 'en'
                ? "For medical emergencies, please call our emergency hotline immediately."
                : "వైద్య అత్యవసర పరిస్థితుల కోసం, దయచేసి వెంటనే మా అత్యవసర హాట్‌లైన్‌కు కాల్ చేయండి."}
            </p>
            <div className="bg-white text-red-600 rounded-lg p-8 mb-8">
              <p className="text-3xl font-bold mb-2">{hospitalContact.emergencyNumber}</p>
              <p className="text-lg">
                {currentLanguage === 'en' ? "Available 24/7" : "24 గంటలు అందుబాటులో ఉంది"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
