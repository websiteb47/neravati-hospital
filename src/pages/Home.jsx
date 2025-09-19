import Hero from '../components/Hero';
import DepartmentCard from '../components/DepartmentCard';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { departments, services } from '../data/doctors';
import { testimonials } from '../data/testimonials';
import { Heart, Shield, Users, Clock, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, respect, and understanding, ensuring personalized care for all."
    },
    {
      icon: Shield,
      title: "Expert Doctors",
      description: "Our team of experienced medical professionals provides the highest quality healthcare services."
    },
    {
      icon: Users,
      title: "Modern Facilities",
      description: "State-of-the-art medical equipment and facilities to ensure accurate diagnosis and treatment."
    },
    {
      icon: Clock,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency care services to handle critical medical situations anytime."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Fully accredited medical center meeting the highest standards of healthcare excellence."
    },
    {
      icon: Star,
      title: "Patient Satisfaction",
      description: "We are committed to providing exceptional healthcare services with compassion, innovation, and excellence. Your health and well-being are our top priorities."
    }
  ];

  return (
    <div>
      <Hero />

      {/* Features Section - Commented Out */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Neravati?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing exceptional healthcare services with compassion, 
              innovation, and excellence. Your health and well-being are our top priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-200 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine check-ups to specialized treatments, we offer a wide range 
              of medical services to meet your healthcare needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <span>View All Services</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Departments Section */}
     {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Departments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive medical care across all major specialties with expert doctors 
              and state-of-the-art facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {departments.slice(0, 6).map((department) => (
              <DepartmentCard key={department.id} department={department} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/departments"
              className="inline-flex items-center space-x-2 bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <span>View All Departments</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-green-100 to-green-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Patient Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our satisfied patients about their experience at Neravati Multispeciality Hospital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial) => (
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
      <section className="py-20 bg-green-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl  text-white-200 mb-8 max-w-2xl mx-auto">
            Book your appointment today and take the first step towards better health. 
            Our team is here to help you on your wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Book Appointment
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 
