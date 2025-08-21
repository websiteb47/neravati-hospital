import { Stethoscope, User, Scan, Activity, Scissors, ArrowRight, Ear, Baby, Bone, Ambulance, Thermometer } from 'lucide-react';

const ServiceCard = ({ service }) => {
  const getIcon = (iconName) => {
    const icons = {
      stethoscope: Stethoscope,
      'user-md': User,
      scan: Scan,
      activity: Activity,
      scissors: Scissors,
      ear: Ear,
      baby: Baby,
      bone: Bone,
      ambulance: Ambulance,
      
      thermometer: Thermometer,
    };
    return icons[iconName] || Stethoscope;
  };

  const IconComponent = getIcon(service.icon);

  const getServiceImage = (serviceName) => {
    const serviceImages = {
      'General Physician Consultation': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'ENT Specialist Consultation': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'Gynecology & IVF Treatment': 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'Orthopedic Consultation': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'Emergency Care': 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'Laboratory Tests': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'Diagnostic Imaging': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'Surgery': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'Physiotherapy': 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'Preventive Care': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    };
    return serviceImages[serviceName] || 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group flex flex-col h-full">
      {/* Service Image */}
      <div className="w-full h-48 bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300 flex-shrink-0 relative overflow-hidden">
        <img
          src={getServiceImage(service.name)}
          alt={service.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
            <IconComponent className="w-6 h-6 text-white" />
          </div>
        </div>
        {/* Fallback for when image fails to load */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center" style={{ display: 'none' }}>
          <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
            <IconComponent className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 leading-tight">{service.name}</h3>
        <p className="text-gray-600 leading-relaxed flex-1">{service.description}</p>

        {/* Price and Duration */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <div className="space-y-1">
            {/* <p className="text-lg font-bold text-blue-600">{service.price}</p> */}
            <p className="text-sm text-gray-500">Duration: {service.duration}</p>
          </div>
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-200">
            <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-blue-900 transition-colors duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 