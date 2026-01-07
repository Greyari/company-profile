import React from "react";

const InnovativeSection = () => {
  const cards = [
    {
      title: "Attendance",
      desc: "An integrated attendance and workforce management solution designed to improve operational efficiency and employee data accuracy. The system supports real-time attendance tracking through multiple authentication methods...",
      isDark: true,
    },
    {
      title: "Fingerprint",
      desc: "An integrated attendance and workforce management solution designed to improve operational efficiency and employee data accuracy. The system supports real-time attendance tracking through multiple authentication methods...",
      isDark: false,
    },
    {
      title: "Fingerprint",
      desc: "An integrated attendance and workforce management solution designed to improve operational efficiency and employee data accuracy. The system supports real-time attendance tracking through multiple authentication methods...",
      isDark: false,
    },
  ];

  return (
    <section className="py-20 bg-white">
      {/* 1. Header Row - Pakai Container supaya sejajar sama konten atas lu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col lg:flex-row lg:items-center">
          {/* Bagian kiri dikosongin buat balance overlap bawah */}
          {/* <div className="lg:w-1/2" />

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Innovative Technology Solutions
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
              Driven by a passion for excellence, PT Kreatif System Indonesia
              continues to set the standard in security and technology.
            </p>
          </div> */}
        </div>
      </div>

      {/* 2. Content Row - Full Width ke kiri */}
      <div className="flex flex-col lg:flex-row items-stretch w-full">
        {/* Left Side: Image (Mentok ke kiri layar bjir) */}
        <div className="w-full lg:w-[45%] h-100 lg:h-auto min-h-125 relative">
          <img
            src="/images/cctv-about.webp"
            alt="Security Solution"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Cards with Overlap */}
        <div className="w-full lg:w-[55%] flex flex-col md:flex-row gap-6 px-4 md:px-8 lg:px-0 lg:-ml-32 z-10 -mt-15 lg:mt-24">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex-1 p-8 rounded-2xl shadow-2xl flex flex-col min-h-112.5 transition-all duration-300 hover:-translate-y-4 ${
                card.isDark
                  ? "bg-[#121212] text-white"
                  : "bg-white text-gray-800 border border-gray-100"
              }`}
            >
              <h3 className="text-2xl font-bold mb-8 text-center">
                {card.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-8 grow ${
                  card.isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {card.desc}
              </p>
              <div className="mt-auto">
                <a
                  href="#"
                  className={`inline-flex items-center gap-2 font-bold text-sm ${
                    card.isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  See Products <span className="text-xl">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovativeSection;
