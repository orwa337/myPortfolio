
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Wifi, Plus, Code, Database, Smartphone } from 'lucide-react'

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const featuredProject = {
    title: "WiFi Chat P2P",
    description: "A peer-to-peer chat application that enables direct communication between devices over WiFi networks without requiring internet connectivity. Built with modern networking protocols and optimized for real-time messaging.",
    technologies: ["Networking", "P2P Protocol", "Real-time Communication", "WiFi Direct"],
    githubUrl: "https://github.com/orwa337/WiFiChatP2P.git",
    liveUrl: null, // Can be added when available
    icon: <Wifi size={32} />,
    features: [
      "Direct P2P communication without internet",
      "Real-time messaging capabilities",
      "WiFi Direct protocol implementation",
      "Cross-platform compatibility"
    ]
  }

  const placeholderProjects = [
    {
      title: "Full-Stack Web Application",
      description: "A comprehensive web application showcasing modern development practices with React, Node.js, and database integration.",
      technologies: ["React", "Node.js", "MongoDB", "REST API"],
      icon: <Code size={24} />,
      isPlaceholder: true
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and analysis using modern data science libraries and frameworks.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      icon: <Database size={24} />,
      isPlaceholder: true
    },
    {
      title: "Mobile Application",
      description: "Cross-platform mobile application demonstrating modern mobile development techniques and user experience design.",
      technologies: ["React Native", "Mobile UI/UX", "API Integration"],
      icon: <Smartphone size={24} />,
      isPlaceholder: true
    }
  ]

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

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of my recent work showcasing different aspects of software engineering, 
              from networking solutions to web applications.
            </p>
          </motion.div>

          {/* Featured Project */}
          <motion.div 
            className="project-card mb-12 border-l-4 border-blue-600"
            variants={itemVariants}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mr-4">
                    {featuredProject.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {featuredProject.title}
                    </h3>
                    <span className="text-blue-600 font-semibold">Featured Project</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {featuredProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200"
                  >
                    <Github size={20} className="mr-2" />
                    View Code
                  </a>
                  {featuredProject.liveUrl && (
                    <a 
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wifi size={48} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Real-time P2P Communication
                </h4>
                <p className="text-gray-600">
                  Enabling direct device-to-device communication without internet dependency
                </p>
              </div>
            </div>
          </motion.div>

          {/* Placeholder Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {placeholderProjects.map((project, index) => (
              <motion.div 
                key={project.title}
                className="project-card relative"
                variants={itemVariants}
              >
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">
                    Coming Soon
                  </span>
                </div>
                
                <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {project.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3 mt-auto">
                  <button 
                    onClick={() => alert('This project is coming soon! Check back later for the code repository.')}
                    className="flex-1 py-2 px-4 border border-gray-300 text-gray-500 rounded hover:bg-gray-50 transition-colors"
                  >
                    <Github size={16} className="inline mr-2" />
                    Code
                  </button>
                  <button 
                    onClick={() => alert('This project is coming soon! Check back later for the live demo.')}
                    className="flex-1 py-2 px-4 border border-gray-300 text-gray-500 rounded hover:bg-gray-50 transition-colors"
                  >
                    <ExternalLink size={16} className="inline mr-2" />
                    Demo
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Projects CTA */}
          <motion.div 
            className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12"
            variants={itemVariants}
          >
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Plus size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm constantly working on new projects and exploring different technologies. 
              Check back soon for more exciting developments, or connect with me to discuss 
              potential collaborations.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              Get In Touch
              <ExternalLink size={20} className="ml-2" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
