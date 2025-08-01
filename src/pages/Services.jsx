import ServiceCard from '../components/ServiceCard';
import { services } from '../data/doctors';
import { CheckCircle, Clock, Shield, Users } from 'lucide-react';

const Services = () => {
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

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive healthcare services designed to meet all your medical needs. 
            From routine check-ups to specialized treatments, we're here for you.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our range of medical services and find the care you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

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
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our services are organized into categories to help you find exactly what you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Primary Care */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-blue-600">PC</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Primary Care</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive health care for all ages, including routine check-ups, 
                preventive care, and treatment of common illnesses.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Annual physical examinations</li>
                <li>• Vaccinations and immunizations</li>
                <li>• Chronic disease management</li>
                <li>• Health screenings</li>
              </ul>
            </div>

            {/* Specialist Care */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-green-600">SC</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialist Care</h3>
              <p className="text-gray-600 mb-6">
                Expert consultation and treatment from specialists in various medical fields 
                for complex health conditions.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Cardiology consultations</li>
                <li>• Neurological evaluations</li>
                <li>• Orthopedic treatments</li>
                <li>• Dermatological care</li>
              </ul>
            </div>

            {/* Diagnostic Services */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-purple-600">DS</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Diagnostic Services</h3>
              <p className="text-gray-600 mb-6">
                Advanced imaging and laboratory services for accurate diagnosis 
                and treatment planning.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• MRI and CT scans</li>
                <li>• X-ray imaging</li>
                <li>• Blood work and testing</li>
                <li>• Ultrasound examinations</li>
              </ul>
            </div>

            {/* Emergency Care */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-red-600">EC</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Care</h3>
              <p className="text-gray-600 mb-6">
                24/7 emergency medical services for urgent health situations 
                requiring immediate attention.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Trauma care</li>
                <li>• Emergency surgery</li>
                <li>• Critical care</li>
                <li>• Urgent care</li>
              </ul>
            </div>

            {/* Rehabilitation */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-orange-600">RH</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rehabilitation</h3>
              <p className="text-gray-600 mb-6">
                Physical therapy and rehabilitation services to help patients 
                recover and regain function after injury or surgery.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Physical therapy</li>
                <li>• Occupational therapy</li>
                <li>• Sports rehabilitation</li>
                <li>• Post-surgery recovery</li>
              </ul>
            </div>

            {/* Preventive Care */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-teal-600">PC</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Preventive Care</h3>
              <p className="text-gray-600 mb-6">
                Proactive health services focused on preventing illness and 
                maintaining optimal health and wellness.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Health screenings</li>
                <li>• Wellness programs</li>
                <li>• Lifestyle counseling</li>
                <li>• Preventive vaccinations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in transparent pricing so you know exactly what to expect. 
              Contact us for detailed pricing information.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <div key={service.id} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div>
                    <p className="text-sm text-gray-600 mb-4">{service.duration}</p>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Insurance & Payment</h3>
                <p className="text-gray-600 mb-4">
                  We accept most major insurance plans and offer flexible payment options. 
                  Contact our billing department for specific coverage information.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Most insurance accepted</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Flexible payment plans</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Transparent pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our services or schedule an appointment 
            with one of our healthcare professionals.
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

export default Services; 