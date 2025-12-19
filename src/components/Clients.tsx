
// ====================
// src/components/Clients.tsx
// ====================
export default function Clients() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Client</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg flex items-center justify-center h-24 hover:shadow-lg transition">
              <div className="w-full h-12 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}