import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { contactInfo as hospitalContact } from '../config/contact';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: [
        { label: "Main Office", value: hospitalContact.phoneNumbers[0] },
        { label: "Emergency", value: hospitalContact.emergencyNumber },
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        { label: "General Inquiries", value: hospitalContact.email },
        { label: "Appointments", value: "appointments@neravati.com" },
        { label: "Billing", value: "billing@neravati.com" }
      ]
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        { label: "Main Office", value: hospitalContact.address },
        { label: "City, State", value: "Nandyala, Andhra Pradesh 518501" },
        { label: "Country", value: "India" }
      ]
    },
    {
      icon: Clock,
      title: "Hours",
      details: [
        { label: "Monday - Friday", value: "8:00 AM - 6:00 PM" },
        { label: "Saturday", value: "9:00 AM - 2:00 PM" },
        { label: "Sunday", value: "Closed (Emergency: 24/7)" }
      ]
    }
  ];

  const departments = [
    { name: "Cardiology", phone: "97041 30234" },
    { name: "Neurology", phone: "97041 30234" },
    { name: "Pediatrics", phone: "97041 30234" },
    { name: "Orthopedics", phone: "97041 30234" },
    { name: "Dermatology", phone: "97041 30234" },
    { name: "Emergency", phone: "97041 30234" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Get in touch with us for any questions, concerns, or to schedule an appointment. 
            We're here to help you with all your healthcare needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help. Contact us through any of the following methods or fill out 
              the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-8 h-8 text-blue-900" />
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

      {/* Map and Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us</h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-96 bg-gray-200 relative">
                  {/* Static Map Image - No API Key Required */}
                  <img
                    src={`https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(hospitalContact.address)}&zoom=15&size=600x400&maptype=roadmap&markers=color:red%7C${encodeURIComponent(hospitalContact.address)}&key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg`}
                    alt="Hospital Location Map"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a placeholder map if the API fails
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='45%25' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' fill='%236b7280'%3EMap Unavailable%3C/text%3E%3Ctext x='50%25' y='55%25' text-anchor='middle' font-family='Arial, sans-serif' font-size='14' fill='%236b7280'%3EPlease check address below%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  {/* Overlay with hospital info */}
                  <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                    <h4 className="font-semibold text-gray-900 mb-2">Neravati Hospital</h4>
                    <p className="text-sm text-gray-600">{hospitalContact.address}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Getting Here</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <p><strong>By Car:</strong> Located off Main Street with ample parking available.</p>
                    <p><strong>By Bus:</strong> Routes 10, 15, and 22 stop directly in front of our building.</p>
                    <p><strong>By Train:</strong> 10-minute walk from Central Station.</p>
                  </div>
                  {/* Direct link to Google Maps */}
                  <div className="mt-4">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospitalContact.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-950 transition-colors"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Department Contacts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Need to contact a specific department? Here are the direct phone numbers 
              for each of our medical departments.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{dept.name}</h3>
                      <p className="text-blue-600 font-medium">{dept.phone}</p>
                    </div>
                    <Phone className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions about contacting us.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What are your office hours?
                </h3>
                <p className="text-gray-600">
                  Our main office is open Monday through Friday from 8:00 AM to 6:00 PM, 
                  and Saturdays from 9:00 AM to 2:00 PM. Emergency care is available 24/7.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How quickly will you respond to my message?
                </h3>
                <p className="text-gray-600">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I schedule an appointment over the phone?
                </h3>
                <p className="text-gray-600">
                  Yes, you can schedule appointments by calling our main office or using 
                  our online booking system for your convenience.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you have parking available?
                </h3>
                <p className="text-gray-600">
                  Yes, we have ample free parking available for all patients and visitors 
                  in our dedicated parking lot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Emergency Contact</h2>
            <p className="text-xl mb-8">
              For medical emergencies, please call our emergency hotline immediately.
            </p>
            <div className="bg-white text-red-600 rounded-lg p-8 mb-8">
              <p className="text-3xl font-bold mb-2">{hospitalContact.emergencyNumber}</p>
              <p className="text-lg">Available 24/7</p>
            </div>
            <p className="text-lg">
              If you're experiencing a life-threatening emergency, please call 911 immediately.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 