import { Stethoscope, User, Scan, Activity, Scissors, ArrowRight, Ear, Baby, Bone, Ambulance, Thermometer } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ServiceCard = ({ service }) => {
  const { currentLanguage } = useLanguage();
  
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
      'General Physician Consultation': '/images/services/general-physician.jpeg',
      'ENT Specialist Consultation': '/images/services/ent-consultation.jpeg',
      'Gynecology & IVF Treatment': '/images/services/gynecology-ivf.jpeg',
      'Orthopedic Consultation': '/images/services/orthopedic-consultation.jpeg',
      'Laparoscopic Surgery': '/images/services/laparoscopic-surgery.jpeg',
      'Emergency Care': '/images/services/emergency-care.jpeg',
      'Diagnostic Services': '/images/services/diagnostic-services.jpeg',
      'Fever & Infection Treatment': '/images/services/fever-infection.jpeg'
    };
    return serviceImages[serviceName] || '/images/services/default-service.jpg';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group flex flex-col h-full">
      {/* Service Image */}
      <div className="w-full h-48 rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300 flex-shrink-0 relative overflow-hidden">
        <img
          src={getServiceImage(service.name.en || service.name)}
          alt={service.name[currentLanguage] || service.name}
          className="w-full h-full object-cover object-center"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        {/* Fallback for when image fails to load */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-900 flex items-center justify-center" style={{ display: 'none' }}>
          <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
            <IconComponent className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 leading-tight">
          {service.name[currentLanguage] || service.name}
        </h3>
        <p className="text-gray-600 leading-relaxed flex-1">
          {service.description[currentLanguage] || service.description}
        </p>

        {/* Price and Duration */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <div className="space-y-1">
            {/* <p className="text-lg font-bold text-green-600">{service.price}</p> */}
          </div>
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors duration-200">
            <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-green-900 transition-colors duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 
