'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-600"
        >
          &copy; {new Date().getFullYear()} Jayan Paliwal. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer

