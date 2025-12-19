// ==========================================
// src/app/products/page.tsx
// ==========================================
export default function ProductsPage() {
  const products = [
    {
      title: 'Fingerprint Attendance System',
      category: 'Attendance & Access Control',
      description: 'Advanced biometric attendance system with fingerprint recognition technology. Supports multiple users and real-time data synchronization.',
      features: ['Multi-user support', 'Cloud integration', 'Real-time reporting', 'Mobile app access']
    },
    {
      title: 'RFID Access Control',
      category: 'Attendance & Access Control',
      description: 'Secure RFID-based access control system for offices, warehouses, and restricted areas.',
      features: ['RFID card support', 'Multiple access levels', 'Audit trail', 'Easy integration']
    },
    {
      title: 'IP CCTV Camera',
      category: 'CCTV & Security',
      description: 'High-definition IP cameras with night vision and motion detection capabilities.',
      features: ['Full HD 1080p', 'Night vision', 'Motion detection', 'Remote viewing']
    },
    {
      title: 'NVR Recording System',
      category: 'CCTV & Security',
      description: 'Network Video Recorder for centralized video storage and management.',
      features: ['Multi-channel support', 'Large storage capacity', 'Playback features', 'Backup options']
    },
    {
      title: 'Network Infrastructure',
      category: 'IT Support',
      description: 'Complete network setup including switches, routers, and cabling solutions.',
      features: ['Structured cabling', 'Network configuration', 'Performance optimization', 'Security setup']
    },
    {
      title: 'IT Maintenance Services',
      category: 'IT Support',
      description: 'Comprehensive IT support and maintenance for your business infrastructure.',
      features: ['24/7 support', 'Regular maintenance', 'System updates', 'Problem resolution']
    }
  ]

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-gray-200">Comprehensive security and IT solutions for your business</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <span className="text-sm text-blue-600 font-semibold">{product.category}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-center">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-600 mb-8">
            We can design and implement custom security solutions tailored to your specific requirements.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Contact Our Sales Team
          </button>
        </div>
      </section>
    </main>
  )
}
