import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: [
        { label: "Main Office", value: "97041 30234" },
        { label: "Emergency", value: "97041 30234" },
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
            { label: "General Inquiries", value: "info@neravati.com" },
    { label: "Appointments", value: "appointments@neravati.com" },
    { label: "Billing", value: "billing@neravati.com" }
      ]
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        { label: "Main Office", value: "25/684-43-1A, near RYTHU BAZAR, near NANDYAL CRITICAL CARE HOSPITAL, Padmavathi Nagar" },
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
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
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-8 h-8 text-blue-600" />
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
                <div className="h-96 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">25/684-43-1A, near RYTHU BAZAR, near NANDYAL CRITICAL CARE HOSPITAL, Padmavathi Nagar, Nandyala, Andhra Pradesh 518501</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Getting Here</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <p><strong>By Car:</strong> Located off Main Street with ample parking available.</p>
                    <p><strong>By Bus:</strong> Routes 10, 15, and 22 stop directly in front of our building.</p>
                    <p><strong>By Train:</strong> 10-minute walk from Central Station.</p>
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
              <p className="text-3xl font-bold mb-2">97041 30234</p>
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