"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactContents() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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
      content: "Mon - Fri: 9:00 AM - 5:00 PM",
    },
  ];

  return (
    <section className="bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className=" text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Contact us today to discuss your needs and discover how our
            solutions can support your business growth and success.
          </motion.p>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="w-full h-125 lg:h-150">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0494123616686!2d104.02643287472422!3d1.1248774988643566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98b54d7a133a5%3A0x54ceae7fa8100f68!2sPT.%20Kreatif%20System%20Indonesia!5e0!3m2!1sen!2sid!4v1766999394587!5m2!1sen!2sid"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute bottom-8 left-8 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 group"
            onClick={() =>
              window.open(
                "https://www.google.com/maps/dir//PT.+Kreatif+System+Indonesia",
                "_blank"
              )
            }
          >
            <MapPin
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
            Get Direction
          </motion.button>
        </motion.div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-900 rounded-xl">
                  <info.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {info.title}
                  </h3>
                  <p className="text-sm text-gray-600">{info.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-gray-600">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-slate-900 mb-2"
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
                  className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-slate-900 focus:bg-white focus:ring-0 outline-none transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-900 mb-2"
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
                  className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-slate-900 focus:bg-white focus:ring-0 outline-none transition-all"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-slate-900 mb-2"
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
                className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-slate-900 focus:bg-white focus:ring-0 outline-none transition-all"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-slate-900 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell us about your project or inquiry..."
                className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:border-slate-900 focus:bg-white focus:ring-0 outline-none resize-none transition-all"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              <Mail
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
