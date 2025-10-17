import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Stethoscope,
  Ear,
  Baby,
  Bone,
  Scissors,
  Ambulance,
  FlaskConical,
  Thermometer,
  CheckCircle,
  Shield,
  Clock,
  Users
} from 'lucide-react';


const features = [
      {
        icon: Shield,
        title: "Quality Assurance",
        description: "All our services meet the highest medical standards and are regularly audited for quality."
      },
      {
        icon: Clock,
        title: "Quick Service",
        description: "Minimal wait times with efficient scheduling and streamlined processes."
      },
      {
        icon: Users,
        title: "Expert Staff",
        description: "Experienced medical professionals dedicated to providing exceptional care."
      },
      {
        icon: CheckCircle,
        title: "Comprehensive Care",
        description: "From diagnosis to treatment and follow-up, we provide complete healthcare solutions."
      }
    ];


   const services = [
      {
        id: 1,
        name: {
          en: "General Physician Consultation",
          te: "సాధారణ వైద్య సలహా"
        },
        overview: {
          en: "Our General Physicians provide expert diagnosis and treatment for a wide range of health issues, focusing on preventive care, chronic disease management, and lifestyle guidance."
        },
        conditionsTreated: [
          "Diabetes and hypertension",
          "Thyroid disorders",
          "Heart and respiratory diseases",
          "Fever, infections, and viral illnesses",
          "Routine health check-ups"
        ],
        procedures: [
          "Physical examination",
          "Blood pressure & sugar monitoring",
          "Diagnostic test recommendations",
          "Personalized treatment plans"
        ],
        benefits: [
          "Early detection of diseases",
          "Holistic, continuous medical care",
          "Personalized health advice"
        ],
        doctorSpecialists: ["Dr. Anil Kumar", "Dr. Priya Reddy"],
        icon: "stethoscope",
        image: "/images/services/general-physician.jpeg"
      },
      {
        id: 2,
        name: {
          en: "ENT Specialist Consultation",
          te: "ENT విశేషజ్ఞ సలహా"
        },
        overview: {
          en: "Our ENT specialists offer comprehensive care for ear, nose, and throat conditions using advanced diagnostic tools and treatment techniques."
        },
        conditionsTreated: [
          "Sinus infections and nasal allergies",
          "Ear pain, hearing loss, tinnitus",
          "Tonsillitis and throat infections",
          "Voice and swallowing problems"
        ],
        procedures: [
          "Endoscopic nasal examination",
          "Audiometry & hearing tests",
          "Minor ENT procedures",
          "Allergy management"
        ],
        benefits: [
          "Specialized ENT care under one roof",
          "Minimally invasive diagnosis",
          "Faster recovery and personalized attention"
        ],
        doctorSpecialists: ["Dr. Harika Reddy", "Dr. Suresh Naidu"],
        icon: "ear",
        image: "/images/services/ent-consultation.jpeg"
      },
      {
        id: 3,
        name: {
          en: "Gynecology & IVF Treatment",
          te: "స్త్రీరోగవిజ్ఞానం & ఐవిఎఫ్ చికిత్స"
        },
        overview: {
          en: "We provide compassionate and comprehensive women’s healthcare, including fertility treatments, antenatal care, and minimally invasive gynecological procedures."
        },
        conditionsTreated: [
          "Irregular periods & PCOS",
          "Infertility & IVF",
          "Pregnancy care",
          "Uterine fibroids and cysts"
        ],
        procedures: [
          "Ultrasound scanning",
          "IVF & IUI procedures",
          "Laparoscopic gynecology surgeries",
          "Antenatal counseling"
        ],
        benefits: [
          "Personalized fertility plans",
          "Confidential and compassionate care",
          "Advanced reproductive technology"
        ],
        doctorSpecialists: ["Dr. Kavya Rani", "Dr. Shalini Rao"],
        icon: "baby",
        image: "/images/services/gynecology-ivf.jpeg"
      },
      {
        id: 4,
        name: {
          en: "Orthopedic Consultation",
          te: "అస్థిపంజర సలహా"
        },
        overview: {
          en: "Specialized orthopedic care for bone, joint, and musculoskeletal conditions, including trauma and joint replacement guidance."
        },
        conditionsTreated: [
          "Bone fractures & injuries",
          "Arthritis & joint pain",
          "Spinal disorders",
          "Sports injuries"
        ],
        procedures: [
          "Physical examination & mobility assessment",
          "X-rays and MRI recommendations",
          "Joint injections & therapy",
          "Pre/post-surgery guidance"
        ],
        benefits: [
          "Relief from pain and improved mobility",
          "Expert surgical consultations",
          "Personalized rehabilitation plans"
        ],
        doctorSpecialists: ["Dr. Ramesh Babu", "Dr. Anitha Sharma"],
        icon: "bone",
        image: "/images/services/orthopedic-consultation.jpeg"
      },
      {
        id: 5,
        name: {
          en: "Laparoscopic Surgery",
          te: "లాపరోస్కోపిక్ శస్త్రచికిత్స"
        },
        overview: {
          en: "Minimally invasive surgical procedures for a variety of conditions, reducing recovery time and surgical risks."
        },
        conditionsTreated: [
          "Gallbladder stones",
          "Hernias",
          "Appendicitis",
          "Gynecological surgeries"
        ],
        procedures: [
          "Laparoscopic examination",
          "Keyhole surgical procedures",
          "Post-operative care and monitoring"
        ],
        benefits: [
          "Smaller incisions, faster recovery",
          "Reduced pain and infection risk",
          "Shorter hospital stay"
        ],
        doctorSpecialists: ["Dr. Sunil Rao", "Dr. Meera Nair"],
        icon: "scissors",
        image: "/images/services/laparoscopic-surgery.jpeg"
      },
      {
        id: 6,
        name: {
          en: "Emergency Care",
          te: "అత్యవసర సంరక్షణ"
        },
        overview: {
          en: "24/7 emergency medical services with quick response, critical care, and inpatient support."
        },
        conditionsTreated: [
          "Heart attacks and strokes",
          "Severe injuries & trauma",
          "Acute illnesses",
          "Life-threatening emergencies"
        ],
        procedures: [
          "Immediate medical assessment",
          "Stabilization & resuscitation",
          "Critical care monitoring"
        ],
        benefits: [
          "Rapid response in emergencies",
          "Continuous monitoring and care",
          "Access to specialists immediately"
        ],
        doctorSpecialists: ["Dr. Ravi Kumar", "Dr. Shweta Singh"],
        icon: "ambulance",
        image: "/images/services/emergency-care.jpeg"
      },
      {
        id: 7,
        name: {
          en: "Diagnostic Services",
          te: "నిర్ధారణ సేవలు"
        },
        overview: {
          en: "Comprehensive diagnostic services including blood tests, imaging, and full medical workup."
        },
        conditionsTreated: [
          "Routine health screenings",
          "Chronic disease monitoring",
          "Pre-surgery assessments",
          "Infection & disease diagnosis"
        ],
        procedures: [
          "Blood tests & urine analysis",
          "X-ray, CT scan, MRI",
          "ECG & echocardiography"
        ],
        benefits: [
          "Accurate and timely diagnosis",
          "Advanced laboratory equipment",
          "Convenient one-stop diagnostics"
        ],
        doctorSpecialists: ["Dr. Naveen Kumar", "Dr. Latha Reddy"],
        icon: "flask",
        image: "/images/services/diagnostic-services.jpeg"
      },
      {
        id: 8,
        name: {
          en: "Fever & Infection Treatment",
          te: "జ్వరం & ఇన్ఫెక్షన్ చికిత్స"
        },
        overview: {
          en: "Treatment for various infections, including viral fevers, malaria, typhoid, dengue, and other acute conditions."
        },
        conditionsTreated: [
          "Malaria & typhoid",
          "Dengue & viral infections",
          "Fever & chills",
          "Bacterial infections"
        ],
        procedures: [
          "Diagnostic testing for infections",
          "Medication management",
          "Follow-up care & monitoring"
        ],
        benefits: [
          "Rapid relief from fever and infections",
          "Personalized treatment plans",
          "Prevention of complications"
        ],
        doctorSpecialists: ["Dr. Arjun Reddy", "Dr. Priya Varma"],
        icon: "thermometer",
        image: "/images/services/fever-infection.jpeg"
      }
    ];
    

