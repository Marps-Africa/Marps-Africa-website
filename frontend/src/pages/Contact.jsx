import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaCheckCircle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');

    const serviceID = 'service_nes84lu';
    const templateID = 'template_dx2mken'; 
    const confirmationTemplateID = 'template_bdw467d'; 
    const publicKey = 'G47v0xkyrNEc7T0Su';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Recipient Name', 
    };

    const confirmationParams = {
      from_name: formData.name, 
      to_email: formData.email, 
      reply_to: formData.email, 
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        return emailjs.send(serviceID, confirmationTemplateID, confirmationParams, publicKey);
      })
      .then(() => {
        toast.success('Message sent successfully! A confirmation email has been sent to you.');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('Failed to send message. Please try again.');
        setIsSubmitting(false);
      });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white mt-8 mb-8 rounded-lg font-['Roboto']">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-blue-700 font-['Poppins']">
            Let’s level up your project, together
          </h2>
          <p className="text-gray-600 font-['Roboto']">
            You can reach us anytime via email at, <a href="mailto:marpsafrica@gmail.com" className="text-blue-600">marpsafrica@gmail.com</a>
          </p>
          <ul className="space-y-4 font-['Roboto']">
            <li className="flex items-center hover:bg-gray-100 p-2 rounded-lg transition-all">
              <FaCheckCircle className="text-green-500 mr-3 text-xl" />
              MarpsAfrica Solutions experts contact you within 24h
            </li>
            <li className="flex items-center hover:bg-gray-100 p-2 rounded-lg transition-all">
              <FaCheckCircle className="text-green-500 mr-3 text-xl" />
              Information promptly cataloged for efficient handling
            </li>
            <li className="flex items-center hover:bg-gray-100 p-2 rounded-lg transition-all">
              <FaCheckCircle className="text-green-500 mr-3 text-xl" />
              Discuss your project details
            </li>
          </ul>

          <div className="mt-6 relative">
            <iframe
              title="Nairobi CBD Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.46999383871!2d36.81704731387715!3d-1.283370999052714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10df672ab7c5%3A0x3ac11bfc0c9ac2f2!2sBazaar%20Plaza!5e0!3m2!1sen!2ske!4v1694793921856!5m2!1sen!2ske"
              className="w-full h-60 md:h-80 border-0 rounded-lg shadow-md"
              allowFullScreen=""
              loading="lazy"
            ></iframe>

            <a
              href="https://www.google.com/maps/dir//Bazaar+Plaza,+Nairobi,+Kenya"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 right-2 flex items-center bg-white p-2 rounded-lg shadow-lg text-blue-600 hover:text-blue-800 font-semibold text-xs md:text-sm transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3v3.75M3 12.75h3.75m8.25 0H21m-7.5 0V21m0-8.25L19.5 5.25" />
              </svg>
              View Directions to Bazaar Plaza
            </a>
          </div>
        </div>

        <div className="p-6 bg-gray-50 rounded-lg font-['Roboto']">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full p-3 border border-blue-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 transition duration-300 ease-in-out hover:shadow-lg"
                placeholder="MarpsAfrica"
                onFocus={(e) => e.target.placeholder = ''}
                onBlur={(e) => e.target.placeholder = 'MarpsAfrica'}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full p-3 border border-blue-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 transition duration-300 ease-in-out hover:shadow-lg"
                placeholder="MarpsAfrica@example.com"
                onFocus={(e) => e.target.placeholder = ''}
                onBlur={(e) => e.target.placeholder = 'MarpsAfrica@example.com'}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full p-3 border border-blue-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 transition duration-300 ease-in-out hover:shadow-lg"
                rows="5"
                placeholder="Hello, this is Peter, I'd like to discuss project details..."
                onFocus={(e) => e.target.placeholder = ''}
                onBlur={(e) => e.target.placeholder = "Hello, this is Peter, I'd like to discuss project details..."}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="ml-auto block px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-extrabold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 font-inter text-sm md:text-base"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12a8 8 0 1116 0A8 8 0 014 12z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;