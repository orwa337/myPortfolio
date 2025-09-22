
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Lightbulb, Target, Zap } from 'lucide-react'

const AboutSection = () => {
  const [mounted, setMounted] = useState(false)
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  // Render without animations until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                About Me
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                I'm a passionate software engineer with expertise across multiple programming languages 
                and technologies. From building scalable web applications to implementing machine learning 
                solutions, I love tackling complex challenges and delivering innovative results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  Constantly exploring new technologies and methodologies to create 
                  cutting-edge solutions that push the boundaries of what's possible.
                </p>
              </div>

              <div className="text-center p-8 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Precision</h3>
                <p className="text-gray-600">
                  Attention to detail and commitment to writing clean, maintainable code 
                  that meets the highest standards of quality and performance.
                </p>
              </div>

              <div className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-teal-50">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Performance</h3>
                <p className="text-gray-600">
                  Optimizing applications for speed, scalability, and efficiency to 
                  deliver exceptional user experiences and robust system architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm a passionate software engineer with expertise across multiple programming languages 
              and technologies. From building scalable web applications to implementing machine learning 
              solutions, I love tackling complex challenges and delivering innovative results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Constantly exploring new technologies and methodologies to create 
                cutting-edge solutions that push the boundaries of what's possible.
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-8 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Precision</h3>
              <p className="text-gray-600">
                Attention to detail and commitment to writing clean, maintainable code 
                that meets the highest standards of quality and performance.
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-teal-50"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Performance</h3>
              <p className="text-gray-600">
                Optimizing applications for speed, scalability, and efficiency to 
                deliver exceptional user experiences and robust system architecture.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
