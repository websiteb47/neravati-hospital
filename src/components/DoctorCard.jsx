import { Star, Clock, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      {/* Doctor Image */}
      <div className="relative h-64 bg-gradient-to-br from-blue-50 to-green-50 flex-shrink-0 overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-contain"
          loading="lazy"
        />
        <div className="absolute bottom-4 right-4 bg-white rounded-full px-3 py-1 shadow-md">
          <span className="text-sm font-semibold text-blue-600">{doctor.specialty}</span>
        </div>
      </div>

      {/* Doctor Info */}
      <div className="p-6 space-y-4 flex-1 flex flex-col">
        {/* Name and Rating */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">{doctor.name}</h3>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {renderStars(doctor.rating)}
            </div>
            <span className="text-sm text-gray-600">({doctor.rating})</span>
          </div>
        </div>

        {/* Specialty and Education */}
        <div className="space-y-2">
          <p className="text-blue-600 font-medium">{doctor.specialty}</p>
          <p className="text-sm text-gray-600">{doctor.education}</p>
        </div>

        {/* Stats */}
        <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{doctor.experience}</span>
          </div>
        <div className="grid grid-cols-2 gap-4 py-3 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{doctor.patients}+ patients</span>
          </div>
        </div>

        {/* Availability */}
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>{doctor.availability}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3 flex-1">{doctor.description}</p>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-4 mt-auto">
          <Link
            to={`/appointment?doctor=${doctor.id}`}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200"
          >
            Book Appointment
          </Link>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard; 