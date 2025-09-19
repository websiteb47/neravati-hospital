import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { doctors, departments } from '../data/doctors';

const AppointmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const selectedDepartment = watch('department');

  const filteredDoctors = selectedDepartment
    ? doctors.filter(doctor => doctor.department === selectedDepartment)
    : doctors;

  // Function to send appointment data to WhatsApp
  const sendToWhatsApp = (data) => {
    // Replace this with your actual WhatsApp number (with country code, no + or spaces)
    const whatsappNumber = '919494694195'; // Example: 919876543210 for India
    
    // Format date for better readability
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    };

    // Format time for better readability
    const formatTime = (timeString) => {
      const [hours, minutes] = timeString.split(':');
      const hour = parseInt(hours);
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
      return `${displayHour}:${minutes} ${ampm}`;
    };

    // Get doctor name if selected
    const getDoctorName = (doctorId) => {
      if (!doctorId) return 'Any Available Doctor';
      const doctor = filteredDoctors.find(d => d.id === doctorId);
      return doctor ? `${doctor.name} (${doctor.specialty})` : 'Any Available Doctor';
    };

    // Format the appointment data for WhatsApp message
    const message = `🏥 *NERAVATI HOSPITAL - APPOINTMENT REQUEST* 🏥

📋 *PATIENT INFORMATION*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${data.name}
📱 *Phone:* ${data.phone}
📧 *Email:* ${data.email}

🏥 *APPOINTMENT DETAILS*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏢 *Department:* ${data.department}
👨‍⚕️ *Preferred Doctor:* ${getDoctorName(data.doctor)}
📅 *Preferred Date:* ${formatDate(data.date)}
⏰ *Preferred Time:* ${formatTime(data.time)}

📝 *ADDITIONAL NOTES*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${data.notes ? data.notes : 'No additional notes provided'}


*This appointment request was submitted through our website.*`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp with a small delay for better UX
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 500);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Validate required fields
      if (!data.name || !data.phone || !data.email || !data.department || !data.date || !data.time) {
        throw new Error('Please fill in all required fields');
      }

      // Validate phone number format
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(data.phone)) {
        throw new Error('Please enter a valid phone number');
      }

      // Validate email format
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(data.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Validate date (not in the past)
      const selectedDate = new Date(data.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        throw new Error('Please select a future date');
      }

      // Send to WhatsApp
      sendToWhatsApp(data);
      
      console.log('Appointment data sent to WhatsApp:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error sending to WhatsApp:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Book an Appointment</h2>
          <p className="text-gray-600">Schedule your visit with our expert doctors</p>
        </div>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-green-800 font-medium">Appointment Request Ready!</p>
              <p className="text-green-700 text-sm">WhatsApp will open automatically. Please review the message and click 'Send' to complete your booking. We'll confirm your appointment within 2 hours.</p>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <div>
              <p className="text-red-800 font-medium">Unable to Process Request</p>
              <p className="text-red-700 text-sm">Please check your information and try again, or call us directly at 97041 30234 for immediate assistance.</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                {...register('name', { required: 'Full name is required' })}
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-900 focus:border-transparent ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4 inline mr-2" />
                Phone Number *
              </label>
              <input
                type="tel"
                {...register('phone', { 
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[\+]?[1-9][\d]{0,15}$/,
                    message: 'Please enter a valid phone number'
                  }
                })}
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-900 focus:border-transparent ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email Address *
            </label>
            <input
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address'
                }
              })}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-900 focus:border-transparent ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Appointment Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department *
              </label>
              <select
                {...register('department', { required: 'Please select a department' })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-900 focus:border-transparent ${
                  errors.department ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.name}>
                    {dept.name}
                  </option>
                ))}
              </select>
              {errors.department && (
                <p className="mt-1 text-sm text-red-600">{errors.department.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Doctor
              </label>
              <select
                {...register('doctor')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-900 focus:border-transparent"
              >
                <option value="">Any Available Doctor</option>
                {filteredDoctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name} - {doctor.specialty}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Preferred Date *
              </label>
              <input
                type="date"
                {...register('date', { required: 'Please select a date' })}
                min={new Date().toISOString().split('T')[0]}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-900 focus:border-transparent ${
                  errors.date ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.date && (
                <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Clock className="w-4 h-4 inline mr-2" />
                Preferred Time *
              </label>
              <select
                {...register('time', { required: 'Please select a time' })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-900 focus:border-transparent ${
                  errors.time ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select Time</option>
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
              </select>
              {errors.time && (
                <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MessageSquare className="w-4 h-4 inline mr-2" />
              Additional Notes
            </label>
            <textarea
              {...register('notes')}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-900 focus:border-transparent"
              placeholder="Any specific concerns or information you'd like to share..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-900 hover:bg-green-950 disabled:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Preparing WhatsApp Message...</span>
              </>
            ) : (
              <span>Send Appointment Request</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm; 
