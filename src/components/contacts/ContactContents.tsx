"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ContactContents() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        //  trigger success modal
        (window as any).openResultModal("success");
      } else {
        //  trigger error modal
        (window as any).openResultModal("error");
      }
    } catch (error) {
      (window as any).openResultModal("error");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content:
        "Ruko, Jl. Palm Spring No.B3 No 15, Taman Baloi, Batam Kota, Batam City, Riau Islands",
      type: "maps",
      link: "https://www.google.com/maps/dir//PT.+Kreatif+System+Indonesia",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+62 214 0088",
      type: "phone",
      link: "tel:+622140088",
    },
    {
      icon: Mail,
      title: "Email",
      content: "enquiry@kreatifsystem.com",
      type: "email",
      link: "mailto:enquiry@kreatifsystem.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Sat: 8:00 AM - 5:00 PM",
      type: "none",
      link: "",
    },
  ];

  return (
    <section className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-15 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-sm text-gray-600">
            Contact us today to discuss your needs and discover how our
            solutions can support your business growth and success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
              Contact Information
            </h2>
            <p className="text-sm text-gray-600 mb-3">
              We'd love to hear from you! Reach out to us through any of the
              following methods:
            </p>

            <div className="flex flex-col gap-4">
              {contactInfo.map((info, index) => {
                // CTA logic
                const isClickable = info.type !== "none";
                const handleClick = () => {
                  if (!isClickable) return;
                  window.open(info.link, "_blank");
                };

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`flex items-center justify-between border border-transparent hover:border-gray-200 hover:shadow-lg rounded-2xl p-4 transition-all bg-white cursor-pointer ${
                      isClickable ? "hover:bg-gray-50" : ""
                    }`}
                    onClick={handleClick}
                  >
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 p-3 bg-black rounded-xl flex items-center justify-center">
                        <info.icon className="text-white" size={20} />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-sm text-gray-600">{info.content}</p>
                      </div>
                    </div>

                    {isClickable && (
                      <ChevronRight className="text-gray-400 ml-4" size={18} />
                    )}
                  </motion.div>
                );
              })}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!3d3989.0494123616686!2d104.02643287472422!3d1.1248774988643566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98b54d7a133a5%3A0x54ceae7fa8100f68!2sPT.+Kreatif+System+Indonesia!5e0!3m2!1sen!2sid!4v1766999394587!5m2!1sen!2sid"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-12 bg-white shadow-sm">
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                Send Us a Message
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Send us a message and we'll get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    required
                  />
                </div>

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
                    placeholder="your@email.com"
                    className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

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
                  placeholder="+62 812 3456 7890"
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  required
                />
              </div>

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
                  rows={6}
                  placeholder="Tell us about your inquiry..."
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black/90 hover:bg-black/80 text-white font-medium py-4 px-6 rounded-lg transition-colors text-sm sm:text-base"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
