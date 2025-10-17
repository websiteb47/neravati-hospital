import { useState, useEffect } from 'react';
import DepartmentCard from '../components/DepartmentCard';
import { departments } from '../data/doctors';

import { Search } from 'lucide-react';


const doctors = [
  {
    id: 1,
    name: "Dr. N. Vinod Kumar",
    specialty: "ENT Specialist",
    department: "ENT",
    image: "/images/doctor-vinod.jpeg",
    experience: "Ex. Surgical Registrar, K.K.R ENT Hospital, Chennai",
    education: "MBBS (OSM), MS (ENT), MRSH",
    availability: "Mon-Sat, 9AM-5PM",
    rating: 4.8,
    patients: 950,
    description: "Expert in ear, nose, and throat problems. Former Asst. Professor at Mamata Medical College."
  },
  {
    id: 2,
    name: "Dr. A. Aruna Kumari",
    specialty: "Gynecology & IVF",
    department: "Gynecology",
    image: "/images/doctor-aruna.jpeg",
    experience: "Fellow in IVF, Cosmetic Gynecology & Laparoscopic Surgery",
    education: "MBBS, DGO, FAGE",
    availability: "Mon-Sat, 10AM-4PM",
    rating: 4.9,
    patients: 1300,
    description: "Gold Medalist. Specialist in IVF, cosmetic gynecology, and hysteroscopic surgery. Former Asst. Professor at Mamata Medical College."
  },
  {
    id: 3,
    name: "Dr. D. Fatima Bee",
    specialty: "Gynecology & Laparoscopy",
    department: "Gynecology",
    image: "/images/doctor-fatima.jpeg",
    experience: "Laparoscopic & NDVH Surgeon",
    education: "MBBS, MS (OBG), FMAS",
    availability: "Mon-Sat, 9AM-3PM",
    rating: 4.8,
    patients: 900,
    description: "Expert in laparoscopic procedures and normal delivery without hysterectomy (NDVH)."
  },
  {
    id: 4,
    name: "Dr. K. Suman Kumar",
    specialty: "Orthopedics",
    department: "Orthopedics",
    image: "/images/doctor-suman.jpeg",
    experience: "Specialist in trauma and joint replacements",
    education: "MBBS, MS (Ortho), CCPM, MRCS (UK)",
    availability: "Mon-Sat, 9AM-5PM",
    rating: 4.7,
    patients: 1000,
    description: "Consultant Orthopaedician with expertise in trauma care and joint replacement surgeries."
  },
  {
    id: 5,
    name: "Dr. Y. Devendra Nayak",
    specialty: "General Physician & Internal Medicine",
    department: "General Medicine",
    image: "/images/doctor-devendra.jpeg",
    experience: "Trained at VMMC & Safdarjung Hospital, New Delhi",
    education: "MBBS, MD (General Medicine)",
    availability: "24/7 Emergency Service Available",
    rating: 4.9,
    patients: 1600,
    description: "Specialist in diabetes, thyroid, hypertension, heart diseases, chest infections, viral fevers, dengue, typhoid, joint pains, asthma, and more. Also treats gynec, pediatric, and geriatric cases with expert care in both inpatient and outpatient settings."
  },
  {
    id: 6,
    name: "Dr. A. Aruna Kumari",
    specialty: "IVF Specialist",
    department: "IVF Infertility",
    image: "/images/doctor-aruna.jpeg",
    experience: "Fellow in IVF, Cosmetic Gynecology & Laparoscopic Surgery",
    education: "MBBS, DGO, FAGE",
    availability: "Mon-Sat, 10AM-4PM",
    rating: 4.9,
    patients: 1300,
    description: "Gold Medalist. Specialist in IVF, cosmetic gynecology, and hysteroscopic surgery."
  }
  
]
;


const Departments = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Handle anchor links for smooth scrolling
  useEffect(() => {
    const handleScrollToSection = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            const offset = 140;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            });
          }, 500);
        }
      }
    };

    handleScrollToSection();
    const handleHashChange = () => handleScrollToSection();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const filteredDepartments = departments.filter(dept =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-400 to-green-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Departments</h1>
          <p className="text-xl text-white-200 max-w-3xl mx-auto">
            Comprehensive medical care across all major specialties with expert doctors 
            and state-of-the-art facilities to meet your healthcare needs.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search departments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          {searchTerm && (
            <div className="text-center mb-8">
              <p className="text-gray-600">
                Showing {filteredDepartments.length} of {departments.length} departments
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredDepartments.map((department) => (
              <DepartmentCard key={department.id} department={department} />
            ))}
          </div>

          {filteredDepartments.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No departments found matching your search.</p>
            </div>
          )}
        </div>
      </section> */}

      {/* Department Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Department Details</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn more about each department and the specialized services we offer.
            </p>
          </div>

          <div className="space-y-16">
            {departments.map((department) => {
             const relatedDoctors = doctors.filter((doc) =>
              doc.department.toLowerCase().includes(department.name.toLowerCase())
            );

              return (
                <div
                  key={department.id}
                  id={department.name.toLowerCase().replace(/\s+/g, '-')}
                  className="bg-white rounded-xl p-8"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">{department.name}</h3>
                      <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        {department.description}
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-700 rounded-full"></div>
                          <span className="text-gray-700">
                            <strong>{department.doctors} Expert Doctors</strong> specializing in {department.name}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                          <span className="text-gray-700">
                            <strong>State-of-the-art facilities</strong> for accurate diagnosis and treatment
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                          <span className="text-gray-700">
                            <strong>Comprehensive care</strong> from diagnosis to treatment and follow-up
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-6">Services Offered</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {department.services.map((service, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-green-700 rounded-full"></div>
                              <span className="text-gray-700 font-medium">{service}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ✅ Related Doctors */}
                  {relatedDoctors.length > 0 && (
                    <div className="mt-12">
                      <h4 className="text-2xl font-bold text-gray-900 mb-6">
                        Our Doctors in {department.name}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedDoctors.map((doc) => (
                          <div
                            key={doc.id}
                            className="border rounded-lg shadow-sm p-6 bg-white"
                          >
                            <img
                              src={doc.image}
                              alt={doc.name}
                              className="w-full object-cover rounded-lg mb-4"
                            />
                            <h5 className="text-xl font-semibold text-gray-900">
                              {doc.name}
                            </h5>
                            <p className="text-gray-600">{doc.specialty}</p>
                            <p className="text-sm text-gray-500 mt-2">{doc.experience}</p>
                            <p className="text-sm text-gray-500">{doc.education}</p>
                            <p className="text-sm text-gray-500 mt-1">
                              Availability: {doc.availability}
                            </p>
                            <p className="text-sm text-gray-600 mt-2">{doc.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>


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
       </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-400 to-green-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need to Schedule an Appointment?</h2>
          <p className="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your appointment with one of our expert doctors 
            in your preferred department.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/appointment"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Book Appointment
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;
