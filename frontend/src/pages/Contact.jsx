import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-screen-lg w-full space-y-6">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
          Contact Us
        </h1>

        {/* Intro */}
        <p className="text-center text-gray-700 text-base md:text-lg leading-relaxed">
          Have questions, feedback, or need assistance? We’d love to hear from
          you! Reach out using the form below or through our provided contact
          details.
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              placeholder="Enter the subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              placeholder="Write your message here"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal text-white py-2 px-4 rounded-lg shadow-lg hover:bg-teal-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div className="text-center space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="text-gray-700">
            <strong>Email:</strong> support@sunnyshores.com
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p className="text-gray-700">
            <strong>Address:</strong> 123 Beachside Blvd, Coastal City, CA 90001
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
