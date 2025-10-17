import AppointmentForm from '../components/AppointmentForm';
import { Calendar, Clock, Phone, MapPin, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Appointment = () => {
  const { currentLanguage } = useLanguage();

  // 🌐 Bilingual appointment info
  const appointmentInfo = [
    {
      icon: Calendar,
      title:
        currentLanguage === 'en' ? "Easy Scheduling" : "సులభమైన షెడ్యూలింగ్",
      description:
        currentLanguage === 'en'
          ? "Book your appointment online or call us directly. We offer flexible scheduling options."
          : "మీ అపాయింట్‌మెంట్‌ను ఆన్‌లైన్‌లో బుక్ చేయండి లేదా మాకు నేరుగా కాల్ చేయండి. మేము సౌకర్యవంతమైన షెడ్యూలింగ్ ఎంపికలను అందిస్తున్నాము."
    },
    {
      icon: Clock,
      title:
        currentLanguage === 'en' ? "Quick Response" : "త్వరిత ప్రతిస్పందన",
      description:
        currentLanguage === 'en'
          ? "We'll confirm your appointment within 24 hours and send you a reminder."
          : "మేము మీ అపాయింట్‌మెంట్‌ను 24 గంటల్లో ధృవీకరిస్తాము మరియు మీకు ఒక రిమైండర్ పంపిస్తాము."
    },
    {
      icon: Phone,
      title:
        currentLanguage === 'en' ? "24/7 Support" : "24/7 సహాయం",
      description:
        currentLanguage === 'en'
          ? "Our support team is available round the clock to assist you with any questions."
          : "ఏవైనా ప్రశ్నల కోసం మా సహాయ బృందం ఎప్పుడూ అందుబాటులో ఉంటుంది."
    },
    {
      icon: MapPin,
      title:
        currentLanguage === 'en' ? "Convenient Location" : "సౌకర్యవంతమైన స్థానం",
      description:
        currentLanguage === 'en'
          ? "Located in the heart of the city with easy access and ample parking."
          : "నగర మధ్యలో సులభమైన ప్రాప్యత మరియు తగినంత పార్కింగ్‌తో ఉంది."
    }
  ];

  // 🌐 Bilingual preparation tips
  const preparationTips =
    currentLanguage === 'en'
      ? [
          "Bring your ID and insurance card",
          "Arrive 15 minutes before your appointment",
          "Bring a list of current medications",
          "Prepare any questions you may have",
          "Bring relevant medical records if applicable"
        ]
      : [
          "మీ ఐడి మరియు ఇన్సూరెన్స్ కార్డ్ తీసుకురండి",
          "మీ అపాయింట్‌మెంట్‌కు 15 నిమిషాల ముందే రండి",
          "మీరు ప్రస్తుతం తీసుకుంటున్న మందుల జాబితా తీసుకురండి",
          "మీకు ఉన్న ఏవైనా ప్రశ్నలను సిద్ధం చేసుకోండి",
          "అవసరమైతే సంబంధించిన వైద్య రికార్డులను తీసుకురండి"
        ];

  return (
    <div>
      {/* 🌿 Hero Section */}
      <section className="bg-gradient-to-r from-green-400 to-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {currentLanguage === 'en' ? "Book an Appointment" : "అపాయింట్‌మెంట్ బుక్ చేయండి"}
          </h1>
          <p className="text-xl text-green-200 max-w-3xl mx-auto">
            {currentLanguage === 'en'
              ? "Schedule your visit with our expert doctors. We're here to provide you with the best possible healthcare experience."
              : "మా నిపుణులైన వైద్యులతో మీ సందర్శనను షెడ్యూల్ చేయండి. మేము మీకు ఉత్తమ వైద్య సేవలను అందించడానికి ఇక్కడ ఉన్నాము."}
          </p>
        </div>
      </section>

      {/* 🩺 Appointment Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AppointmentForm />
        </div>
      </section>

      {/* 💚 Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {currentLanguage === 'en' ? "Why Choose Us?" : "మమ్మల్ని ఎందుకు ఎంచుకోవాలి?"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentLanguage === 'en'
                ? "We make booking and attending appointments as easy and comfortable as possible."
                : "మేము అపాయింట్‌మెంట్ బుక్ చేయడం మరియు హాజరుకావడం సులభంగా మరియు సౌకర్యవంతంగా ఉండేలా చేస్తాము."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appointmentInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {info.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📝 Preparation Tips */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {currentLanguage === 'en'
                    ? "Preparing for Your Visit"
                    : "మీ సందర్శన కోసం సిద్ధం అవ్వడం"}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {currentLanguage === 'en'
                    ? "To ensure a smooth and efficient appointment, please prepare the following:"
                    : "సౌకర్యవంతమైన అపాయింట్‌మెంట్ కోసం, దయచేసి క్రింద పేర్కొన్నవి సిద్ధం చేసుకోండి:"}
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

              {/* 🕒 Office Hours */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {currentLanguage === 'en' ? "Office Hours" : "ఆఫీస్ సమయాలు"}
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">
                      {currentLanguage === 'en' ? "Monday - Friday" : "సోమవారం - శుక్రవారం"}
                    </span>
                    <span className="text-gray-600">
                      9:00 AM - 3:00 PM & 6:00 PM - 10:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">
                      {currentLanguage === 'en' ? "Sunday" : "ఆదివారం"}
                    </span>
                    <span className="text-gray-600">
                      {currentLanguage === 'en' ? "Closed" : "మూసివేయబడింది"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-red-600">
                      {currentLanguage === 'en' ? "Emergency Care" : "అత్యవసర సేవలు"}
                    </span>
                    <span className="text-red-600 font-medium">24/7</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {currentLanguage === 'en'
                      ? "Emergency Contact"
                      : "అత్యవసర సంప్రదింపు"}
                  </h4>
                  <p className="text-green-600 font-bold text-lg">97041 30234</p>
                  <p className="text-sm text-gray-600">
                    {currentLanguage === 'en'
                      ? "Available 24/7 for emergencies"
                      : "అత్యవసర పరిస్థితుల కోసం 24/7 అందుబాటులో ఉంటుంది"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ❓ FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {currentLanguage === 'en'
                  ? "Frequently Asked Questions"
                  : "తరచుగా అడిగే ప్రశ్నలు"}
              </h2>
              <p className="text-xl text-gray-600">
                {currentLanguage === 'en'
                  ? "Common questions about booking and attending appointments."
                  : "అపాయింట్‌మెంట్‌ల బుకింగ్ మరియు హాజరుకావడంపై సాధారణ ప్రశ్నలు."}
              </p>
            </div>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {currentLanguage === 'en'
                    ? "How far in advance should I book an appointment?"
                    : "ఎంత ముందుగానే అపాయింట్‌మెంట్ బుక్ చేయాలి?"}
                </h3>
                <p className="text-gray-600">
                  {currentLanguage === 'en'
                    ? "We recommend booking at least 1-2 weeks in advance for routine appointments. For urgent care, we offer same-day appointments based on availability."
                    : "సాధారణ అపాయింట్‌మెంట్‌ల కోసం కనీసం 1-2 వారాల ముందుగానే బుక్ చేయాలని మేము సిఫారసు చేస్తున్నాము. అత్యవసర సేవల కోసం, అందుబాటులో ఉంటే అదే రోజు అపాయింట్‌మెంట్‌లు అందిస్తాము."}
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {currentLanguage === 'en'
                    ? "What if I need to cancel or reschedule?"
                    : "నేను రద్దు చేయాలి లేదా మార్చాలి అంటే?"}
                </h3>
                <p className="text-gray-600">
                  {currentLanguage === 'en'
                    ? "Please notify us at least 24 hours in advance if you need to cancel or reschedule. You can do this by calling us or using our online portal."
                    : "రద్దు చేయడం లేదా మార్చడం అవసరమైతే, కనీసం 24 గంటల ముందు మాకు తెలియజేయండి. మీరు మాకు కాల్ చేయవచ్చు లేదా మా ఆన్‌లైన్ పోర్టల్‌ను ఉపయోగించవచ్చు."}
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {currentLanguage === 'en'
                    ? "Do you accept insurance?"
                    : "మీరు ఇన్సూరెన్స్‌ను అంగీకరిస్తారా?"}
                </h3>
                <p className="text-gray-600">
                  {currentLanguage === 'en'
                    ? "Yes, we accept most major insurance plans. Please contact our billing department to verify your coverage."
                    : "అవును, మేము ప్రధాన ఇన్సూరెన్స్ ప్లాన్‌లను అంగీకరిస్తాము. మీ కవరేజ్ ధృవీకరించడానికి మా బిల్లింగ్ విభాగాన్ని సంప్రదించండి."}
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {currentLanguage === 'en'
                    ? "How long do appointments typically last?"
                    : "సాధారణంగా అపాయింట్‌మెంట్‌లు ఎంతసేపు కొనసాగుతాయి?"}
                </h3>
                <p className="text-gray-600">
                  {currentLanguage === 'en'
                    ? "Initial consultations usually last 30–45 minutes, while follow-up appointments take around 15–30 minutes depending on your needs."
                    : "ప్రారంభ కన్సల్టేషన్‌లు సాధారణంగా 30–45 నిమిషాలు ఉంటాయి, ఫాలో-అప్ అపాయింట్‌మెంట్‌లు మీ అవసరాలను బట్టి 15–30 నిమిషాలు ఉంటాయి."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ☎️ Contact Section */}
      <section className="py-20 bg-gradient-to-r from-green-400 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {currentLanguage === 'en' ? "Need Help?" : "సహాయం కావాలా?"}
          </h2>
          <p className="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
            {currentLanguage === 'en'
              ? "If you have any questions about booking an appointment or need assistance, our team is here to help you."
              : "అపాయింట్‌మెంట్ బుకింగ్ గురించి ఏవైనా ప్రశ్నలు ఉన్నా లేదా సహాయం అవసరమైనా, మా బృందం మీకు సహాయం చేయడానికి సిద్ధంగా ఉంది."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9704130234"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              {currentLanguage === 'en' ? "Call Us Now" : "ఇప్పుడే మాకు కాల్ చేయండి"}
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              {currentLanguage === 'en' ? "Contact Us" : "మమ్మల్ని సంప్రదించండి"}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;





















// import AppointmentForm from '../components/AppointmentForm';
// import { Calendar, Clock, Phone, MapPin, CheckCircle } from 'lucide-react';

// const Appointment = () => {
//   const appointmentInfo = [
//     {
//       icon: Calendar,
//       title: "Easy Scheduling",
//       description: "Book your appointment online or call us directly. We offer flexible scheduling options."
//     },
//     {
//       icon: Clock,
//       title: "Quick Response",
//       description: "We'll confirm your appointment within 24 hours and send you a reminder."
//     },
//     {
//       icon: Phone,
//       title: "24/7 Support",
//       description: "Our support team is available round the clock to assist you with any questions."
//     },
//     {
//       icon: MapPin,
//       title: "Convenient Location",
//       description: "Located in the heart of the city with easy access and ample parking."
//     }
//   ];

//   const preparationTips = [
//     "Bring your ID and insurance card",
//     "Arrive 15 minutes before your appointment",
//     "Bring a list of current medications",
//     "Prepare any questions you may have",
//     "Bring relevant medical records if applicable"
//   ];

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-green-400 to-green-600 text-white py-20">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-5xl font-bold mb-6">Book an Appointment</h1>
//           <p className="text-xl text-green-200 max-w-3xl mx-auto">
//             Schedule your visit with our expert doctors. We're here to provide you with 
//             the best possible healthcare experience.
//           </p>
//         </div>
//       </section>

//       {/* Appointment Form Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <AppointmentForm />
//         </div>
//       </section>

//       {/* Information Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               We make booking and attending appointments as easy and comfortable as possible.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {appointmentInfo.map((info, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <info.icon className="w-8 h-8 text-green-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{info.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Preparation Tips */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <div>
//                 <h2 className="text-4xl font-bold text-gray-900 mb-6">Preparing for Your Visit</h2>
//                 <p className="text-lg text-gray-600 mb-8">
//                   To ensure a smooth and efficient appointment, please prepare the following:
//                 </p>
                
//                 <div className="space-y-4">
//                   {preparationTips.map((tip, index) => (
//                     <div key={index} className="flex items-start space-x-3">
//                       <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
//                       <span className="text-gray-700">{tip}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl shadow-lg p-8">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Hours</h3>
//                 <div className="space-y-4">
//                   <div className="flex justify-between items-center py-2 border-b border-gray-200">
//                     <span className="font-medium">Monday - Friday</span>
//                     <span className="text-gray-600">9:00 AM - 3:00 PM & 6:00 PM - 10:00 PM</span>
//                   </div>
              
//                   <div className="flex justify-between items-center py-2 border-b border-gray-200">
//                     <span className="font-medium">Sunday</span>
//                     <span className="text-gray-600">Closed</span>
//                   </div>
//                   <div className="flex justify-between items-center py-2">
//                     <span className="font-medium text-red-600">Emergency Care</span>
//                     <span className="text-red-600 font-medium">24/7</span>
//                   </div>
//                 </div>

//                 <div className="mt-8 p-4 bg-green-50 rounded-lg">
//                   <h4 className="font-semibold text-gray-900 mb-2">Emergency Contact</h4>
//                   <p className="text-green-600 font-bold text-lg">97041 30234</p>
//                   <p className="text-sm text-gray-600">Available 24/7 for emergencies</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
//               <p className="text-xl text-gray-600">
//                 Common questions about booking and attending appointments.
//               </p>
//             </div>

//             <div className="space-y-6">
//               <div className="bg-white rounded-lg p-6 shadow-sm">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                   How far in advance should I book an appointment?
//                 </h3>
//                 <p className="text-gray-600">
//                   We recommend booking at least 1-2 weeks in advance for routine appointments. 
//                   For urgent care, we offer same-day appointments based on availability.
//                 </p>
//               </div>

//               <div className="bg-white rounded-lg p-6 shadow-sm">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                   What if I need to cancel or reschedule?
//                 </h3>
//                 <p className="text-gray-600">
//                   Please notify us at least 24 hours in advance if you need to cancel or reschedule. 
//                   You can do this by calling us or using our online portal.
//                 </p>
//               </div>

//               <div className="bg-white rounded-lg p-6 shadow-sm">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                   Do you accept insurance?
//                 </h3>
//                 <p className="text-gray-600">
//                   Yes, we accept most major insurance plans. Please contact our billing department 
//                   to verify your specific coverage before your appointment.
//                 </p>
//               </div>

//               <div className="bg-white rounded-lg p-6 shadow-sm">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                   How long do appointments typically last?
//                 </h3>
//                 <p className="text-gray-600">
//                   Initial consultations typically last 30-45 minutes, while follow-up appointments 
//                   are usually 15-30 minutes. The duration may vary based on your specific needs.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-20 bg-gradient-to-r from-green-400 to-green-600 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold mb-6">Need Help?</h2>
//           <p className="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
//             If you have any questions about booking an appointment or need assistance, 
//             our team is here to help you.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="tel:(555) 123-4567"
//               className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
//             >
//               Call Us Now
//             </a>
//             <a
//               href="/contact"
//               className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
//             >
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Appointment; 
