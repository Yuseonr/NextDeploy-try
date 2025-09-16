export default function About() {
  return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          About Us
        </h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Welcome to our Next.js application! This is a custom about page 
            that demonstrates routing in Next.js.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                Fast Development
              </h2>
              <p className="text-blue-600">
                Next.js provides an amazing developer experience with 
                hot reloading and instant feedback.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-green-800 mb-3">
                Built for Performance
              </h2>
              <p className="text-green-600">
                Automatic optimizations make your app fast by default.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
