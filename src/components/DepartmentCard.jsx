import { Heart, Brain, Baby, Bone, Shield, Microscope, Ambulance, ArrowRight, Ear } from 'lucide-react';
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
      ear: Ear,
      ambulance: Ambulance,
    };
    return icons[iconName] || Heart;
  };

  const IconComponent = getIcon(department.icon);

  // Debug logging
  console.log('Department:', department.name, 'Image path:', department.image);

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full">
      {/* Header with Image */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white min-h-[120px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <img
            src={department.image}
            alt={department.name}
            className="w-full h-full object-cover"
            onLoad={() => console.log('Image loaded successfully:', department.name)}
            onError={(e) => {
              console.error('Image failed to load:', department.name, department.image);
              // Hide the image on error, fallback to gradient background
              e.target.style.display = 'none';
            }}
          />
        </div>
        
        {/* Content */}
        <div className="flex items-center space-x-4 w-full relative z-10">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <IconComponent className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold leading-tight">{department.name}</h3>
            <p className="text-blue-100 text-sm mt-1">{department.doctors} Doctors</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <p className="text-gray-600 leading-relaxed">{department.description}</p>

        {/* Services */}
        <div className="space-y-3 flex-1">
          <h4 className="font-semibold text-gray-900">Services Offered:</h4>
          <div className="grid grid-cols-2 gap-2">
            {department.services.map((service, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                <span className="text-sm text-gray-600">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action */}
        <div className="pt-4 border-t border-gray-100 mt-auto">
          <Link
            to={`/departments#${department.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 group-hover:bg-blue-700"
            onClick={() => {
              // Force scroll to section after navigation
              setTimeout(() => {
                const element = document.querySelector(`#${department.name.toLowerCase().replace(/\s+/g, '-')}`);
                if (element) {
                  const offset = 140;
                  const elementPosition = element.offsetTop - offset;
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  });
                }
              }, 100);
            }}
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DepartmentCard; 