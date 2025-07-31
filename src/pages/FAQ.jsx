import Accordion from '../components/Accordion';
import { Search, MessageSquare, Phone } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      category: "Appointments",
      questions: [
        {
          question: "How do I schedule an appointment?",
          answer: "You can schedule an appointment by calling our main office at 97041 30234, using our online booking system, or visiting us in person. We recommend booking at least 1-2 weeks in advance for routine appointments."
        },
        {
          question: "What if I need to cancel or reschedule my appointment?",
          answer: "Please notify us at least 24 hours in advance if you need to cancel or reschedule. You can do this by calling us or using our online portal. Late cancellations may incur a fee."
        },
        {
          question: "How long do appointments typically last?",
          answer: "Initial consultations typically last 30-45 minutes, while follow-up appointments are usually 15-30 minutes. The duration may vary based on your specific needs and the type of appointment."
        },
        {
          question: "Do you offer same-day appointments?",
          answer: "Yes, we offer same-day appointments for urgent care needs based on availability. Please call us early in the day to check for available slots."
        }
      ]
    },
    {
      category: "Insurance & Billing",
      questions: [
        {
          question: "Do you accept insurance?",
          answer: "Yes, we accept most major insurance plans. Please contact our billing department to verify your specific coverage before your appointment. We also offer self-pay options for patients without insurance."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, credit cards, debit cards, and personal checks. We also offer flexible payment plans for larger medical expenses. All payments are due at the time of service unless other arrangements have been made."
        },
        {
          question: "How can I get a copy of my medical records?",
          answer: "You can request a copy of your medical records by filling out a release form at our office or contacting our medical records department. There may be a small fee for copying and processing."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, we offer flexible payment plans for patients who need assistance with larger medical expenses. Please speak with our billing department to discuss available options."
        }
      ]
    },
    {
      category: "Services & Treatments",
      questions: [
        {
          question: "What services do you offer?",
          answer: "We offer comprehensive healthcare services including primary care, specialist consultations, diagnostic imaging, laboratory services, physical therapy, and emergency care. Please visit our services page for a complete list."
        },
        {
          question: "Do you provide emergency care?",
          answer: "Yes, we provide 24/7 emergency care services. For life-threatening emergencies, please call 911 immediately. For urgent but non-life-threatening situations, call our emergency hotline at (555) 123-4567."
        },
        {
          question: "Can I get a prescription refill?",
          answer: "Yes, you can request prescription refills by calling our office or using our online patient portal. Please allow 24-48 hours for processing. Some medications may require an office visit for refills."
        },
        {
          question: "Do you offer telemedicine appointments?",
          answer: "Yes, we offer telemedicine appointments for certain types of consultations. This allows you to see a doctor from the comfort of your home. Please call us to schedule a virtual appointment."
        }
      ]
    },
    {
      category: "General Information",
      questions: [
        {
          question: "What are your office hours?",
          answer: "Our main office is open Monday through Friday from 8:00 AM to 6:00 PM, and Saturdays from 9:00 AM to 2:00 PM. We are closed on Sundays, but emergency care is available 24/7."
        },
        {
          question: "Do you have parking available?",
          answer: "Yes, we have ample free parking available for all patients and visitors in our dedicated parking lot. The parking lot is well-lit and easily accessible from the main entrance."
        },
        {
          question: "Is your facility wheelchair accessible?",
          answer: "Yes, our facility is fully wheelchair accessible with ramps, elevators, and accessible restrooms. We also have designated parking spaces for patients with disabilities."
        },
        {
          question: "Can I bring someone with me to my appointment?",
          answer: "Yes, you are welcome to bring a family member or friend to your appointment. However, due to COVID-19 protocols, we may have restrictions on the number of visitors allowed."
        }
      ]
    },
    {
      category: "COVID-19",
      questions: [
        {
          question: "What COVID-19 safety measures do you have in place?",
          answer: "We have implemented comprehensive safety measures including mandatory mask wearing, social distancing, enhanced cleaning protocols, and temperature screenings. We also offer telemedicine appointments when appropriate."
        },
        {
          question: "Do you offer COVID-19 testing?",
          answer: "Yes, we offer COVID-19 testing for symptomatic patients and those with known exposure. Please call us to schedule a test and follow our safety protocols when visiting."
        },
        {
          question: "Are visitors allowed during appointments?",
          answer: "Due to COVID-19 safety protocols, we may limit the number of visitors allowed during appointments. Please call us to confirm current visitor policies before your visit."
        }
      ]
    }
  ];

  const allQuestions = faqData.flatMap(category => 
    category.questions.map(q => ({
      ...q,
      category: category.category
    }))
  );

  const filteredQuestions = searchTerm 
    ? allQuestions.filter(q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allQuestions;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Find answers to common questions about our services, appointments, billing, and more. 
            If you can't find what you're looking for, please contact us.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            {searchTerm && (
              <p className="text-center mt-4 text-gray-600">
                Found {filteredQuestions.length} results for "{searchTerm}"
              </p>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {searchTerm ? (
            // Search Results
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Search Results</h2>
              <Accordion items={filteredQuestions} />
            </div>
          ) : (
            // Categorized FAQs
            <div className="max-w-4xl mx-auto space-y-16">
              {faqData.map((category, index) => (
                <div key={index}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">{category.category}</h2>
                  <Accordion items={category.questions} />
                </div>
              ))}
            </div>
          )}

          {filteredQuestions.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any FAQs matching your search. Try different keywords or contact us directly.
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  Clear Search
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              If you couldn't find the answer you're looking for, our team is here to help. 
              Contact us and we'll get back to you as soon as possible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Send us a Message</h3>
                <p className="text-gray-600 mb-6">
                  Fill out our contact form and we'll respond within 24 hours.
                </p>
                <a
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Contact Us
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Call Us Directly</h3>
                <p className="text-gray-600 mb-6">
                  Speak with our team immediately for urgent questions.
                </p>
                <a
                  href="tel:9704130234"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Appointments</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="/appointment" className="hover:text-blue-600 transition-colors">Book Appointment</a></li>
                  <li><a href="/doctors" className="hover:text-blue-600 transition-colors">Find a Doctor</a></li>
                  <li><a href="/departments" className="hover:text-blue-600 transition-colors">Our Departments</a></li>
                </ul>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="/services" className="hover:text-blue-600 transition-colors">Our Services</a></li>
                  <li><a href="/about" className="hover:text-blue-600 transition-colors">About Us</a></li>
                  <li><a href="/contact" className="hover:text-blue-600 transition-colors">Contact Info</a></li>
                </ul>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Support</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="/contact" className="hover:text-blue-600 transition-colors">Get Help</a></li>
                  <li><a href="tel:9704130234" className="hover:text-blue-600 transition-colors">Emergency: 97041 30234</a></li>
                  <li><a href="/appointment" className="hover:text-blue-600 transition-colors">Schedule Online</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ; 