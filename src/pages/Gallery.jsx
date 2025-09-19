import { useState } from 'react';
import { Search, Filter, Image as ImageIcon, Building, Users, Heart, Stethoscope, Calendar } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Images', icon: ImageIcon },
    { id: 'opening', name: 'Hospital Opening', icon: Calendar },
    { id: 'facility', name: 'Facilities', icon: Building },
    { id: 'staff', name: 'Medical Staff', icon: Users },
    // { id: 'equipment', name: 'Medical Equipment', icon: Stethoscope },
    { id: 'patient-care', name: 'Patient Care', icon: Heart },
  ];

  // Gallery images - you can replace these with your own images
  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery/opening-ceremony-1.jpeg",
      alt: "Hospital Opening Ceremony",
      category: "opening",
      title: "Hospital Opening Ceremony",
      description: "Grand opening ceremony of Neravati Multispeciality Hospital with dignitaries and staff"
    },
    {
      id: 2,
      src: "/images/gallery/opening-ceremony-2.jpeg",
      alt: "Ribbon Cutting Ceremony",
      category: "opening",
      title: "Ribbon Cutting Ceremony",
      description: "Official ribbon cutting ceremony marking the inauguration of our hospital"
    },
    {
      id: 3,
      src: "/images/gallery/opening-ceremony-3.jpeg",
      alt: "Dignitaries at Opening",
      category: "opening",
      title: "Dignitaries at Opening",
      description: "Honorable guests and dignitaries attending the hospital opening ceremony"
    },
    {
      id: 4,
      src: "/images/gallery/opening-ceremony-4.jpeg",
      alt: "Dignitaries at Opening",
      category: "opening",
      title: "Dignitaries at Opening",
      description: "Honorable guests and dignitaries attending the hospital opening ceremony"
    },
    {
      id: 5,
      src: "/images/gallery/opening-ceremony-5.jpeg",
      alt: "Dignitaries at Opening",
      category: "opening",
      title: "Dignitaries at Opening",
      description: "Honorable guests and dignitaries attending the hospital opening ceremony"
    },
    {
      id: 6,
      src: "/images/gallery/opening-ceremony-6.jpeg",
      alt: "Dignitaries at Opening",
      category: "opening",
      title: "Dignitaries at Opening",
      description: "Honorable guests and dignitaries attending the hospital opening ceremony"
    },
    {
      id: 7,
      src: "/images/gallery/opening-ceremony-7.jpeg",
      alt: "Dignitaries at Opening",
      category: "opening",
      title: "Dignitaries at Opening",
      description: "Honorable guests and dignitaries attending the hospital opening ceremony"
    },
    {
      id: 8,
      src: "/images/gallery/hospotalbuilding.jpeg",
      alt: "Hospital Building Exterior",
      category: "facility",
      title: "Hospital Building",
      description: "Modern hospital building with state-of-the-art facilities"
    },
    {
      id: 9,
      src: "/images/gallery/reception.jpeg",
      alt: "Reception Area",
      category: "facility",
      title: "Reception Area",
      description: "Welcoming reception area with professional staff"
    },
    {
      id: 10,
      src: "/images/gallery/patientarea.jpeg",
      alt: "Waiting Area",
      category: "facility",
      title: "Patient Waiting Area",
      description: "Comfortable waiting area for patients and visitors"
    },
    {
      id: 11,
      src: "/images/gallery/patientarea2.jpeg",
      alt: "Waiting Area",
      category: "facility",
      title: "Patient Waiting Area",
      description: "Comfortable waiting area for patients and visitors"
    },
    {
      id: 12,
      src: "/images/gallery/patientarea3.jpeg",
      alt: "Waiting Area",
      category: "facility",
      title: "Patient Waiting Area",
      description: "Comfortable waiting area for patients and visitors"
    },
    {
      id: 13,
      src: "/images/gallery/patientarea4.jpeg",
      alt: "Waiting Area",
      category: "facility",
      title: "Patient Waiting Area",
      description: "Comfortable waiting area for patients and visitors"
    },
    // Commented out cards without images
    // {
    //   id: 11,
    //   src: "/images/gallery/staff1.jpg",
    //   alt: "Medical Team",
    //   category: "staff",
    //   title: "Medical Team",
    //   description: "Our dedicated team of healthcare professionals"
    // },
    // {
    //   id: 12,
    //   src: "/images/gallery/staff2.jpg",
    //   alt: "Doctor Consultation",
    //   category: "staff",
    //   title: "Doctor Consultation",
    //   description: "Expert doctor providing patient consultation"
    // },
    // {
    //   id: 13,
    //   src: "/images/gallery/staff3.jpg",
    //   alt: "Nursing Staff",
    //   category: "staff",
    //   title: "Nursing Staff",
    //   description: "Caring nursing staff providing patient care"
    // },
    // {
    //   id: 23,
    //   src: "/images/gallery/patient1.jpg",
    //   alt: "Patient Care",
    //   category: "patient-care",
    //   title: "Patient Care",
    //   description: "Compassionate care for our patients"
    // },
    // {
    //   id: 24,
    //   src: "/images/gallery/patient2.jpg",
    //   alt: "Child Care",
    //   category: "patient-care",
    //   title: "Pediatric Care",
    //   description: "Specialized care for children"
    // },
    {
      id: 25,
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
      <section className="bg-gradient-to-r from-green-400 to-green-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Hospital Gallery</h1>
          <p className="text-xl text-white-200 max-w-3xl mx-auto">
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
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent"
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
                      ? 'bg-green-700 text-white'
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
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-green-200 text-green-700 rounded-full">
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
              <Building className="w-12 h-12 text-green-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Facilities</h3>
              <p className="text-gray-600">
                State-of-the-art medical facilities designed for patient comfort and optimal care delivery.
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-green-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Experienced medical professionals dedicated to providing compassionate and quality healthcare.
              </p>
            </div>
            <div className="text-center">
              <Stethoscope className="w-12 h-12 text-green-700 mx-auto mb-4" />
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
