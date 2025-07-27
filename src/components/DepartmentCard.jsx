import { Heart, Brain, Baby, Bone, Shield, Microscope, Ambulance, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DepartmentCard = ({ department }) => {
  const getIcon = (iconName) => {
    const icons = {
      heart: Heart,
      brain: Brain,
      baby: Baby,
      bone: Bone,
      skin: Shield,
      microscope: Microscope,
    
      ambulance: Ambulance,
    };
    return icons[iconName] || Heart;
  };

  const IconComponent = getIcon(department.icon);

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <IconComponent className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold">{department.name}</h3>
            <p className="text-blue-100 text-sm">{department.doctors} Doctors</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <p className="text-gray-600 leading-relaxed">{department.description}</p>

        {/* Services */}
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-900">Services Offered:</h4>
          <div className="grid grid-cols-2 gap-2">
            {department.services.map((service, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm text-gray-600">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action */}
        <div className="pt-4 border-t border-gray-100">
          <Link
            to={`/departments#${department.name.toLowerCase()}`}
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform duration-200"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DepartmentCard; 