import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storage } from '../firebaseConfig'; // Make sure this path is correct
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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

  const validateMessage = (message) => {
    const digitCount = (message.match(/\d/g) || []).length;
    if (digitCount > 10) {
      return 'Message cannot contain more than 10 numeric characters.';
    }

    const repeatedPattern = /(.)\1{2,}/;
    if (repeatedPattern.test(message)) {
      return 'Message cannot contain sequences of more than 2 repeated characters or numbers.';
    }

    return null;
  };

  const uploadDocument = async (file) => {
    const fileRef = ref(storage, `documents/${file.name}`);
    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);
    return url;
  };

  const handleSubmit = async (e) => {
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

    const messageError = validateMessage(formData.message.trim());
    if (messageError) {
      toast.error(messageError);
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);

    let documentUrl = '';
    if (formData.document) {
      try {
        documentUrl = await uploadDocument(formData.document);
      } catch (error) {
        console.error('Error uploading document:', error);
        toast.error('Failed to upload document. Please try again.');
        setIsSubmitting(false);
        return;
      }
    }

    const serviceID = 'service_13ygtrs';
    const templateID = 'template_n21fa3e';
    const publicKey = 'L2_7PSPdo8vlmJqDm';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: `${formData.countryCode} ${formData.phone}`,
      appointment_date: formData.appointmentDate,
      appointment_time: formData.appointmentTime,
      message: formData.message,
      document_url: documentUrl, // documentUrl will be an empty string if no document is uploaded
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
        Welcome to MarpsAfrica! We're excited to assist you. Please fill out the form below to schedule your appointment. Fields marked with 
        <span className="text-red-500"> *</span> are required, but we aim to keep it quick and easy for you.
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
          <div className="flex flex-col sm:flex-row sm:space-x-2">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleCountryCodeChange}
              disabled={isSubmitting}
              className="p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-400 hover:shadow-lg sm:w-1/3"
              style={{ minWidth: '120px' }}
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
              className="w-full mt-2 sm:mt-0 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-400 hover:shadow-lg"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

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
            rows="4"
            placeholder="Enter your message"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Document (PDF only) (Optional)
          </label>
          <input
            type="file"
            name="document"
            accept=".pdf"
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-400 hover:shadow-lg"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold transition duration-300 ease-in-out hover:bg-blue-500 disabled:bg-blue-400"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Appointment'}
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default BookAppointment;
