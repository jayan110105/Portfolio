'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { handleSubmit } from '@/app/actions'

import { IconType } from 'react-icons';

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: IconType }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-gray-600 transition-colors"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon className="w-8 h-8" />
  </motion.a>
)

const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Let&apos;s Connect!
            </h2>
            <p className="text-lg text-gray-600">
                If you&apos;d like to get in touch, feel free to connect with me via social media or send me a direct message here.
            </p>
            <div className="flex gap-6">
              <SocialIcon 
                href="https://linkedin.com/in/jayan-paliwal" 
                icon={FaLinkedin}
              />
              <SocialIcon 
                href="https://twitter.com/JayanPaliwal" 
                icon={FaTwitter}
              />
              <SocialIcon 
                href="https://github.com/jayan110105" 
                icon={FaGithub}
              />
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form action={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-0 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-0 transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-0 transition-colors resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                SEND MESSAGE
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

