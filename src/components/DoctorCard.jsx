import { Clock, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import DoctorModal from './DoctorModal';

const DoctorCard = ({ doctor }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
        {/* Doctor Image */}
        <div className="relative h-72 bg-gradient-to-br from-green-50 to-green-50 flex-shrink-0 overflow-hidden">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
          <div className="absolute bottom-4 right-4 bg-white rounded-full px-3 py-1 shadow-md">
            <span className="text-sm font-semibold text-green-600">{doctor.specialty}</span>
          </div>
        </div>

        {/* Doctor Info */}
        <div className="p-6 space-y-4 flex-1 flex flex-col">
          {/* Name */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-900 leading-tight">{doctor.name}</h3>
          </div>

          {/* Specialty and Education */}
          <div className="space-y-2">
            <p className="text-green-600 font-semibold text-lg">{doctor.specialty}</p>
            <p className="text-sm text-gray-600">{doctor.education}</p>
          </div>

          {/* Experience */}
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{doctor.experience}</span>
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
              className="flex-1 bg-green-900 hover:bg-green-950 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200"
            >
              Book Appointment
            </Link>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Doctor Modal */}
      <DoctorModal 
        doctor={doctor}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default DoctorCard; 
