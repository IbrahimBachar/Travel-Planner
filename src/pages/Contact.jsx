import React, { useState } from "react";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent! (Logged to console for now)");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Get in Touch</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Contact Details</h2>
            <p className="flex items-center text-gray-600">
              <Phone className="w-5 h-5 mr-2 text-blue-500" />
              0790 927 453
            </p>
            <p className="flex items-center text-gray-600 mt-2">
              <Mail className="w-5 h-5 mr-2 text-blue-500" />
              <a href="mailto:info@travelplanner.com" className="hover:text-blue-600">
                info@travelplanner.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Address</h2>
            <p className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2 text-blue-500" />
              KG 572 St, Kigali, Rwanda
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Hours of Operation</h2>
            <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
            <p className="text-gray-600">Saturday: 9am - 12pm</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/travelplanner"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/travelplanner"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.twitter.com/travelplanner"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Leave Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="w-full !bg-blue-700 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;