import AppointmentForm from '../components/AppointmentForm';
import { Calendar, Clock, Phone, MapPin, CheckCircle } from 'lucide-react';

const Appointment = () => {
  const appointmentInfo = [
    {
      icon: Calendar,
      title: "Easy Scheduling",
      description: "Book your appointment online or call us directly. We offer flexible scheduling options."
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "We'll confirm your appointment within 24 hours and send you a reminder."
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Our support team is available round the clock to assist you with any questions."
    },
    {
      icon: MapPin,
      title: "Convenient Location",
      description: "Located in the heart of the city with easy access and ample parking."
    }
  ];

  const preparationTips = [
    "Bring your ID and insurance card",
    "Arrive 15 minutes before your appointment",
    "Bring a list of current medications",
    "Prepare any questions you may have",
    "Bring relevant medical records if applicable"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Book an Appointment</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Schedule your visit with our expert doctors. We're here to provide you with 
            the best possible healthcare experience.
          </p>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AppointmentForm />
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make booking and attending appointments as easy and comfortable as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appointmentInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <p className="text-gray-600 leading-relaxed">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Preparing for Your Visit</h2>
                <p className="text-lg text-gray-600 mb-8">
                  To ensure a smooth and efficient appointment, please prepare the following:
                </p>
                
                <div className="space-y-4">
                  {preparationTips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Saturday</span>
                    <span className="text-gray-600">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-red-600">Emergency Care</span>
                    <span className="text-red-600 font-medium">24/7</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Emergency Contact</h4>
                  <p className="text-blue-600 font-bold text-lg">(555) 123-4567</p>
                  <p className="text-sm text-gray-600">Available 24/7 for emergencies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Common questions about booking and attending appointments.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How far in advance should I book an appointment?
                </h3>
                <p className="text-gray-600">
                  We recommend booking at least 1-2 weeks in advance for routine appointments. 
                  For urgent care, we offer same-day appointments based on availability.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What if I need to cancel or reschedule?
                </h3>
                <p className="text-gray-600">
                  Please notify us at least 24 hours in advance if you need to cancel or reschedule. 
                  You can do this by calling us or using our online portal.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you accept insurance?
                </h3>
                <p className="text-gray-600">
                  Yes, we accept most major insurance plans. Please contact our billing department 
                  to verify your specific coverage before your appointment.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How long do appointments typically last?
                </h3>
                <p className="text-gray-600">
                  Initial consultations typically last 30-45 minutes, while follow-up appointments 
                  are usually 15-30 minutes. The duration may vary based on your specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Help?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            If you have any questions about booking an appointment or need assistance, 
            our team is here to help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(555) 123-4567"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Call Us Now
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment; 