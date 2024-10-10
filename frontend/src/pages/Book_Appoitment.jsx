import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { storage } from "../firebaseConfig"; // Ensure this path is correct
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const countryCodes = [
  { name: "Nigeria", code: "+234" },
  { name: "South Africa", code: "+27" },
  { name: "Ghana", code: "+233" },
  { name: "Kenya", code: "+254" },
  { name: "United States", code: "+1" },
  { name: "Canada", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Australia", code: "+61" },
  { name: "India", code: "+91" },
  { name: "Japan", code: "+81" },
  { name: "South Korea", code: "+82" },
  { name: "Germany", code: "+49" },
];

const requiredWords = ["appointment", "schedule", "meeting"]; // Words that must be in the message

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+1",
    appointmentDate: null, // Set to null initially
    appointmentTime: "",
    message: "",
    document: null,
  });

  const [formattedDate, setFormattedDate] = useState(""); // State for formatted date
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [availableHours, setAvailableHours] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    if (formData.appointmentDate) {
      updateAvailableHours(formData.appointmentDate);
    }
  }, [formData.appointmentDate]);

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

  const handleDateChange = (date) => {
    if (date) {
      const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
      const formattedDate = `${dayOfWeek}, ${date.toLocaleDateString()}`;
      setFormattedDate(formattedDate);
      setFormData({
        ...formData,
        appointmentDate: date,
      });
      updateAvailableHours(date); // Update available hours when date changes
    } else {
      setFormattedDate("");
      setFormData({
        ...formData,
        appointmentDate: null,
      });
      setAvailableHours([]); // Clear available hours when date is cleared
    }
  };

  const updateAvailableHours = (date) => {
    const now = new Date();
    const selectedDate = new Date(date);
    const isToday = selectedDate.toDateString() === now.toDateString();

    let hours = [];
    if (isToday) {
      const currentHour = now.getHours();
      const endOfDay = 22; // Assume appointments end at 10 PM

      for (let hour = currentHour + 1; hour < endOfDay; hour++) {
        // Start from the next hour
        hours.push(`${hour < 10 ? "0" : ""}${hour}`);
      }
    } else {
      const startHour = selectedDate.getDay() === 6 ? 8 : 8; // Saturdays start at 8 AM, other days start at 8 AM
      const endHour = selectedDate.getDay() === 6 ? 12 : 22; // Saturdays end at 12 PM, other days end at 10 PM

      for (let hour = startHour; hour < endHour; hour++) {
        hours.push(`${hour < 10 ? "0" : ""}${hour}`);
      }
    }

    setAvailableHours(hours);
  };

  const isDateDisabled = (date) => {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || date < new Date();
  };

  const validateMessage = (message) => {
    const wordCount = message.split(/\s+/).length;
    const numericCount = (message.match(/\d/g) || []).length;
    const containsRequiredWords = requiredWords.some((word) =>
      message.toLowerCase().includes(word)
    );

    return wordCount >= 20 && numericCount <= 4 && containsRequiredWords;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    const currentDate = new Date();
    const selectedDate = new Date(formData.appointmentDate);
    const [hours] = formData.appointmentTime.split(":").map(Number);

    if (selectedDate < currentDate.setHours(0, 0, 0, 0)) {
      errors.date = "Choose a day that is beyond today.";
    }

    if (hours < 8 || hours >= 22) {
      errors.time = "Appointment time must be between 8:00 AM and 10:00 PM.";
    }

    if (selectedDate.getDay() === 0) {
      errors.date =
        "Sorry, we don’t work on Sundays. Please choose another day.";
    }

    if (!formData.message) {
      errors.message = "Please enter a message.";
    } else if (!validateMessage(formData.message)) {
      errors.message =
        'Message must be at least 20 words long, contain no more than 4 numeric characters, and include at least one of the required words: "appointment," "schedule," or "meeting".';
    }

    if (Object.keys(errors).length) {
      setValidationErrors(errors);
      return;
    }

    setIsSubmitting(true);

    let documentUrl = "";
    if (formData.document) {
      try {
        const fileRef = ref(storage, `documents/${formData.document.name}`);
        await uploadBytes(fileRef, formData.document);
        documentUrl = await getDownloadURL(fileRef);
      } catch (error) {
        console.error("Error uploading document:", error);
        toast.error("Failed to upload document. Please try again.");
        setIsSubmitting(false);
        return;
      }
    }

    const serviceID = "service_13ygtrs";
    const templateID = "template_n21fa3e";
    const publicKey = "L2_7PSPdo8vlmJqDm";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: `${formData.countryCode} ${formData.phone}`,
      appointment_date: formattedDate, // Use formatted date
      appointment_time: formData.appointmentTime,
      message: formData.message,
      document_url: documentUrl,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        toast.success("Appointment booked successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          countryCode: "+1",
          appointmentDate: null,
          appointmentTime: "",
          message: "",
          document: null,
        });
        setFormattedDate("");
        setValidationErrors({});
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Failed to book appointment. Please try again.");
        setIsSubmitting(false);
      });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Book an Appointment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleCountryCodeChange}
              disabled={isSubmitting}
              className="w-20 p-2 border border-gray-300 rounded-l-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            >
              {countryCodes.map((code) => (
                <option key={code.code} value={code.code}>
                  {code.name} ({code.code})
                </option>
              ))}
            </select>
            <input
              id="phone"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full p-3 border border-gray-300 rounded-r-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="appointmentDate"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Appointment Date <span className="text-red-500">*</span>
          </label>
          <DatePicker
            id="appointmentDate"
            selected={formData.appointmentDate}
            onChange={handleDateChange}
            dateFormat="MMMM d, yyyy"
            minDate={new Date()}
            filterDate={(date) => !isDateDisabled(date)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            placeholderText="Choose the date"
          />
          {formattedDate && (
            <p className="text-gray-600 mt-2">Selected Date: {formattedDate}</p>
          )}
          {validationErrors.date && (
            <p className="text-red-500 mt-2">{validationErrors.date}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="appointmentTime"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Appointment Time <span className="text-red-500">*</span>
          </label>
          <select
            id="appointmentTime"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
          >
            <option value="">Select Time</option>
            {availableHours.map((hour) => (
              <option key={hour} value={`${hour}:00`}>
                {hour}:00
              </option>
            ))}
          </select>
          {validationErrors.time && (
            <p className="text-red-500 mt-2">{validationErrors.time}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            placeholder="Enter your message"
          />
          {validationErrors.message && (
            <p className="text-red-500 mt-2">{validationErrors.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="document"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Upload Document (optional)
          </label>
          <input
            id="document"
            type="file"
            name="document"
            accept=".pdf"
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full border border-gray-300 rounded-lg shadow-sm file:border-0 file:bg-blue-500 file:text-white file:py-2 file:px-4 file:rounded-lg file:text-sm transition duration-150 ease-in-out"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow-sm hover:bg-blue-700 transition duration-150 ease-in-out ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default BookAppointment;
