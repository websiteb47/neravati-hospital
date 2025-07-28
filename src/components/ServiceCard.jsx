import { Stethoscope, User, Scan,  Activity, Scissors, ArrowRight } from 'lucide-react';

const ServiceCard = ({ service }) => {
  const getIcon = (iconName) => {
    const icons = {
      stethoscope: Stethoscope,
      'user-md': User,
      scan: Scan,
    
      activity: Activity,
      scissors: Scissors,
    };
    return icons[iconName] || Stethoscope;
  };

  const IconComponent = getIcon(service.icon);

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group">
      {/* Icon */}
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <IconComponent className="w-8 h-8 text-white" />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
        <p className="text-gray-600 leading-relaxed">{service.description}</p>

        {/* Price and Duration */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="space-y-1">
            {/* <p className="text-2xl font-bold text-blue-600">{service.price}</p> */}
            <p className="text-sm text-gray-500">Duration: {service.duration}</p>
          </div>
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-200">
            <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 