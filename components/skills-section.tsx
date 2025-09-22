
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Globe, Database, Wrench, Brain, Gamepad2 } from 'lucide-react'

const SkillsSection = () => {
  const [mounted, setMounted] = useState(false)
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={28} />,
      skills: ["Java", "Python", "C++", "C#", "JavaScript", "Kotlin"],
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Web Technologies",
      icon: <Globe size={28} />,
      skills: ["React.js", "Node.js", "jQuery", "PHP", "ASP.Net"],
      color: "from-green-500 to-green-700"
    },
    {
      title: "Databases",
      icon: <Database size={28} />,
      skills: ["MySQL", "MongoDB", "Oracle Database", "MS SQL Server"],
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Data Science & ML",
      icon: <Brain size={28} />,
      skills: ["Apache Spark", "Pandas", "NumPy", "Scikit-learn", "Keras", "PyTorch", "OpenAI Gym", "Seaborn", "Matplotlib"],
      color: "from-red-500 to-red-700"
    },
    {
      title: "Development Tools",
      icon: <Wrench size={28} />,
      skills: ["Git", "Docker", "Jira"],
      color: "from-orange-500 to-orange-700"
    },
    {
      title: "Game Development",
      icon: <Gamepad2 size={28} />,
      skills: ["Unity"],
      color: "from-indigo-500 to-indigo-700"
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
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
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ref}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Technical Skills
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive toolkit spanning multiple domains - from web development 
                and data science to machine learning and game development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <div
                  key={category.title}
                  className="skill-card border-t-4 border-blue-500"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 text-white`}>
                    {category.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
                <p className="text-lg text-blue-100">
                  Technology evolves rapidly, and so do I. I'm constantly expanding my skill set 
                  and staying up-to-date with the latest industry trends and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit spanning multiple domains - from web development 
              and data science to machine learning and game development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="skill-card border-t-4 border-blue-500"
                variants={itemVariants}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 text-white`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1 + skillIndex * 0.05 
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
              <p className="text-lg text-blue-100">
                Technology evolves rapidly, and so do I. I'm constantly expanding my skill set 
                and staying up-to-date with the latest industry trends and best practices.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
