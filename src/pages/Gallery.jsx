import { useState } from 'react';
import { Search, Filter, Image as ImageIcon, Building, Users, Heart, Stethoscope } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Images', icon: ImageIcon },
    { id: 'facility', name: 'Facilities', icon: Building },
    { id: 'staff', name: 'Medical Staff', icon: Users },
    { id: 'equipment', name: 'Medical Equipment', icon: Stethoscope },
    { id: 'patient-care', name: 'Patient Care', icon: Heart },
  ];

  // Gallery images - you can replace these with your own images
  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery/facility1.jpeg",
      alt: "Hospital Building Exterior",
      category: "facility",
      title: "Hospital Building",
      description: "Modern hospital building with state-of-the-art facilities"
    },
    {
      id: 2,
      src: "/images/gallery/facility2.jpeg",
      alt: "Reception Area",
      category: "facility",
      title: "Reception Area",
      description: "Welcoming reception area with professional staff"
    },
    {
      id: 3,
      src: "/images/gallery/facility3.jpeg",
      alt: "Waiting Area",
      category: "facility",
      title: "Patient Waiting Area",
      description: "Comfortable waiting area for patients and visitors"
    },
    {
      id: 4,
      src: "/images/gallery/staff1.jpg",
      alt: "Medical Team",
      category: "staff",
      title: "Medical Team",
      description: "Our dedicated team of healthcare professionals"
    },
    {
      id: 5,
      src: "/images/gallery/staff2.jpg",
      alt: "Doctor Consultation",
      category: "staff",
      title: "Doctor Consultation",
      description: "Expert doctor providing patient consultation"
    },
    {
      id: 6,
      src: "/images/gallery/staff3.jpg",
      alt: "Nursing Staff",
      category: "staff",
      title: "Nursing Staff",
      description: "Caring nursing staff providing patient care"
    },
    {
      id: 7,
      src: "/images/equipment/equipment1.jpeg",
      alt: "Advanced Medical Microscope",
      category: "equipment",
      title: "Advanced Medical Microscope",
      description: "High-precision microscope setup for detailed medical analysis and research"
    },
    {
      id: 8,
      src: "/images/equipment/equipment2.jpeg",
      alt: "Laboratory Workstation",
      category: "equipment",
      title: "Laboratory Workstation",
      description: "Spacious laboratory with multiple workstations for comprehensive diagnostics"
    },
    {
      id: 9,
      src: "/images/equipment/equipment3.jpeg",
      alt: "IVF Workstation Elite Series",
      category: "equipment",
      title: "IVF Workstation Elite Series",
      description: "Advanced IVF workstation by HYTEK SCIENTIFICS INC for fertility treatments"
    },
    {
      id: 10,
      src: "/images/equipment/equipment4.jpeg",
      alt: "Laminar Flow Hood",
      category: "equipment",
      title: "Laminar Flow Hood",
      description: "Specialized laboratory workstation with laminar flow for sterile procedures"
    },  
    {
      id: 11,
      src: "/images/equipment/equipment5.jpeg",
      alt: "Gynecology Examination Room",
      category: "equipment",
      title: "Gynecology Examination Room",
      description: "Specialized examination room with modern equipment for women's health"
    },
    {
      id: 12,
      src: "/images/equipment/equipment6.jpeg",
      alt: "Labotect Incubator C16",
      category: "equipment",
      title: "Labotect Incubator C16",
      description: "Advanced incubator maintaining optimal conditions for medical procedures"
    },
    {
      id: 13,
      src: "/images/equipment/equipment7.jpeg",
      alt: "Medical Equipment Setup",
      category: "equipment",
      title: "Medical Equipment Setup",
      description: "Professional medical equipment including HYTEK SCIENTIFICS and Labotect Aspirator"
    },
    {
      id: 14,
      src: "/images/equipment/equipment8.jpeg",
      alt: "Operation Theatre Door",
      category: "equipment",
      title: "Operation Theatre",
      description: "Sterile operation theatre entrance with controlled access for surgical procedures"
    },
    {
      id: 15,
      src: "/images/equipment/equipment9.jpeg",
      alt: "Laboratory Freezer",
      category: "equipment",
      title: "Laboratory Freezer",
      description: "Professional laboratory freezer with digital temperature control system"
    },
    // {
    //   id: 16,
    //   src: "/images/equipment/equipment10.jpeg",
    //   alt: "Medical Equipment",
    //   category: "equipment",
    //   title: "Advanced Medical Equipment",
    //   description: "State-of-the-art medical equipment for comprehensive patient care"
    // },
    {
      id: 17,
      src: "/images/gallery/patient1.jpg",
      alt: "Patient Care",
      category: "patient-care",
      title: "Patient Care",
      description: "Compassionate care for our patients"
    },
    {
      id: 18,
      src: "/images/gallery/patient2.jpg",
      alt: "Child Care",
      category: "patient-care",
      title: "Pediatric Care",
      description: "Specialized care for children"
    },
    {
      id: 19,
      src: "/images/services/emergency-care.jpeg",
      alt: "Emergency Care",
      category: "patient-care",
      title: "Emergency Care",
      description: "24/7 emergency medical services"
    }
  ];

  // Filter images based on category and search term
  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Hospital Gallery</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Take a virtual tour of our state-of-the-art facilities, meet our medical team, 
            and see the advanced equipment that makes Neravati Multispeciality Hospital 
            a trusted healthcare destination.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-900 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredImages.length === 0 ? (
            <div className="text-center py-12">
              <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No images found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <div key={image.id} className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif' font-size='16' fill='%236b7280'%3E${image.title}%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-600">{image.description}</p>
                    <div className="mt-2">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-200 text-blue-900 rounded-full">
                        {categories.find(cat => cat.id === image.category)?.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Our Facilities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Neravati Multispeciality Hospital is equipped with modern medical facilities, 
              advanced technology, and a dedicated team of healthcare professionals committed 
              to providing the best possible care for our patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Building className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Facilities</h3>
              <p className="text-gray-600">
                State-of-the-art medical facilities designed for patient comfort and optimal care delivery.
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Experienced medical professionals dedicated to providing compassionate and quality healthcare.
              </p>
            </div>
            <div className="text-center">
              <Stethoscope className="w-12 h-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Equipment</h3>
              <p className="text-gray-600">
                Latest medical technology and equipment for accurate diagnosis and effective treatment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery; 