import { useState, useEffect } from 'react';
import DepartmentCard from '../components/DepartmentCard';
import { departments } from '../data/doctors';
import { Search } from 'lucide-react';

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
            const offset = 140; // Account for fixed navbar and top bar
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            });
          }, 500);
        }
      }
    };

    // Handle initial load
    handleScrollToSection();

    // Handle hash changes
    const handleHashChange = () => {
      handleScrollToSection();
    };

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
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Departments</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
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
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20">
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
      </section>

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
            {departments.map((department) => (
              <div key={department.id} id={department.name.toLowerCase().replace(/\s+/g, '-')} className="bg-white rounded-xl shadow-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">{department.name}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {department.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
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
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-gray-700 font-medium">{service}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need to Schedule an Appointment?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
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

export default Departments; 