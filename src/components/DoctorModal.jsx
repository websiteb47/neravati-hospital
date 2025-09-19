import { X, Star, Clock, Users, MapPin, Award, GraduationCap, Phone, Mail } from 'lucide-react';

const DoctorModal = ({ doctor, isOpen, onClose }) => {
  if (!isOpen || !doctor) return null;

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative p-6 border-b border-gray-200">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
          <h2 className="text-2xl font-bold text-gray-900 pr-12">Doctor Profile</h2>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Image and Basic Info */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-green-50 to-green-50 rounded-xl p-6 text-center">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-48 h-48 object-cover object-center rounded-full mx-auto mb-4 shadow-lg"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                <p className="text-green-900 font-medium mb-3">{doctor.specialty}</p>
                
                {/* Rating */}
                <div className="flex items-center justify-center space-x-1 mb-3">
                  {renderStars(doctor.rating)}
                  <span className="text-sm text-gray-600 ml-2">({doctor.rating})</span>
                </div>

                {/* Quick Stats */}
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{doctor.patients}+ patients treated</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{doctor.availability}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Detailed Information */}
            <div className="lg:col-span-2 space-y-6">
              {/* Education & Qualifications */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-green-900" />
                  Education & Qualifications
                </h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 font-medium">{doctor.education}</p>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-green-900" />
                  Professional Experience
                </h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">{doctor.experience}</p>
                </div>
              </div>

              {/* Specializations */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Specializations</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-green-100 rounded-lg p-3">
                    <span className="text-green-900 font-medium">{doctor.specialty}</span>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <span className="text-green-700 font-medium">{doctor.department}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">About Doctor</h4>
                <p className="text-gray-700 leading-relaxed">{doctor.description}</p>
              </div>

              {/* Contact Information */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Phone className="w-5 h-5 text-green-900" />
                    <span className="text-gray-700">+91 97041 30234</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Mail className="w-5 h-5 text-green-900" />
                    <span className="text-gray-700">doctor@hospital.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                // Navigate to appointment page with doctor pre-selected
                window.location.href = `/appointment?doctor=${doctor.id}`;
              }}
              className="flex-1 bg-green-900 hover:bg-green-950 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
            >
              Book Appointment
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-6 rounded-lg font-medium transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorModal; 
