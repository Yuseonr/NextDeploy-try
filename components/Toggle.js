"use client"
import { useState } from 'react'

export default function Toggle() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`p-8 rounded-lg shadow-md transition-all duration-300 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <h3 className="text-2xl font-semibold mb-6">
        Toggle Components
      </h3>
      
      {/* Visibility Toggle */}
      <div className="mb-6">
        <button
          onClick={toggleVisibility}
          className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
            isDarkMode 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-blue-500 hover:bg-blue-600'
          } text-white`}
        >
          {isVisible ? '👁️ Hide Secret' : '🔒 Show Secret'}
        </button>
        
        {isVisible && (
          <div className={`mt-4 p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <p className="text-lg">
              🎉 Congratulations! You&apos;ve unlocked interactive content!
              This appears and disappears based on your click.
            </p>
          </div>
        )}
      </div>
      
      {/* Dark Mode Toggle */}
      <div>
        <button
          onClick={toggleDarkMode}
          className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
            isDarkMode 
              ? 'bg-yellow-500 hover:bg-yellow-600 text-black' 
              : 'bg-gray-700 hover:bg-gray-800 text-white'
          }`}
        >
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
        <p className="mt-2 text-sm opacity-75">
          Current mode: {isDarkMode ? 'Dark 🌚' : 'Light 🌞'}
        </p>
      </div>
    </div>
  )
}