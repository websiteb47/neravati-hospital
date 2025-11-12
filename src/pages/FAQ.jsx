import Accordion from '../components/Accordion';
import { Search, MessageSquare, Phone } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { currentLanguage } = useLanguage();

  const faqData = [
    // Appointments
    {
      category: currentLanguage === 'en' ? "Appointments" : "అపాయింట్‌మెంట్లు",
      questions: [
        {
          question:
            currentLanguage === 'en'
              ? "How do I schedule an appointment?"
              : "నేను అపాయింట్‌మెంట్‌ను ఎలా బుక్ చేసుకోవాలి?",
          answer:
            currentLanguage === 'en'
              ? "You can schedule an appointment by calling our main office at 97041 30234, using our online booking system, or visiting us in person. We recommend booking at least 1-2 weeks in advance for routine appointments."
              : "మా ప్రధాన కార్యాలయానికి 97041 30234 కు కాల్ చేయడం ద్వారా, మా ఆన్‌లైన్ బుకింగ్ సిస్టమ్‌ను ఉపయోగించడం ద్వారా లేదా వ్యక్తిగతంగా మమ్మల్ని సందర్శించడం ద్వారా మీరు అపాయింట్‌మెంట్‌ను బుక్ చేసుకోవచ్చు. సాధారణ అపాయింట్‌మెంట్‌ల కోసం కనీసం 1-2 వారాల ముందుగానే బుక్ చేయడం మేము సిఫారసు చేస్తున్నాము."
        },
        {
          question:
            currentLanguage === 'en'
              ? "What if I need to cancel or reschedule my appointment?"
              : "నా అపాయింట్‌మెంట్‌ను రద్దు చేయాలి లేదా తిరిగి షెడ్యూల్ చేయాలి అంటే?",
          answer:
            currentLanguage === 'en'
              ? "Please notify us at least 24 hours in advance if you need to cancel or reschedule. You can do this by calling us or using our online portal. Late cancellations may incur a fee."
              : "మీరు అపాయింట్‌మెంట్‌ను రద్దు చేయాలనుకుంటే లేదా మార్చాలనుకుంటే కనీసం 24 గంటల ముందుగా మాకు తెలియజేయండి. మీరు మాకు కాల్ చేయవచ్చు లేదా మా ఆన్‌లైన్ పోర్టల్‌ను ఉపయోగించవచ్చు. ఆలస్యంగా రద్దు చేసినట్లయితే ఫీజు ఉండవచ్చు."
        },
        {
          question:
            currentLanguage === 'en'
              ? "Can I book an appointment for the same day?"
              : "నేను అదే రోజున అపాయింట్‌మెంట్ బుక్ చేయగలనా?",
          answer:
            currentLanguage === 'en'
              ? "Same-day appointments depend on doctor availability. Please call early in the morning to check for open slots."
              : "అదే రోజున అపాయింట్‌మెంట్‌లు డాక్టర్ అందుబాటుపై ఆధారపడి ఉంటాయి. ఖాళీ స్లాట్‌ల కోసం ఉదయం తొందరగా కాల్ చేయండి."
        }
      ]
    },
  
    // Services & Treatments
    {
      category: currentLanguage === 'en' ? "Services & Treatments" : "సేవలు & చికిత్సలు",
      questions: [
        {
          question:
            currentLanguage === 'en'
              ? "Do you offer telemedicine appointments?"
              : "మీరు టెలీమెడిసిన్ అపాయింట్‌మెంట్‌లు అందిస్తారా?",
          answer:
            currentLanguage === 'en'
              ? "Yes, we offer telemedicine appointments for certain consultations. This allows you to meet the doctor virtually from your home."
              : "అవును, మేము కొన్ని రకాల కన్సల్టేషన్ల కోసం టెలీమెడిసిన్ అపాయింట్‌మెంట్‌లను అందిస్తున్నాము. దీని ద్వారా మీరు మీ ఇంటి నుండే డాక్టర్‌ను ఆన్‌లైన్‌లో కలవవచ్చు."
        },
        {
          question:
            currentLanguage === 'en'
              ? "Which fertility treatments do you provide?"
              : "మీరు ఏ ఫర్టిలిటీ చికిత్సలు అందిస్తారు?",
          answer:
            currentLanguage === 'en'
              ? "We provide IVF, ICSI, IUI, Frozen Embryo Transfer (FET), and other advanced fertility treatments."
              : "మేము IVF, ICSI, IUI, ఫ్రోజెన్ ఎంబ్రియో ట్రాన్స్‌ఫర్ (FET), మరియు ఇతర ఆధునిక ఫర్టిలిటీ చికిత్సలను అందిస్తున్నాము."
        },
        {
          question:
            currentLanguage === 'en'
              ? "Are all treatments done in-house?"
              : "అన్ని చికిత్సలు ఆసుపత్రిలోనే జరుగుతాయా?",
          answer:
            currentLanguage === 'en'
              ? "Yes, all fertility treatments and diagnostic procedures are performed in-house with state-of-the-art equipment."
              : "అవును, అన్ని ఫర్టిలిటీ చికిత్సలు మరియు నిర్ధారణ ప్రక్రియలు ఆధునిక పరికరాలతో ఆసుపత్రిలోనే నిర్వహించబడతాయి."
        }
      ]
    },
  
    // Billing & Insurance
    {
      category: currentLanguage === 'en' ? "Billing & Insurance" : "బిల్లింగ్ & ఇన్సూరెన్స్",
      questions: [
        {
          question:
            currentLanguage === 'en'
              ? "Do you accept health insurance?"
              : "మీరు హెల్త్ ఇన్సూరెన్స్‌ను అంగీకరిస్తారా?",
          answer:
            currentLanguage === 'en'
              ? "Yes, we accept most major insurance plans. Please bring your insurance details during your visit for verification."
              : "అవును, మేము ఎక్కువ ప్రధాన హెల్త్ ఇన్సూరెన్స్ ప్లాన్‌లను అంగీకరిస్తాము. ధృవీకరణ కోసం మీ సందర్శన సమయంలో ఇన్సూరెన్స్ వివరాలను తీసుకురండి."
        },
        {
          question:
            currentLanguage === 'en'
              ? "Can I get an estimate before starting treatment?"
              : "చికిత్స ప్రారంభించే ముందు అంచనా ఖర్చు పొందగలనా?",
          answer:
            currentLanguage === 'en'
              ? "Yes, our billing department provides cost estimates after your initial consultation and recommended treatment plan."
              : "అవును, ప్రారంభ కన్సల్టేషన్ తర్వాత మరియు సిఫారసు చేసిన చికిత్స ప్రణాళిక ఆధారంగా మా బిల్లింగ్ విభాగం ఖర్చు అంచనాను అందిస్తుంది."
        },
        {
          question:
            currentLanguage === 'en'
              ? "What payment methods are accepted?"
              : "ఏ చెల్లింపు పద్ధతులు అంగీకరించబడతాయి?",
          answer:
            currentLanguage === 'en'
              ? "We accept cash, credit/debit cards, UPI, and online bank transfers."
              : "మేము నగదు, క్రెడిట్/డెబిట్ కార్డులు, UPI మరియు ఆన్‌లైన్ బ్యాంక్ బదిలీలను అంగీకరిస్తాము."
        }
      ]
    },
  
    // General Information
    {
      category: currentLanguage === 'en' ? "General Information" : "సాధారణ సమాచారం",
      questions: [
        {
          question:
            currentLanguage === 'en'
              ? "What are your hospital’s visiting hours?"
              : "మీ ఆసుపత్రి సందర్శన సమయాలు ఏమిటి?",
          answer:
            currentLanguage === 'en'
              ? "Visiting hours are from 10:00 AM to 7:00 PM daily. ICU visits may have special restrictions."
              : "సందర్శన సమయాలు ప్రతిరోజూ ఉదయం 10:00 నుండి సాయంత్రం 7:00 వరకు ఉంటాయి. ICU సందర్శనలకు ప్రత్యేక పరిమితులు ఉండవచ్చు."
        },
        {
          question:
            currentLanguage === 'en'
              ? "Do you have emergency services?"
              : "మీ వద్ద అత్యవసర సేవలు ఉన్నాయా?",
          answer:
            currentLanguage === 'en'
              ? "Yes, our emergency department is open 24/7 for urgent medical care."
              : "అవును, మా అత్యవసర విభాగం 24/7 అత్యవసర వైద్య సేవల కోసం అందుబాటులో ఉంటుంది."
        },
        {
          question:
            currentLanguage === 'en'
              ? "Is parking available at the hospital?"
              : "ఆసుపత్రిలో పార్కింగ్ అందుబాటులో ఉందా?",
          answer:
            currentLanguage === 'en'
              ? "Yes, we have ample parking space for patients and visitors."
              : "అవును, రోగులు మరియు సందర్శకుల కోసం తగినంత పార్కింగ్ స్థలం ఉంది."
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
      <section className="bg-gradient-to-r from-blue-500 to-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {currentLanguage === 'en'
              ? "Frequently Asked Questions"
              : "తరచుగా అడిగే ప్రశ్నలు"}
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            {currentLanguage === 'en'
              ? "Find answers to common questions about our services, appointments, billing, and more. If you can't find what you're looking for, please contact us."
              : "మా సేవలు, అపాయింట్‌మెంట్‌లు, బిల్లింగ్ మరియు మరిన్నింటి గురించి తరచుగా అడిగే ప్రశ్నలకు సమాధానాలు కనుగొనండి. మీరు వెతుకుతున్నది కనుగొనలేకపోతే, దయచేసి మమ్మల్ని సంప్రదించండి."}
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
                placeholder={
                  currentLanguage === 'en' ? "Search FAQs..." : "ప్రశ్నలను వెతకండి..."
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-transparent"
              />
            </div>
            {searchTerm && (
              <p className="text-center mt-4 text-gray-600">
                {currentLanguage === 'en'
                  ? `Found ${filteredQuestions.length} results for "${searchTerm}"`
                  : `"${searchTerm}" కు సంబంధించిన ${filteredQuestions.length} ఫలితాలు లభించాయి`}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {searchTerm ? (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {currentLanguage === 'en' ? "Search Results" : "శోధన ఫలితాలు"}
              </h2>
              <Accordion items={filteredQuestions} />
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-16">
              {faqData.map((category, index) => (
                <div key={index}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    {category.category}
                  </h2>
                  <Accordion items={category.questions} />
                </div>
              ))}
            </div>
          )}

          {filteredQuestions.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {currentLanguage === 'en' ? "No results found" : "ఫలితాలు లభించలేదు"}
                </h3>
                <p className="text-gray-600 mb-6">
                  {currentLanguage === 'en'
                    ? "We couldn't find any FAQs matching your search. Try different keywords or contact us directly."
                    : "మీ శోధనకు సరిపోలే ప్రశ్నలు లభించలేదు. వేరే పదాలను ప్రయత్నించండి లేదా మమ్మల్ని నేరుగా సంప్రదించండి."}
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  {currentLanguage === 'en' ? "Clear Search" : "శోధనను క్లియర్ చేయండి"}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {currentLanguage === 'en'
                ? "Still Have Questions?"
                : "ఇంకా ప్రశ్నలున్నాయా?"}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {currentLanguage === 'en'
                ? "If you couldn't find the answer you're looking for, our team is here to help. Contact us and we'll get back to you as soon as possible."
                : "మీరు వెతుకుతున్న సమాధానం కనుగొనలేకపోతే, మా బృందం మీకు సహాయం చేయడానికి సిద్ధంగా ఉంది. దయచేసి మమ్మల్ని సంప్రదించండి."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {currentLanguage === 'en'
                    ? "Send us a Message"
                    : "మాకు సందేశం పంపండి"}
                </h3>
                <p className="text-gray-600 mb-6">
                  {currentLanguage === 'en'
                    ? "Fill out our contact form and we'll respond within 24 hours."
                    : "మా సంప్రదింపు ఫారమ్‌ను పూరించండి, మేము 24 గంటలలోపు స్పందిస్తాము."}
                </p>
                <a
                  href="/contact"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  {currentLanguage === 'en' ? "Contact Us" : "మమ్మల్ని సంప్రదించండి"}
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {currentLanguage === 'en'
                    ? "Call Us Directly"
                    : "మాకు నేరుగా కాల్ చేయండి"}
                </h3>
                <p className="text-gray-600 mb-6">
                  {currentLanguage === 'en'
                    ? "Speak with our team immediately for urgent questions."
                    : "తక్షణ ప్రశ్నల కోసం మా బృందంతో నేరుగా మాట్లాడండి."}
                </p>
                <a
                  href="tel:9704130234"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  {currentLanguage === 'en' ? "Call Now" : "ఇప్పుడు కాల్ చేయండి"}
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
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {currentLanguage === 'en' ? "Quick Links" : "త్వరిత లింకులు"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {currentLanguage === 'en' ? "Appointments" : "అపాయింట్‌మెంట్లు"}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="/appointment" className="hover:text-blue-700 transition-colors">{currentLanguage === 'en' ? "Book Appointment" : "అపాయింట్‌మెంట్ బుక్ చేయండి"}</a></li>
                  <li><a href="/doctors" className="hover:text-blue-700 transition-colors">{currentLanguage === 'en' ? "Find a Doctor" : "వైద్యుడిని కనుగొనండి"}</a></li>
                  <li><a href="/departments" className="hover:text-blue-700 transition-colors">{currentLanguage === 'en' ? "Our Departments" : "మా విభాగాలు"}</a></li>
                </ul>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {currentLanguage === 'en' ? "Services" : "సేవలు"}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="/services" className="hover:text-blue-700 transition-colors">{currentLanguage === 'en' ? "Our Services" : "మా సేవలు"}</a></li>
                  <li><a href="/about" className="hover:text-blue-700 transition-colors">{currentLanguage === 'en' ? "About Us" : "మా గురించి"}</a></li>
                  <li><a href="/contact" className="hover:text-blue-700 transition-colors">{currentLanguage === 'en' ? "Contact Info" : "సంప్రదింపు వివరాలు"}</a></li>
                </ul>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {currentLanguage === 'en' ? "Support" : "మద్దతు"}
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="/contact" className="hover:text-blue-700 transition-colors">{currentLanguage === 'en' ? "Get Help" : "సహాయం పొందండి"}</a></li>
                  <li><a href="tel:9704130234" className="hover:text-blue-700 transition-colors">{currentLanguage === 'en' ? "Emergency: 97041 30234" : "అత్యవసరం: 97041 30234"}</a></li>
                  <li><a href="/appointment" className="hover:text-blue-700 transition-colors">{currentLanguage === 'en' ? "Schedule Online" : "ఆన్‌లైన్‌లో షెడ్యూల్ చేయండి"}</a></li>
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
