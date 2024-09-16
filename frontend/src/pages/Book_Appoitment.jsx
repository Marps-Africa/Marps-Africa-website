import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'service_13ygtrs'; // Replace with your EmailJS service ID
    const templateID = 'template_7u0zv5r'; // Replace with your EmailJS template ID
    const publicKey = 'L2_7PSPdo8vlmJqDm'; // Replace with your EmailJS public key

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
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
      <h2 className="text-2xl font-bold text-blue-700 mb-6 font-poppins">
        Book an Appointment with MarpsAfrica
      </h2>
      <p className="text-gray-600 mb-8">
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
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-400 hover:shadow-lg"
            placeholder="Enter your phone number"
          />
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
