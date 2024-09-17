import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const countryCodes = [
  { code: '+1', name: 'United States' },
  { code: '+44', name: 'United Kingdom' },
  { code: '+91', name: 'India' },
  { code: '+61', name: 'Australia' },
  { code: '+49', name: 'Germany' },
  { code: '+33', name: 'France' },
  { code: '+39', name: 'Italy' },
  { code: '+34', name: 'Spain' },
  { code: '+27', name: 'South Africa' },
  { code: '+81', name: 'Japan' },
  { code: '+86', name: 'China' },
  { code: '+55', name: 'Brazil' },
  { code: '+7', name: 'Russia' },
  { code: '+52', name: 'Mexico' },
  { code: '+60', name: 'Malaysia' },
  { code: '+65', name: 'Singapore' },
  { code: '+82', name: 'South Korea' },
  { code: '+971', name: 'United Arab Emirates' },
  { code: '+98', name: 'Iran' },
  { code: '+20', name: 'Egypt' },
  { code: '+46', name: 'Sweden' },
  { code: '+47', name: 'Norway' },
  { code: '+32', name: 'Belgium' },
  { code: '+48', name: 'Poland' },
  { code: '+31', name: 'Netherlands' },
  { code: '+41', name: 'Switzerland' },
  { code: '+42', name: 'Czech Republic' },
  { code: '+371', name: 'Latvia' },
  { code: '+370', name: 'Lithuania' },
  { code: '+372', name: 'Estonia' },
  { code: '+254', name: 'Kenya' },
  // Add more country codes as needed
];

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+1', 
    appointmentDate: '',
    appointmentTime: '',
    message: '',
    document: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleCountryCodeChange = (e) => {
    setFormData({
      ...formData,
      countryCode: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const selectedDate = new Date(formData.appointmentDate);
    const [hours, minutes] = formData.appointmentTime.split(':').map(Number);

    if (selectedDate < currentDate.setHours(0, 0, 0, 0)) {
      toast.error('Appointment date cannot be in the past.');
      setIsSubmitting(false);
      return;
    }

    if (hours < 8 || hours >= 22) {
      toast.error('Appointment time must be between 8:00 AM and 10:00 PM.');
      setIsSubmitting(false);
      return;
    }

    if (!formData.message.trim()) {
      toast.error('Message cannot be empty.');
      setIsSubmitting(false);
      return;
    }

    if (formData.message.length < 10) {
      toast.error('Message must be at least 10 characters long.');
      setIsSubmitting(false);
      return;
    }

  
    const repeatedCharsPattern = /(.)\1{5,}/; 
    if (repeatedCharsPattern.test(formData.message)) {
      toast.error('Kindly type a valid message.');
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);

    const serviceID = 'service_nes84lu'; 
    const templateID = 'template_dx2mken';
    const publicKey = 'G47v0xkyrNEc7T0Su'; 
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: `${formData.countryCode} ${formData.phone}`,
      appointment_date: formData.appointmentDate,
      appointment_time: formData.appointmentTime,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        toast.success('Appointment booked successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          countryCode: '+1',
          appointmentDate: '',
          appointmentTime: '',
          message: '',
          document: null,
        });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('Failed to book appointment. Please try again.');
        setIsSubmitting(false);
      });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white my-8 rounded-lg shadow-lg transition-all duration-300 font-sans">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 font-poppins text-center md:text-left">
        Book an Appointment with MarpsAfrica
      </h2>
      <p className="text-gray-600 mb-8 text-center md:text-left">
        Please fill out the form below to schedule an appointment. Fields marked with 
        <span className="text-red-500"> *</span> are required.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-400 hover:shadow-lg"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-400 hover:shadow-lg"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col md:flex-row md:space-x-2">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleCountryCodeChange}
              disabled={isSubmitting}
              className="p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-400 hover:shadow-lg"
            >
              {countryCodes.map((code) => (
                <option key={code.code} value={code.code}>
                  {code.code} - {code.name}
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full mt-2 md:mt-0 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-400 hover:shadow-lg"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Appointment Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-400 hover:shadow-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Appointment Time <span className="text-red-500">*</span>
            </label>
            <input
              type="time"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-400 hover:shadow-lg"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Document (Optional)
          </label>
          <p className="text-xs text-gray-500 mb-2">
            You can upload any relevant document (e.g., project brief, proposal) if applicable.
          </p>
          <input
            type="file"
            name="document"
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-400 hover:shadow-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-400 hover:shadow-lg"
            placeholder="Leave a message"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg font-sans transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
        >
          {isSubmitting ? 'Booking...' : 'Book Appointment'}
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default BookAppointment;
