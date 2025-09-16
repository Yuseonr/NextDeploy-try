export default function Card({ title, description, color = "blue" }) {
  const colorClasses = {
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    green: "bg-green-50 border-green-200 text-green-800", 
    purple: "bg-purple-50 border-purple-200 text-purple-800",
    red: "bg-red-50 border-red-200 text-red-800"
  }

  return (
    <div className={`p-6 rounded-lg border-2 ${colorClasses[color]} hover:shadow-lg transition-shadow duration-300`}>
      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>
      <p className="text-sm opacity-80">
        {description}
      </p>
    </div>
  )
}