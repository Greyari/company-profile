// ==========================================
// src/components/about/AboutStory.tsx
// ==========================================

export default function AboutStory() {
  return (
    <section id="who-we-are" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-6">
              PT Kreatif System Indonesia
            </h2>
            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              PT. Kreatif System Indonesia was founded with a vision to provide
              cutting-edge security solutions for modern businesses. Our team of
              experienced professionals combines technical expertise with a deep
              understanding of our clients' needs, ensuring that every solution
              we provide is tailored to meet specific requirements.Since our
              establishment, we have been committed to delivering excellence in
              every project. Our team of experienced professionals combines
              technical expertise with a deep understanding of our clients'
              needs, ensuring that every solution we provide is tailored to meet
              specific requirements.
            </p>

            <p className="text-gray-600 mb-4 text-justify leading-relaxed">
              Our team of experienced professionals combines technical expertise
              with a deep understanding of our clients' needs, ensuring that
              every solution we provide is tailored to meet specific
              requirements. Our team of experienced professionals combines
              technical expertise with a deep understanding of our clients'
              needs, ensuring that every
            </p>

            <p className="text-gray-600 text-justify leading-relaxed">
              Our team of experienced professionals combines technical expertise
              with a deep understanding of our clients' needs, ensuring that
              every solution we provide is tailored to meet specific
              requirements. Our team of experienced professionals combines
              technical expertise with a deep understanding of our clients'
              needs, ensuring that every solution we provide is tailored to meet
              specific requirements. Our team of experienced professionals
              combines technical expertise with a deep understanding of our
              clients' needs, ensuring that every solution we provide is
              tailored to meet specific requirements. Our team of experienced
              professionals combines technical expertise with a deep
              understanding of our clients' needs, ensuring that every solution
              we provide is tailored to meet specific requirements.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {/* Left Column: Black Container Area */}
              <div className="mt-20 relative w-full bg-black rounded-2xl shadow-2xl min-h-75 lg:min-h-full">
                {/* Box ini akan otomatis setinggi konten kanan karena items-stretch */}
              </div>

              {/* Right Column: Content Area */}
              <div className="mt-20 flex flex-col justify-center space-y-6 text-[#1a1a1a]">
                <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900">
                  Innovative Technology Solutions
                </h2>

                <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
                  <p>
                    PT Kreatif System Indonesia is a leading provider of
                    innovative technology and security solutions since 2018.
                    Committed to delivering exceptional services in CCTV
                    surveillance, IT solutions, and system integration. With a
                    focus on reliability, efficiency, and customization, we help
                    businesses and organizations enhance their security and
                    technology infrastructure.
                  </p>

                  <p>
                    As a trusted partner of globally recognized brands, we offer
                    advanced and tailored solutions designed to meet the diverse
                    and evolving needs of our clients. Our team of dedicated
                    professionals works closely with customers to ensure the
                    successful implementation of cutting-edge systems that align
                    with their operational goals.
                  </p>

                  <p>
                    Driven by a passion for excellence, PT Kreatif System
                    Indonesia continues to set the standard in security and
                    technology, providing peace of mind and empowering
                    businesses to thrive in the digital age. Our team of
                    dedicated professionals works closely with customers to
                    ensure the successful implementation of cutting-edge systems
                    that align with their operational goals.
                  </p>
                </div>

                <div className="pt-4">
                  <button className="group flex items-center justify-between px-8 py-3 border border-gray-400 rounded-full transition-all duration-300 hover:bg-black hover:text-white hover:border-black min-w-50">
                    <span className="text-sm font-medium">See Our Product</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
