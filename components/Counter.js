"use client"
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">
        Interactive Counter
      </h3>
      
      <div className="mb-6">
        <span className={`text-6xl font-bold ${count >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {count}
        </span>
      </div>
      
      <div className="flex justify-center space-x-4">
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium"
        >
          - Decrease
        </button>
        
        <button
          onClick={reset}
          className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium"
        >
          Reset
        </button>
        
        <button
          onClick={increment}
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium"
        >
          + Increase
        </button>
      </div>
      
      <p className="mt-4 text-gray-600">
        {count === 0 && "Perfect balance! ⚖️"}
        {count > 0 && `Looking positive! 📈`}
        {count < 0 && `Going negative! 📉`}
      </p>
    </div>
  )
}