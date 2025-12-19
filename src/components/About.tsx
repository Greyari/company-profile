// ====================
// src/components/About.tsx
// ====================
export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-gray-600 mb-6">
              We deliver integrated and customizable security solutions, 
              from hardware to smart systems. Our dedicated team ensures 
              your business stays protected with cutting-edge technology.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                Read More
              </button>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Get Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}