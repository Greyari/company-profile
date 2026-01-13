// ====================
// src/components/FAQ.tsx
// ====================
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question:
      "What CCTV products are available at PT Kreatif System Indonesia?",
    answer:
      "We offer a wide range of Dahua CCTV products including IP Cameras, Analog Cameras, NVRs (Network Video Recorders), DVRs (Digital Video Recorders), and other supporting accessories. All products are original and come with official warranties.",
  },
  {
    question: "How long does CCTV installation take?",
    answer:
      "Installation time varies depending on the project scale. For residential installations (4-8 cameras), it usually takes 1-2 working days. For commercial or industrial projects, we conduct a site survey first to determine the exact timeline.",
  },
  {
    question: "Do you provide maintenance and after-sales service?",
    answer:
      "Yes, we provide routine maintenance and after-sales service. Our team of technicians is ready to assist with troubleshooting, repairs, and system checks. We also offer scheduled maintenance packages to ensure your CCTV system always performs optimally.",
  },
  {
    question: "Can CCTV be accessed remotely via smartphone or computer?",
    answer:
      "Absolutely. All CCTV systems we install can be accessed remotely through smartphones (Android/iOS) or computers using Dahua's official applications. We provide setup assistance and training to ensure you can use the applications effectively.",
  },
  {
    question: "How can I get a price quote for a CCTV installation project?",
    answer:
      "You can contact us via phone, WhatsApp, or email for a free consultation. Our team will conduct a site survey if needed and provide a competitive price quote along with recommended systems that fit your specific requirements.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - FAQ Items */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl text-black font-bold mb-8 leading-tight">
              Frequently Asked Questions
            </h2>

            <div className="divide-y divide-gray-300">
              {faqData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="py-7"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-start justify-between text-left group"
                    aria-expanded={activeIndex === index}
                  >
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="shrink-0 mr-5 mt-1 text-indigo-600"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </motion.div>

                    <span className="flex-1 text-sm lg:text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors leading-snug">
                      {item.question}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.3, ease: "easeInOut" },
                          opacity: { duration: 0.25, ease: "easeInOut" },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2 text-justify pl-11 text-gray-600 leading-relaxed text-xs lg:text-sm">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-24"
          >
            <div className=" border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Have Another Question?
              </h3>
              <p className="text-gray-600 text-sm mb-8">
                Send us a message and we'll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
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
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    required
                  />
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
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
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
                    rows={4}
                    placeholder="Tell us about your inquiry..."
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3.5 px-6 rounded-lg transition-colors text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
