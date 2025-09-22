
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Linkedin, Github, ExternalLink, MessageCircle, Send } from 'lucide-react'

const ContactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const contactMethods = [
    {
      name: "Email",
      description: "Get in touch via email",
      icon: <Mail size={28} />,
      href: "mailto:orwa.houry@outlook.de",
      color: "from-blue-500 to-blue-700",
      hoverColor: "hover:bg-blue-50"
    },
    {
      name: "LinkedIn",
      description: "Connect on LinkedIn",
      icon: <Linkedin size={28} />,
      href: "https://linkedin.com/in/orwa-houry",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:bg-blue-50"
    },
    {
      name: "GitHub",
      description: "View my repositories",
      icon: <Github size={28} />,
      href: "https://github.com/orwa337",
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:bg-gray-50"
    },
    {
      name: "Xing",
      description: "Professional network",
      icon: <ExternalLink size={28} />,
      href: "https://www.xing.com/profile/Orwa_Houry",
      color: "from-green-600 to-green-800",
      hoverColor: "hover:bg-green-50"
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

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm always interested in discussing new opportunities, innovative projects, 
              or just connecting with fellow developers. Let's start a conversation!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.name}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block p-6 bg-white rounded-xl shadow-lg ${method.hoverColor} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl`}
                variants={itemVariants}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center mx-auto mb-4 text-white`}>
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">
                  {method.name}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {method.description}
                </p>
              </motion.a>
            ))}
          </div>

          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            variants={itemVariants}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Ready to Start a Project?
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Whether you're looking for a skilled developer to join your team, 
                  need help with a specific project, or want to discuss potential 
                  collaborations, I'd love to hear from you.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <MessageCircle size={20} className="mr-3 text-blue-600" />
                    <span>Open to new opportunities</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Send size={20} className="mr-3 text-blue-600" />
                    <span>Quick response time</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <ExternalLink size={20} className="mr-3 text-blue-600" />
                    <span>Available for consultations</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail size={36} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  Prefer Email?
                </h4>
                <p className="text-gray-600 mb-6">
                  Drop me a line directly and I'll get back to you as soon as possible.
                </p>
                <a 
                  href="mailto:orwa.houry@outlook.de"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                >
                  Send Email
                  <Mail size={18} className="ml-2" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            variants={itemVariants}
          >
            <p className="text-gray-500 text-sm">
                All rights reserved © 2025 Orwa Houry.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
