import { Link } from 'react-router-dom';
import { CheckCircle, Award, Users, Heart, Shield, Clock, Star, Calendar, MapPin, Stethoscope } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';

const About = () => {
  const stats = [
    { number: '50+', label: 'Hospital Beds', icon: Users },
    { number: '10k+', label: 'Families Conceived', icon: Heart },
    { number: '20+', label: 'Years Experience', icon: Award },
    { number: '24/7', label: 'Emergency Care', icon: Clock },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Leading our medical team with over 15 years of experience in healthcare management.'
    },
    {
      icon: Shield,
      title: 'Excellence',
      description: 'We maintain the highest standards of medical care and patient safety.'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Our multidisciplinary team works together for optimal patient outcomes.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We embrace the latest medical technologies and treatment methods.'
    },
  ];

  const timeline = [
    {
      year: '2004',
      title: 'Foundation & Establishment',
      description: 'Neravati Hospitals was established on November 1, 2004, opposite Head Post Office in Gandhi Chowk, Nandyal. Started with two departments (ENT, OG) as a 15-bedded hospital with functioning OT services and emergency services.',
      icon: Calendar,
      location: 'Gandhi Chowk, Nandyal'
    },
    {
      year: '2005',
      title: 'Service Expansion',
      description: 'Added X-ray and audiology services to enhance diagnostic capabilities. In 2004, Zies Oto-microscope and Storz endoscope were already available for ENT services.',
      icon: Stethoscope,
      location: 'Nandyal'
    },
    {
      year: '2008',
      title: 'Advanced ENT Technology',
      description: 'Micro-debridor was made available for advanced ENT surgeries, marking a significant technological advancement in our ENT department.',
      icon: Award,
      location: 'Nandyal'
    },
    {
      year: '2010',
      title: 'Laparoscopy & Hysteroscopy Services',
      description: 'Dr. Aruna Kumari established state-of-the-art laparoscopy and hysteroscopy services at NH. We became the 1st hospital in Kurnool district to start colposcopy guided cervical cancer screening services.',
      icon: Heart,
      location: 'Kurnool District'
    },
    {
      year: '2014',
      title: 'Reproductive Medicine Excellence',
      description: 'Dr. Aruna Kumari achieved ICOG TOPPER in reproductive medicine and established the Department of Reproductive Medicine at NH. With state-of-the-art embryology and IVF labs, we became the pioneers and 1st hospital to start fertility services in Nandyal district.',
      icon: Award,
      location: 'Nandyal District'
    },
    {
      year: '2014+',
      title: 'IVF Success & Growth',
      description: 'The 1st IVF baby of Nandyal, KARISHMA, was born at our hospital. Till now, around 10,000 families have conceived at our hospital and fulfilled their dreams.',
      icon: Heart,
      location: 'Nandyal'
    },
    {
      year: 'Present',
      title: '50-Bedded Multispeciality Hospital',
      description: 'Now established at Padmavathi Nagar with state-of-art corporate hospital services at affordable prices. New departments include Orthopaedics and General Medicine. Features world-class laminar OT, post-op recovery rooms, embryology and IVF labs. Under Dr. Vinod Kumar\'s ENT department, we have the 1st vertigo and allergy labs in Nandyal district. Dr. Suman\'s orthopaedics department offers joint replacement services and spine surgeries.',
      icon: MapPin,
      location: 'Padmavathi Nagar'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-400 to-green-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Neravati</h1>
          <p className="text-xl  text-white max-w-3xl mx-auto">
            Providing exceptional healthcare services with compassion, innovation, and excellence
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-green-700" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To provide exceptional healthcare services that improve the quality of life
                for our patients and their families through compassionate care, medical
                excellence, and innovative treatments.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Patient-centered care approach</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">State-of-the-art medical facilities</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Experienced medical professionals</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be the leading healthcare provider known for excellence, innovation, and
                compassionate care, setting the standard for medical services in our region.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Advanced medical technology</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive healthcare solutions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Community health improvement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals who lead our medical center and ensure
              the highest standards of patient care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">
                  <value.icon className="w-12 h-12 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A remarkable journey of growth, innovation, and commitment to healthcare excellence
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-8 mb-12">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center text-white">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="text-center mt-2">
                    <div className="text-sm font-semibold text-green-700">{item.year}</div>
                  </div>
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-700">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <div className="flex items-center text-sm text-green-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dr. Aruna Kumari Section */}
      {/* Dr. Vinod Kumar Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leading Specialist</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dr. Vinod Kumar – A pioneer in ENT surgeries and advanced otorhinolaryngology care
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="md:flex">
                {/* Left Profile Card */}
                <div className="md:w-1/3 bg-gradient-to-br from-green-400 to-green-400 p-8 text-white">
                  <div className="text-center">
                    <div className="w-40 h-40 bg-white rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                      <img
                        src="/images/doctor-vinod.jpeg"
                        alt="Dr. Vinod Kumar"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Dr. Vinod Kumar</h3>
                    <p className="text-white-200 mb-4">Senior Consultant</p>
                    <p className="text-white-200">ENT & Head-Neck Surgery</p>
                    <p className="text-white-200">Otorhinolaryngology Specialist</p>
                  </div>
                </div>

                {/* Right Content */}
                <div className="md:w-2/3 p-8">
                  {/* Professional Journey */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Professional Journey</h4>
                    <div className="space-y-3 text-gray-600">
                      <p>• MBBS from Osmania Medical College (1991–1997) – State Rank 74</p>
                      <p>• Postgraduation in ENT (Otorhinolaryngology) from Kakatiya Medical College, Warangal</p>
                      <p>• Worked as Surgical Registrar in KKR Hospital, Chennai</p>
                      <p>• Served as Assistant Professor in Mamatha Medical College, Khammam</p>
                      <p>• Established Department of ENT at Neravati Hospitals in 2004 and Audiology in 2005</p>
                      <p>• Over 22+ years of experience in advanced ENT surgeries with 10,000+ successful cases</p>
                      <p>• Expert in advanced endoscopic sinus surgery and microscopic ear surgeries</p>
                      <p>• Introduced Zeiss oto-microscope and Storz endoscope (2004), Microdebrider (2008), Coblator (2018)</p>
                      <p>• In 2025, established first-of-its-kind Vertigo & Allergy Clinic in Nandyal District</p>
                      <p>• Extending ENT services to peripheries (Giddalur & Khammam) every 1st Sunday for the last 22 years</p>
                      <p>• Conducted multiple free health camps for underprivileged communities</p>
                    </div>
                  </div>

                  {/* Educational Qualifications */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Educational Qualifications</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-green-700">MBBS</h5>
                          <p className="text-sm text-gray-600">Osmania Medical College (1991–97)</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-green-700">M.S. (ENT)</h5>
                          <p className="text-sm text-gray-600">Kakatiya Medical College, Warangal</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-green-700">MRSH</h5>
                          <p className="text-sm text-gray-600">Member, Royal Society for Public Health</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Areas of Interest */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Areas of Interest</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Advanced Endoscopic Sinus Surgery',
                        'Microscopic Ear Surgery',
                        'Vertigo Management',
                        'Allergy Testing & Immunotherapy',
                      ].map((area, index) => (
                        <span
                          key={index}
                          className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Available Services */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Available Services</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3 text-green-700">Surgical Services</h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Microdebrider & Coblator-assisted Adenoidectomy, Tonsillectomy, Turbinectomy</li>
                          <li>• Correction of Deviated Nasal Septum (SMR, Septoplasty)</li>
                          <li>• Myringoplasty & Tympanoplasty</li>
                          <li>• Dacrocystorhinostomy</li>
                          <li>• Cortical & Radical Mastoidectomy</li>
                          <li>• Thyroidectomy</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3 text-green-700">Specialized Clinics</h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Vertigo Diagnostics & Rehabilitation</li>
                          <li>• Allergy Testing (Patch & Prick Test)</li>
                          <li>• Immunotherapy Services</li>
                          <li>• Medical Management of Common ENT Diseases</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Advanced Instruments */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Advanced ENT Instruments</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { name: 'Zeiss Microscope', img: '/images/zeiss-microscope.jpg' },
                        { name: 'Carl Storz Surgical System', img: '/images/storz-system.jpg' },
                        { name: 'Microdebrider', img: '/images/microdebrider.jpg' },
                        { name: 'Coblator', img: '/images/coblator.jpg' },
                      ].map((item, idx) => (
                        <div key={idx} className="text-center">
                          {/* <div className="w-24 h-24 mx-auto mb-2 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                            <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                          </div> */}
                          <p className="text-sm text-gray-700 font-medium">{item.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leading Specialist</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dr. A. Aruna Kumari - A pioneer in reproductive medicine and women's health
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-green-400 to-green-400 p-8 text-white">
                  <div className="text-center">
                    <div className="w-40 h-40 bg-white rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                      <img
                        src="/images/doctor-aruna.jpeg"
                        alt="Dr. A. Aruna Kumari Araveeti"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Dr. A. Aruna Kumari Araveeti</h3>
                    <p className="text-white-200 mb-4">Senior Consultant</p>
                    <p className="text-white-200">Obstetrics & Gynaecology</p>
                    <p className="text-white-200">Reproductive Medicine</p>
                  </div>
                </div>

                <div className="md:w-2/3 p-8">
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Professional Journey</h4>
                    <div className="space-y-3 text-gray-600">
                      <p>• Working as Senior Consultant in Obstetrics and Gynaecology since 2004 at Neravati Hospital, Gandhi Chowk, Nandyal</p>
                      <p>• Started Department of Reproductive Medicine at Neravati Hospital in 2015</p>
                      <p>• Providing fertility treatments for the last 10+ years</p>
                      <p>• Successfully helped around 10,000 families fulfill their dream of motherhood</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Educational Qualifications</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-green-700">MBBS (1993-99)</h5>
                          <p className="text-sm text-gray-600">Guntur Medical College, Guntur</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-green-700">DGO (1999-2001)</h5>
                          <p className="text-sm text-gray-600">Diploma in Obstetrics & Gynaecology</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-green-700">ICOG Fellowship</h5>
                          <p className="text-sm text-gray-600">Reproductive Medicine (AIR-1 Topper)</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-green-700">Masters in Reproductive Medicine</h5>
                          <p className="text-sm text-gray-600">Homerton University Hospital (UK), 2019</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-green-700">Advanced Diploma in ART</h5>
                          <p className="text-sm text-gray-600">University of Schleswig Holstein-Kiel (Germany), 2022</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h5 className="font-semibold text-green-700">Multiple Fellowships</h5>
                          <ul className="list-disc list-inside text-sm text-gray-600">
                            <li>Cosmetic Gynaecology</li>
                            <li>Embryology</li>
                            <li>IMA-AMS</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Areas of Interest</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Fertility Treatment', 'Operative Laparoscopy', 'Operative Hysteroscopy', 'Adolescent Health Education'].map((area, index) => (
                        <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Available Services</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3 text-green-700">Fertility Treatments</h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• IUI (Intrauterine Insemination)</li>
                          <li>• IVF (In Vitro Fertilization)</li>
                          <li>• ICSI (Intracytoplasmic Sperm Injection)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3 text-green-700">Advanced Procedures</h5>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Operative Laparoscopy</li>
                          <li>• Operative Hysteroscopy</li>
                          <li>• Cosmetic Gynaecology</li>
                          <li>• Obstetric & Gynaecology Services</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-green-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from our patients about their experience at Neravati Multispeciality Hospital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-white text-green-700 px-8 py-3 rounded-lg font-semibold shadow-lg">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span>4.9/5 Average Rating from 1000+ Patients</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Quality Healthcare?</h2>
          <p className="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
            Book an appointment with our expert medical team and take the first step towards better health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Appointment
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 
