// ====================
// src/components/Projects.tsx
// ====================
const projects = [
  { title: 'Factory', image: '/images/factory.jpg' },
  { title: 'Construction Site', image: '/images/construction.jpg' },
  { title: 'Apartment', image: '/images/apartment.jpg' },
  { title: 'School', image: '/images/school.jpg' },
]

export default function Projects() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden group cursor-pointer">
              <div className="w-full h-full bg-gray-300"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}