import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Baby, 
  Users, 
  Award, 
  Clock, 
  Shield, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  Star,
  Calendar,
  User,
  Microscope,
  TestTube,
  Stethoscope
} from 'lucide-react';
import { contactInfo } from '../config/contact';

const IVF = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const treatments = [
    {
      title: "In Vitro Fertilization (IVF)",
      description: "The most advanced fertility treatment where eggs are fertilized outside the body",
      duration: "2-3 weeks",
      successRate: "65-75%",
      icon: TestTube
    },
    {
      title: "Intrauterine Insemination (IUI)",
      description: "Placing sperm directly into the uterus during ovulation",
      duration: "1-2 weeks",
      successRate: "15-20%",
      icon: Heart
    },
    {
      title: "Intracytoplasmic Sperm Injection (ICSI)",
      description: "Direct injection of a single sperm into an egg",
      duration: "2-3 weeks",
      successRate: "70-80%",
      icon: Microscope
    },
    {
      title: "Frozen Embryo Transfer (FET)",
      description: "Transfer of previously frozen embryos",
      duration: "1-2 weeks",
      successRate: "60-70%",
      icon: Baby
    }
  ];

 const successStories = [
    {
      name: "Priya & Rajesh",
      age: "32 & 35",
      treatment: "IVF",
      story: "After 5 years of trying, we finally have our beautiful twins through IVF treatment.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Anjali & Suresh",
      age: "28 & 30",
      treatment: "ICSI",
      story: "The ICSI treatment was successful on our first attempt. We're grateful to the team.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Meera & Vikram",
      age: "35 & 38",
      treatment: "FET",
      story: "Frozen embryo transfer gave us our miracle baby after multiple failed attempts.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ]; 

  const facilities = [
    {
      title: "State-of-the-Art Laboratory",
      description: "Advanced equipment for precise embryo culture and monitoring",
      icon: Microscope
    },
    {
      title: "Experienced Team",
      description: "Specialized fertility experts with years of experience",
      icon: Users
    },
    {
      title: "24/7 Monitoring",
      description: "Round-the-clock care and monitoring during treatment",
      icon: Clock
    },
    {
      title: "High Success Rates",
      description: "Proven track record with excellent pregnancy rates",
      icon: Award
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Comprehensive fertility assessment and treatment planning",
      duration: "1-2 hours"
    },
    {
      step: 2,
      title: "Ovarian Stimulation",
      description: "Medication to stimulate multiple egg production",
      duration: "8-12 days"
    },
    {
      step: 3,
      title: "Egg Retrieval",
      description: "Minimal invasive procedure to collect eggs",
      duration: "30-45 minutes"
    },
    {
      step: 4,
      title: "Fertilization",
      description: "Eggs and sperm are combined in the laboratory",
      duration: "1 day"
    },
    {
      step: 5,
      title: "Embryo Culture",
      description: "Embryos are cultured for 3-5 days",
      duration: "3-5 days"
    },
    {
      step: 6,
      title: "Embryo Transfer",
      description: "Best quality embryos are transferred to the uterus",
      duration: "15-30 minutes"
    }
  ];







  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-950 text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Advanced IVF & Fertility Care
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8">
              Expert fertility treatments with state-of-the-art technology and compassionate care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointment"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Book Consultation
              </Link>
              <a
                href="#treatments"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                View Treatments
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
              <div className="text-gray-600">Successful Pregnancies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">75%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">1000+</div>
              <div className="text-gray-600">Happy Families</div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Fertility Treatments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of fertility treatments tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatments.map((treatment, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <treatment.icon className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{treatment.title}</h3>
                <p className="text-gray-600 mb-4">{treatment.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-semibold">{treatment.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Success Rate:</span>
                    <span className="font-semibold text-green-600">{treatment.successRate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">IVF Treatment Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our step-by-step process ensures the best possible outcome for your fertility journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 mb-3">{step.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our IVF Center?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art facilities and experienced professionals for your fertility journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <facility.icon className="w-10 h-10 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IVF Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">IVF Center Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at our advanced IVF laboratory, state-of-the-art equipment, and the journey of life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* IVF Equipment Images */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/equipment/equipment3.jpeg"
                  alt="IVF Workstation Elite Series"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">IVF Workstation Elite Series</h3>
                <p className="text-gray-600 mb-3">Advanced IVF workstation by HYTEK SCIENTIFICS INC for precise fertility treatments</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  IVF Equipment
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/equipment/equipment4.jpeg"
                  alt="Laminar Flow Hood"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Laminar Flow Hood</h3>
                <p className="text-gray-600 mb-3">Specialized laboratory workstation with laminar flow for sterile IVF procedures</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Sterile Environment
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/equipment/equipment6.jpeg"
                  alt="Labotect Incubator C16"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Labotect Incubator C16</h3>
                <p className="text-gray-600 mb-3">Advanced incubator maintaining optimal conditions for embryo development</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Embryo Culture
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/equipment/equipment1.jpeg"
                  alt="Advanced Medical Microscope"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Medical Microscope</h3>
                <p className="text-gray-600 mb-3">High-precision microscope for detailed embryo analysis and selection</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Embryo Analysis
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/equipment/equipment2.jpeg"
                  alt="Laboratory Workstation"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">IVF Laboratory</h3>
                <p className="text-gray-600 mb-3">Spacious laboratory with multiple workstations for comprehensive IVF procedures</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Laboratory
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/equipment/equipment5.jpeg"
                  alt="Gynecology Examination Room"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Gynecology Examination Room</h3>
                <p className="text-gray-600 mb-3">Specialized examination room with modern equipment for women's fertility assessment</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Consultation
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/equipment/equipment7.jpeg"
                  alt="Embryo Transfer Room"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Embryo Transfer Room</h3>
                <p className="text-gray-600 mb-3">Specialized room equipped for safe and precise embryo transfer procedures</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Embryo Transfer
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/equipment/equipment8.jpeg"
                  alt="Ultrasound Machine"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Ultrasound Machine</h3>
                <p className="text-gray-600 mb-3">High-resolution ultrasound for monitoring follicle development and embryo transfer</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Monitoring
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/equipment/equipment9.jpeg"
                  alt="Cryopreservation Unit"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cryopreservation Unit</h3>
                <p className="text-gray-600 mb-3">Advanced freezing technology for preserving eggs, sperm, and embryos</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Cryopreservation
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/ivf/ivf1.jpeg"
                  alt="Sperm Analysis Equipment"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sperm Analysis Equipment</h3>
                <p className="text-gray-600 mb-3">Computerized sperm analysis system for comprehensive male fertility assessment</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Male Fertility
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/ivf/ivf2.jpeg"
                  alt="IVF Laboratory Control Room"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Laboratory Control Room</h3>
                <p className="text-gray-600 mb-3">Centralized monitoring and control system for all IVF laboratory operations</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Control Center
                </span>
              </div>
            </div>

            {/* <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/ivf/ivf3.jpeg"
                  alt="Patient Recovery Room"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Patient Recovery Room</h3>
                <p className="text-gray-600 mb-3">Comfortable recovery area for patients after egg retrieval and embryo transfer</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Patient Care
                </span>
              </div>
            </div> */}

            {/* <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/ivf/ivf4.jpeg"
                  alt="Patient Recovery Room"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Patient Recovery Room</h3>
                <p className="text-gray-600 mb-3">Comfortable recovery area for patients after egg retrieval and embryo transfer</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Patient Care
                </span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/ivf/ivf5.jpeg"
                  alt="Patient Recovery Room"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Patient Recovery Room</h3>
                <p className="text-gray-600 mb-3">Comfortable recovery area for patients after egg retrieval and embryo transfer</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Patient Care
                </span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/ivf/ivf6.jpeg"
                  alt="Patient Recovery Room"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Patient Recovery Room</h3>
                <p className="text-gray-600 mb-3">Comfortable recovery area for patients after egg retrieval and embryo transfer</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Patient Care
                </span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src="/images/ivf/ivf7.jpeg"
                  alt="Patient Recovery Room"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Patient Recovery Room</h3>
                <p className="text-gray-600 mb-3">Comfortable recovery area for patients after egg retrieval and embryo transfer</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Patient Care
                </span>
              </div>
            </div> */}
         
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Our IVF center is equipped with the latest technology and staffed by experienced professionals
            </p>
            <Link
              to="/gallery"
              className="inline-flex items-center px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              View Full Gallery
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from couples who achieved their dream of parenthood
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {/* <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  /> */}
                  <div>
                    <h3 className="font-bold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-gray-500">Age: {story.age}</p>
                    <p className="text-sm text-blue-900 font-semibold">{story.treatment}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{story.story}</p>
                <div className="flex items-center">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Fertility Journey?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Schedule a consultation with our fertility experts and take the first step towards parenthood
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Book Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href={`tel:${contactInfo.phoneNumbers[0]}`}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IVF; 






  // {
  //   id: 14,
  //   src: "/images/equipment/equipment1.jpeg",
  //   alt: "Advanced Medical Microscope",
  //   category: "equipment",
  //   title: "Advanced Medical Microscope",
  //   description: "High-precision microscope setup for detailed medical analysis and research"
  // },
  // {
  //   id: 15,
  //   src: "/images/equipment/equipment2.jpeg",
  //   alt: "Laboratory Workstation",
  //   category: "equipment",
  //   title: "Laboratory Workstation",
  //   description: "Spacious laboratory with multiple workstations for comprehensive diagnostics"
  // },
  // {
  //   id: 16,
  //   src: "/images/equipment/equipment3.jpeg",
  //   alt: "IVF Workstation Elite Series",
  //   category: "equipment",
  //   title: "IVF Workstation Elite Series",
  //   description: "Advanced IVF workstation by HYTEK SCIENTIFICS INC for fertility treatments"
  // },
  // {
  //   id: 17,
  //   src: "/images/equipment/equipment4.jpeg",
  //   alt: "Laminar Flow Hood",
  //   category: "equipment",
  //   title: "Laminar Flow Hood",
  //   description: "Specialized laboratory workstation with laminar flow for sterile procedures"
  // },  
  // {
  //   id: 18,
  //   src: "/images/equipment/equipment5.jpeg",
  //   alt: "Gynecology Examination Room",
  //   category: "equipment",
  //   title: "Gynecology Examination Room",
  //   description: "Specialized examination room with modern equipment for women's health"
  // },
  // {
  //   id: 19,
  //   src: "/images/equipment/equipment6.jpeg",
  //   alt: "Labotect Incubator C16",
  //   category: "equipment",
  //   title: "Labotect Incubator C16",
  //   description: "Advanced incubator maintaining optimal conditions for medical procedures"
  // },
  // {
  //   id: 20,
  //   src: "/images/equipment/equipment7.jpeg",
  //   alt: "Medical Equipment Setup",
  //   category: "equipment",
  //   title: "Medical Equipment Setup",
  //   description: "Professional medical equipment including HYTEK SCIENTIFICS and Labotect Aspirator"
  // },
  // {
  //   id: 21,
  //   src: "/images/equipment/equipment8.jpeg",
  //   alt: "Operation Theatre Door",
  //   category: "equipment",
  //   title: "Operation Theatre",
  //   description: "Sterile operation theatre entrance with controlled access for surgical procedures"
  // },
  // {
  //   id: 22,
  //   src: "/images/equipment/equipment9.jpeg",
  //   alt: "Laboratory Freezer",
  //   category: "equipment",
  //   title: "Laboratory Freezer",
  //   description: "Professional laboratory freezer with digital temperature control system"
  // },