const iconMap = {
  stethoscope: Stethoscope,
  ear: Ear,
  baby: Baby,
  bone: Bone,
  scissors: Scissors,
  ambulance: Ambulance,
  flask: FlaskConical,
  thermometer: Thermometer
};

const Services = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const matched = services.find(
        (s) => s.name.en.toLowerCase().replace(/[^a-z0-9]+/g, '-') === hash
      );
      setSelectedService(matched || null);
    }
  }, [location]);

  if (!selectedService) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Service Not Found</h2>
        <p className="text-gray-600 mb-6">Please select a valid service from the menu.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  const Icon = iconMap[selectedService?.icon];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-green-400 to-green-400 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl lg:text-5xl  font-bold">{selectedService?.name?.en}</h1>
          {/* <p className="text-lg text-white/90 max-w-3xl mx-auto">{selectedService?.overview?.en}</p> */}
        </div>
      </section>

      {/* Service Details */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10 max-w-5xl bg-white shadow-xl rounded-2xl p-10">
          <div className="flex flex-col items-center mb-10">
            
            {selectedService?.image && (
              <img
                src={selectedService?.image}
                alt={selectedService?.name?.en}
                className="rounded-xl mb-8 w-full max-h-96 object-cover shadow-md"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            )}
          </div>

          {/* Conditions */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Conditions Treated</h3>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-1">
                {selectedService?.conditionsTreated?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Procedures */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Procedures & Treatments</h3>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-1">
              {selectedService?.procedures?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Benefits</h3>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-1">
              {selectedService?.benefits?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Doctors */}
          {/* {selectedService?.doctorSpecialists && (
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Available Specialists</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                {selectedService?.doctorSpecialists?.map((doc, i) => (
                  <li key={i}>{doc}</li>
                ))}
              </ul>
            </div>
          )}           */}
        </div>


            {/* Special Clinics Section */}

            {selectedService.id === 2 &&   
            <section className="py-20 bg-gray-50">
         <div className="container mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-gray-900 mb-4">Special Clinics</h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               Explore our specialized clinics that offer advanced treatments and collaborations for better care.
             </p>
           </div>

           {/* Vertigo Clinic */}
           <div className="mb-20">
             <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Vertigo Clinic</h3>
             <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-center">
               Our dedicated Vertigo Clinic offers advanced diagnostic and therapeutic solutions for patients
               experiencing dizziness, imbalance, or vestibular disorders.
             </p>

             {/* Images Grid */}
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
               <img src="/images/vertigo1.jpeg" alt="Vertigo Clinic 1" className="rounded-xl shadow-lg w-full  object-cover" />
               <img src="/images/vertigo2.jpeg" alt="Vertigo Clinic 2" className="rounded-xl shadow-lg w-full object-cover" />
               <img src="/images/vertigo3.jpeg" alt="Vertigo Clinic 3" className="rounded-xl shadow-lg w-full  object-cover" />
               <img src="/images/vertigo4.jpeg" alt="Vertigo Clinic 4" className="rounded-xl shadow-lg w-full  object-cover" />
               <img src="/images/vertigo6.jpeg" alt="Vertigo Clinic 6" className="rounded-xl shadow-lg w-full  object-cover" />
               <img src="/images/vertigo7.jpeg" alt="Vertigo Clinic 7" className="rounded-xl shadow-lg w-full  object-cover" />
               <img src="/images/vertigo8.jpeg" alt="Vertigo Clinic 7" className="rounded-xl shadow-lg w-full  object-cover" />

             </div>

             {/* Video */}
             <div className="max-w-4xl mx-auto">
               <video controls className="w-full rounded-xl shadow-lg">
                 <source src="/videos/vertigo.mp4" type="video/mp4" />
                 Your browser does not support the video tag.
               </video>
             </div>
           </div>

           {/* Allergy Clinic */}
           <div>
             <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
               Allergy Clinic (in collaboration with Evexia)
             </h3>
             <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-center">
               In partnership with Evexia, our Allergy Clinic provides expert consultation, testing,
               and treatment for a wide range of allergies with state-of-the-art technology.
             </p>

             {/* Image */}
             <div className="flex justify-center mb-8">
               <img src="/images/allergy.jpeg" alt="Allergy Clinic" className="rounded-xl shadow-lg w-full max-w-lg object-cover" />
             </div>

             {/* Video */}
             <div className="max-w-4xl mx-auto">
               <video controls className="w-full rounded-xl shadow-lg">
                 <source src="/videos/allergy.mp4" type="video/mp4" />
                 Your browser does not support the video tag.
               </video>
             </div>
           </div>

         </div>
       </section>}
     

                    {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing the highest quality healthcare services
              with a focus on patient comfort and positive outcomes.
            </p>
          </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {features.map((feature, index) => (
               <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-green-700" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                 <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>        
          </div>
       </section>
      </section>
    </div>
  );
};

export default Services;














// import ServiceCard from '../components/ServiceCard';
// import { services } from '../data/doctors';
// import { CheckCircle, Clock, Shield, Users, Filter, X } from 'lucide-react'; import { useState } from 'react';

// const Services = () => {
//   const [selectedService, setSelectedService] = useState(null);

//   const filteredServices = selectedService
//     ? services.filter(service => service.id === selectedService)
//     : services;

//   const handleServiceFilter = (serviceId) => {
//     setSelectedService(serviceId === selectedService ? null : serviceId);
//   };

//   const clearFilter = () => {
//     setSelectedService(null);
//   };
//   const features = [
//     {
//       icon: Shield,
//       title: "Quality Assurance",
//       description: "All our services meet the highest medical standards and are regularly audited for quality."
//     },
//     {
//       icon: Clock,
//       title: "Quick Service",
//       description: "Minimal wait times with efficient scheduling and streamlined processes."
//     },
//     {
//       icon: Users,
//       title: "Expert Staff",
//       description: "Experienced medical professionals dedicated to providing exceptional care."
//     },
//     {
//       icon: CheckCircle,
//       title: "Comprehensive Care",
//       description: "From diagnosis to treatment and follow-up, we provide complete healthcare solutions."
//     }
//   ];

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-green-400 to-green-400 text-white py-20">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-5xl font-bold mb-6">Our Services</h1>
//           <p className="text-xl text-white-200 max-w-3xl mx-auto">
//             Comprehensive healthcare services designed to meet all your medical needs.
//             From routine check-ups to specialized treatments, we're here for you.
//           </p>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Services</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Explore our range of medical services and find the care you need.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
//             {services.map((service) => (
//               <ServiceCard key={service.id} service={service} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Special Clinics Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Special Clinics</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Explore our specialized clinics that offer advanced treatments and collaborations for better care.
//             </p>
//           </div>

//           {/* Vertigo Clinic */}
//           <div className="mb-20">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Vertigo Clinic</h3>
//             <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-center">
//               Our dedicated Vertigo Clinic offers advanced diagnostic and therapeutic solutions for patients
//               experiencing dizziness, imbalance, or vestibular disorders.
//             </p>

//             {/* Images Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//               <img src="/images/vertigo1.jpeg" alt="Vertigo Clinic 1" className="rounded-xl shadow-lg w-full  object-cover" />
//               <img src="/images/vertigo2.jpeg" alt="Vertigo Clinic 2" className="rounded-xl shadow-lg w-full object-cover" />
//               <img src="/images/vertigo3.jpeg" alt="Vertigo Clinic 3" className="rounded-xl shadow-lg w-full  object-cover" />
//               <img src="/images/vertigo4.jpeg" alt="Vertigo Clinic 4" className="rounded-xl shadow-lg w-full  object-cover" />
//               <img src="/images/vertigo6.jpeg" alt="Vertigo Clinic 6" className="rounded-xl shadow-lg w-full  object-cover" />
//               <img src="/images/vertigo7.jpeg" alt="Vertigo Clinic 7" className="rounded-xl shadow-lg w-full  object-cover" />
//               <img src="/images/vertigo8.jpeg" alt="Vertigo Clinic 7" className="rounded-xl shadow-lg w-full  object-cover" />

//             </div>

//             {/* Video */}
//             <div className="max-w-4xl mx-auto">
//               <video controls className="w-full rounded-xl shadow-lg">
//                 <source src="/videos/vertigo.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>

//           {/* Allergy Clinic */}
//           <div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
//               Allergy Clinic (in collaboration with Evexia)
//             </h3>
//             <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-center">
//               In partnership with Evexia, our Allergy Clinic provides expert consultation, testing,
//               and treatment for a wide range of allergies with state-of-the-art technology.
//             </p>

//             {/* Image */}
//             <div className="flex justify-center mb-8">
//               <img src="/images/allergy.jpeg" alt="Allergy Clinic" className="rounded-xl shadow-lg w-full max-w-lg object-cover" />
//             </div>

//             {/* Video */}
//             <div className="max-w-4xl mx-auto">
//               <video controls className="w-full rounded-xl shadow-lg">
//                 <source src="/videos/allergy.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               We are committed to providing the highest quality healthcare services
//               with a focus on patient comfort and positive outcomes.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <feature.icon className="w-8 h-8 text-green-700" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Service Categories */}
//       {/* <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our services are organized into categories to help you find exactly what you need.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
//             <div className="bg-white rounded-xl shadow-lg p-8">
//               <div className="w-16 h-16 bg-green-200 rounded-xl flex items-center justify-center mb-6">
//                 <span className="text-2xl font-bold text-green-700">PC</span>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Primary Care</h3>
//               <p className="text-gray-600 mb-6">
//                 Comprehensive health care for all ages, including routine check-ups,
//                 preventive care, and treatment of common illnesses.
//               </p>
//               <ul className="space-y-2 text-sm text-gray-600">
//                 <li>• Annual physical examinations</li>
//                 <li>• Vaccinations and immunizations</li>
//                 <li>• Chronic disease management</li>
//                 <li>• Health screenings</li>
//               </ul>
//             </div>

           
//             <div className="bg-white rounded-xl shadow-lg p-8">
//               <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
//                 <span className="text-2xl font-bold text-green-600">SC</span>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialist Care</h3>
//               <p className="text-gray-600 mb-6">
//                 Expert consultation and treatment from specialists in various medical fields
//                 for complex health conditions.
//               </p>
//               <ul className="space-y-2 text-sm text-gray-600">
//                 <li>• Cardiology consultations</li>
//                 <li>• Neurological evaluations</li>
//                 <li>• Orthopedic treatments</li>
//                 <li>• Dermatological care</li>
//               </ul>
//             </div>

            
//             <div className="bg-white rounded-xl shadow-lg p-8">
//               <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
//                 <span className="text-2xl font-bold text-purple-600">DS</span>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Diagnostic Services</h3>
//               <p className="text-gray-600 mb-6">
//                 Advanced imaging and laboratory services for accurate diagnosis
//                 and treatment planning.
//               </p>
//               <ul className="space-y-2 text-sm text-gray-600">
//                 <li>• MRI and CT scans</li>
//                 <li>• X-ray imaging</li>
//                 <li>• Blood work and testing</li>
//                 <li>• Ultrasound examinations</li>
//               </ul>
//             </div>

           
//             <div className="bg-white rounded-xl shadow-lg p-8">
//               <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
//                 <span className="text-2xl font-bold text-red-600">EC</span>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Care</h3>
//               <p className="text-gray-600 mb-6">
//                 24/7 emergency medical services for urgent health situations
//                 requiring immediate attention.
//               </p>
//               <ul className="space-y-2 text-sm text-gray-600">
//                 <li>• Trauma care</li>
//                 <li>• Emergency surgery</li>
//                 <li>• Critical care</li>
//                 <li>• Urgent care</li>
//               </ul>
//             </div>

           
//             <div className="bg-white rounded-xl shadow-lg p-8">
//               <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
//                 <span className="text-2xl font-bold text-orange-600">RH</span>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Rehabilitation</h3>
//               <p className="text-gray-600 mb-6">
//                 Physical therapy and rehabilitation services to help patients
//                 recover and regain function after injury or surgery.
//               </p>
//               <ul className="space-y-2 text-sm text-gray-600">
//                 <li>• Physical therapy</li>
//                 <li>• Occupational therapy</li>
//                 <li>• Sports rehabilitation</li>
//                 <li>• Post-surgery recovery</li>
//               </ul>
//             </div>

            
//             <div className="bg-white rounded-xl shadow-lg p-8">
//               <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
//                 <span className="text-2xl font-bold text-teal-600">PC</span>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Preventive Care</h3>
//               <p className="text-gray-600 mb-6">
//                 Proactive health services focused on preventing illness and
//                 maintaining optimal health and wellness.
//               </p>
//               <ul className="space-y-2 text-sm text-gray-600">
//                 <li>• Health screenings</li>
//                 <li>• Wellness programs</li>
//                 <li>• Lifestyle counseling</li>
//                 <li>• Preventive vaccinations</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* Pricing Information */}
//       {/* <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               We believe in transparent pricing so you know exactly what to expect. 
//               Contact us for detailed pricing information.
//             </p>
//           </div>

//           <div className="max-w-4xl mx-auto">
//             <div className="bg-white rounded-xl shadow-lg p-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {services.map((service) => (
//                   <div key={service.id} className="border border-gray-200 rounded-lg p-6">
//                     <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
//                     <div className="text-2xl font-bold text-green-700 mb-2">{service.price}</div>
//                     <p className="text-sm text-gray-600 mb-4">{service.duration}</p>
//                     <p className="text-sm text-gray-600">{service.description}</p>
//                   </div>
//                 ))}
//               </div>
              
//                               <div className="mt-8 p-6 bg-green-100 rounded-lg">
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">Insurance & Payment</h3>
//                 <p className="text-gray-600 mb-4">
//                   We accept most major insurance plans and offer flexible payment options. 
//                   Contact our billing department for specific coverage information.
//                 </p>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
//                   <div className="flex items-center space-x-2">
//                     <CheckCircle className="w-4 h-4 text-green-600" />
//                     <span>Most insurance accepted</span>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <CheckCircle className="w-4 h-4 text-green-600" />
//                     <span>Flexible payment plans</span>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <CheckCircle className="w-4 h-4 text-green-600" />
//                     <span>Transparent pricing</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> */}




//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-green-400 to-green-400 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
//           <p className="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
//             Contact us today to learn more about our services or schedule an appointment
//             with one of our healthcare professionals.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="/appointment"
//               className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
//             >
//               Book Appointment
//             </a>
//             <a
//               href="/contact"
//               className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
//             >
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services; 
