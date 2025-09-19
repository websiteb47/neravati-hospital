import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start space-x-4 mb-4">
        <div className="flex-shrink-0">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-green-200"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            {renderStars(testimonial.rating)}
          </div>
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.location}</p>
        </div>
        <Quote className="w-6 h-6 text-green-300 flex-shrink-0" />
      </div>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        "{testimonial.testimonial}"
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-sm text-green-900 font-medium">
          {testimonial.treatment}
        </span>
        <span className="text-xs text-gray-500">
          {testimonial.date}
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard; 
