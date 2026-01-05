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
      "Apa saja produk CCTV Dahua yang tersedia di PT Kreatif System Indonesia?",
    answer:
      "Kami menyediakan berbagai produk CCTV Dahua meliputi IP Camera, Analog Camera, NVR (Network Video Recorder), DVR (Digital Video Recorder), dan aksesoris pendukung lainnya. Semua produk adalah original dan bergaransi resmi.",
  },
  {
    question: "Berapa lama waktu pengerjaan instalasi CCTV?",
    answer:
      "Waktu instalasi bervariasi tergantung skala proyek. Untuk instalasi rumah tinggal (4-8 kamera) biasanya memakan waktu 1-2 hari kerja. Untuk proyek komersial atau industri, kami akan melakukan survey terlebih dahulu untuk menentukan timeline yang tepat.",
  },
  {
    question: "Apakah tersedia layanan maintenance dan after-sales service?",
    answer:
      "Ya, kami menyediakan layanan maintenance rutin dan after-sales service. Tim teknisi kami siap membantu troubleshooting, perbaikan, dan pengecekan sistem CCTV Anda. Kami juga menyediakan paket maintenance berkala untuk memastikan sistem selalu optimal.",
  },
  {
    question:
      "Apakah bisa akses CCTV dari smartphone atau komputer jarak jauh?",
    answer:
      "Tentu saja. Semua sistem CCTV yang kami instalasi dapat diakses secara remote melalui smartphone (Android/iOS) atau komputer menggunakan aplikasi resmi Dahua. Kami akan membantu setup dan training penggunaan aplikasi tersebut.",
  },
  {
    question:
      "Bagaimana cara mendapatkan penawaran harga untuk proyek instalasi CCTV?",
    answer:
      "Anda dapat menghubungi kami melalui telepon, WhatsApp, atau email untuk konsultasi gratis. Tim kami akan melakukan survey lokasi (jika diperlukan) dan memberikan penawaran harga yang kompetitif beserta rekomendasi sistem yang sesuai dengan kebutuhan Anda.",
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
        <div className=" gap-12 lg:gap-20 items-start">
          {/* Left side - FAQ items */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl text-black font-bold mb-3 leading-tight">
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

                    <span className="flex-1 text-lg lg:text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors leading-snug">
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
                        <div className="pt-4 pl-11 text-gray-600 leading-relaxed text-base lg:text-lg">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Contact Form */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm lg:sticky lg:top-24">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Have Another Question?
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
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
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
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
                    placeholder="+62 XXX XXXX XXXX"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
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
                    rows={5}
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
