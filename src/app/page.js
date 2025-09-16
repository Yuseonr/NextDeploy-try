import Card from '../../components/Card'
import Counter from '../../components/Counter'
import Toggle from '../../components/Toggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to Next.js
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Now with interactive components!
          </p>
        </div>
        
        {/* Interactive Components */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Counter />
          <Toggle />
        </div>
        
        {/* Feature Cards */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card 
              title="⚡ Fast Refresh" 
              description="See your changes instantly without losing component state"
              color="blue"
            />
            <Card 
              title="🎨 Tailwind CSS" 
              description="Utility-first CSS framework for rapid UI development"
              color="green"
            />
            <Card 
              title="📱 Responsive" 
              description="Built-in responsive design that works on all devices"
              color="purple"
            />
            <Card 
              title="🚀 Optimized" 
              description="Automatic code splitting and performance optimizations"
              color="red"
            />
            <Card 
              title="🔗 File-based Routing" 
              description="Simple and intuitive routing based on your file structure"
              color="blue"
            />
            <Card 
              title="⚙️ Interactive" 
              description="React state management for dynamic user experiences"
              color="green"
            />
          </div>
        </div>
      </div>
    </main>
  )
}