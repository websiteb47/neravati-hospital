import { Link } from 'react-router-dom';
import { CheckCircle, Award, Users, Heart, Shield, Clock, Star } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';

const About = () => {
  const stats = [
    { number: '5+', label: 'Expert Doctors', icon: Users },
    { number: '10k+', label: 'Happy Patients', icon: Heart },
    { number: '15+', label: 'Years Experience', icon: Award },
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
      year: '2008',
      title: 'Foundation',
      description: 'Neravati Multispeciality Hospital was established with a vision to provide comprehensive healthcare services to the community.'
    },
    {
      year: '2012',
      title: 'Expansion',
      description: 'Added new departments and state-of-the-art medical equipment to serve more patients.'
    },
    {
      year: '2018',
      title: 'Recognition',
      description: 'Recognized as a leading healthcare provider with multiple awards for excellence.'
    },
    {
      year: '2024',
      title: 'Innovation',
      description: 'Continued commitment to innovation and patient-centered care with latest medical technologies.'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Neravati</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
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
                  <stat.icon className="w-12 h-12 text-blue-600" />
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
                  <value.icon className="w-12 h-12 text-blue-600" />
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
              A journey of excellence and commitment to healthcare
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-8 mb-12">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
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
            <div className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow-lg">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span>4.9/5 Average Rating from 1000+ Patients</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Quality Healthcare?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book an appointment with our expert medical team and take the first step towards better health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Appointment
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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