
// ====================
// src/components/Solutions.tsx
// ====================
const solutions = [
  {
    title: 'Attendance & System Control',
    description: 'All in one system fingerprint / rfid fingerprint / battery fingerprint integration system for security solutions management.',
    image: '/images/solution1.jpg'
  },
  {
    title: 'CCTV & Security System',
    description: 'Comprehensive surveillance solutions for your business security needs.',
    image: '/images/solution2.jpg'
  },
  {
    title: 'IT Support',
    description: 'Complete IT infrastructure and support services.',
    image: '/images/solution3.jpg'
  }
]

export default function Solutions() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Our Solution</h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          We provide comprehensive security solutions tailored to your business needs
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition">
              <div className="h-64 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <button className="flex items-center text-blue-600 hover:text-blue-700">
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}