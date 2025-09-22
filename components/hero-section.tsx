
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Code2, Database, Cpu } from 'lucide-react'

const HeroSection = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Render without animations until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center gradient-bg text-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Orwa Houry
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-blue-100">
              Software Engineer
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-blue-50 max-w-3xl mx-auto">
              Crafting innovative solutions with cutting-edge technology. 
              Passionate about building scalable applications and exploring the latest in software engineering.
            </p>
          </div>

          <div className="flex justify-center space-x-8 mb-12">
            <div className="flex flex-col items-center">
              <Code2 size={40} className="mb-2 text-blue-200" />
              <span className="text-sm">Full-Stack Development</span>
            </div>
            <div className="flex flex-col items-center">
              <Database size={40} className="mb-2 text-blue-200" />
              <span className="text-sm">Data Engineering</span>
            </div>
            <div className="flex flex-col items-center">
              <Cpu size={40} className="mb-2 text-blue-200" />
              <span className="text-sm">Machine Learning</span>
            </div>
          </div>

          <button
            onClick={scrollToAbout}
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore My Work
            <ChevronDown size={20} className="ml-2" />
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Orwa Houry
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-blue-100">
            Software Engineer
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-50 max-w-3xl mx-auto">
            Crafting innovative solutions with cutting-edge technology. 
            Passionate about building scalable applications and exploring the latest in software engineering.
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center space-x-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col items-center">
            <Code2 size={40} className="mb-2 text-blue-200" />
            <span className="text-sm">Full-Stack Development</span>
          </div>
          <div className="flex flex-col items-center">
            <Database size={40} className="mb-2 text-blue-200" />
            <span className="text-sm">Data Engineering</span>
          </div>
          <div className="flex flex-col items-center">
            <Cpu size={40} className="mb-2 text-blue-200" />
            <span className="text-sm">Machine Learning</span>
          </div>
        </motion.div>

        <motion.button
          onClick={scrollToAbout}
          className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Explore My Work
          <ChevronDown size={20} className="ml-2" />
        </motion.button>
      </div>

      {/* Floating Animation Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
    </section>
  )
}

export default HeroSection
