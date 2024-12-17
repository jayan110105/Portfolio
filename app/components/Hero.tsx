'use client'

import { FaReact, FaFileAlt } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { SiTensorflow } from "react-icons/si";
import FloatingElements from "./ui/floating-elements";
import { motion } from "framer-motion";

const Hero = () => {
  return(
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 pointer-events-none"> 
        <FloatingElements delay={0}>
          <FaReact className="absolute top-20 left-[20%] text-gray-200 w-14 h-14"/>
        </FloatingElements>
        <FloatingElements delay={1}>
          <FaFlutter className="absolute top-40 right-[25%] text-gray-200 w-12 h-12"/>
        </FloatingElements>
        <FloatingElements delay={2}>
          <SiTensorflow className="absolute top-[34rem] left-[25%] text-gray-200 w-11 h-11"/>
        </FloatingElements>
      </div>
      <div className="text-center z-10 px-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-2"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hey, I&apos;m{' '}
            <span className="relative">
              Jayan
              <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-200 -z-10 transform -rotate-2"></span>
            </span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="px-2"
        >
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
           Software Engineer & Tech Enthusiast 👨‍💻
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="/resume.pdf" // Replace with the actual path to your CV
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors inline-flex items-center justify-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
            <FaFileAlt className="ml-2 group-hover:rotate-12 transition-transform" />
          </motion.a>
          <motion.a
            href="#contact"
            className="bg-white text-black border-2 border-black px-8 py-3 rounded-full hover:bg-gray-50 transition-colors inline-flex items-center justify-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero;