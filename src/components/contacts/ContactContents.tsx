"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

/**
 * Contact page component with clean, modern design
 * Matches the product page aesthetic with minimal styling
 */
export default function ContactContents() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  /**
   * Handle form submission
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  /**
   * Handle input field changes
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Batam, Kepulauan Riau, Indonesia",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+62 XXX XXXX XXXX",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@kreatifsystem.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Sat: 8:00 AM - 5:00 PM",
    },
  ];

  return (
    <section className="bg-white min-h-screen">
      {/* Hero Section - Minimal and Clean */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            Contact us today to discuss your needs and discover how our
            solutions can support your business growth and success.
          </p>
        </motion.div>
      </div>

      {/* Contact Info Cards - Clean Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-transparent hover:border-gray-200 hover:shadow-xl rounded-2xl p-6 transition-colors"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-black rounded-xl">
                  <info.icon className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {info.title}
                  </h3>
                  <p className="text-sm text-gray-600">{info.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content Grid - Form and Map Side by Side */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-gray-200 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>

            <div className="space-y-5">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+62 XXX XXXX XXXX"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black outline-none resize-none transition-all"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={handleSubmit}
                className="w-full bg-black text-white py-3.5 rounded-xl font-medium hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden bg-gray-50"
          >
            <div className="w-full h-full min-h-125">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!3d3989.0494123616686!2d104.02643287472422!3d1.1248774988643566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98b54d7a133a5%3A0x54ceae7fa8100f68!2sPT.%20Kreatif%20System%20Indonesia!5e0!3m2!1sen!2sid!4v1766999394587!5m2!1sen!2sid"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Get Direction Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="absolute bottom-6 left-6 bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-lg"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/dir//PT.+Kreatif+System+Indonesia",
                  "_blank"
                )
              }
            >
              <MapPin size={18} />
              Get Direction
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
