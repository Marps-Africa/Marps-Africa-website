import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storage } from '../firebaseConfig'; // Ensure this path is correct
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Country code options
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

// Reusable components for inputs
const TextInput = ({ label, name, type = 'text', value, onChange, placeholder, required, disabled }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-400 hover:shadow-lg"
      placeholder={placeholder}
    />
  </div>
);

const Textarea = ({ label, name, value, onChange, placeholder, rows = 4, required, disabled }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-400 hover:shadow-lg"
      rows={rows}
      placeholder={placeholder}
    />
  </div>
);

const FileUpload = ({ label, name, onChange, accept, disabled }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <input
      type="file"
      name={name}
      accept={accept}
      onChange={onChange}
      disabled={disabled}
      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-400 hover:shadow-lg"
    />
  </div>
);

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
    setIsSubmitting(true);

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
      document_url: documentUrl, // Document URL will be an empty string if no document is uploaded
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
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
        <TextInput
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          placeholder="Enter your name"
        />
        <TextInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          placeholder="Enter your email"
        />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
          <div className="flex space-x-4">
            <select
              value={formData.countryCode}
              onChange={handleCountryCodeChange}
              className="p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out hover:border-blue-400 hover:shadow-lg"
              disabled={isSubmitting}
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name} ({country.code})
                </option>
              ))}
            </select>
            <TextInput
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <TextInput
          label="Appointment Date"
          name="appointmentDate"
          type="date"
          value={formData.appointmentDate}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
        <TextInput
          label="Appointment Time"
          name="appointmentTime"
          type="time"
          value={formData.appointmentTime}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
        <Textarea
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          required
          disabled={isSubmitting}
        />
        <FileUpload
          label="Upload Document (optional)"
          name="document"
          onChange={handleChange}
          accept=".pdf"
          disabled={isSubmitting}
        />

        <div>
          <button
            type="submit"
            className="w-full py-3 px-5 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 ease-in-out"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Book Appointment'}
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default BookAppointment;
