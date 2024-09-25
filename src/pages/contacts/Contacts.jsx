import React, { useState } from 'react';
import {
  FaUser,
  FaEnvelope,
  FaEdit,
  FaPaperPlane,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { PiAddressBook } from 'react-icons/pi';
import PageHeading from '../../components/typopraphy/PageHeading';

const iconColor = "text-primary";
const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'email':
        if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'message':
        if (value.length > 500) {
          error = 'Message must be 500 characters or less';
        }
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = Object.values(errors).filter((error) => error !== '');
    if (formErrors.length === 0) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex w-full items-center justify-center">
        <div className="w-full rounded-lg shadow-lg p-8 transform transition-all duration-500 ease-in-out hover:scale-105">
          <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
            Thank You!
          </h2>
          <p className="text-center text-gray-700">
            Your message has been sent successfully. I'll get back to you soon!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="flex items-center">
        <PiAddressBook className={`size-11 ${iconColor} mr-5`} />
        <PageHeading partOne="contact" partTwo="me" />
      </div>

      <div className="sm:mx-auto">
        <div className="bg-white w-full rounded-md py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-label="Name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-label="Email"
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEdit
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="focus:ring-indigo-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  aria-label="Subject"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className={`focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${
                    errors.message ? 'border-red-500' : ''
                  }`}
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-label="Message"
                ></textarea>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                {formData.message.length}/500 characters
              </p>
              {errors.message && (
                <p className="mt-2 text-sm text-red-600">{errors.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              >
                <FaPaperPlane className="mr-2 h-5 w-5" aria-hidden="true" />
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900">My Location</h3>
            <div className="mt-2 bg-gray-50 rounded-lg p-4 flex items-center">
              <FaMapMarkerAlt
                className="h-6 w-6 text-blue-500 mr-2"
                aria-hidden="true"
              />
              <p className="text-sm text-gray-700">
                Kanpur, Uttar Pradesh, India, code - 208015
              </p>
            </div>
            <div className="mt-4 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3573.4272697784736!2d80.37436707536757!3d26.40968497695057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1727271300561!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
