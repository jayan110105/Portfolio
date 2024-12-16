'use client'

import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
import { 
  FaReact, FaNodeJs 
} from 'react-icons/fa'
import { 
  SiNextdotjs, SiFlutter, 
  SiFastapi, SiPrisma, SiTensorflow, 
  SiOpencv , SiMongodb, SiExpress 
} from 'react-icons/si'

import { BiLogoPostgresql } from "react-icons/bi";

import { IoLogoFirebase } from "react-icons/io5";

interface Skill {
  name: string
  icon: IconType
  category: string
}

const skills: Skill[] = [
  { name: 'React', icon: FaReact, category: 'Frameworks' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'Frameworks' },
  { name: 'Flutter', icon: SiFlutter, category: 'Frameworks' },
  { name: 'Express.js', icon: SiExpress, category: 'Frameworks' },
  { name: 'Node.js', icon: FaNodeJs, category: 'Frameworks' },
  { name: 'FastAPI', icon: SiFastapi, category: 'Frameworks' },
  { name: 'Prisma', icon: SiPrisma, category: 'Frameworks' },
  { name: 'MongoDB', icon: SiMongodb, category: 'Databases' },
  { name: 'PostgreSQL', icon: BiLogoPostgresql, category: 'Databases' },
  { name: 'Firebase', icon: IoLogoFirebase, category: 'Databases' },
  { name: 'TensorFlow', icon: SiTensorflow, category: 'AI/ML' },
  { name: 'Computer Vision', icon: SiOpencv, category: 'AI/ML' },
]

const SkillIcon = ({ skill }: { skill: Skill }) => {
  const Icon = skill.icon

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="w-16 h-16 flex items-center justify-center text-4xl text-gray-700 mb-2">
        <Icon />
      </div>
      <span className="text-sm font-medium text-gray-600 text-center">{skill.name}</span>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-2">My Toolkit 💻</h2>
          <p className="text-gray-600 mb-12">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <SkillIcon key={index} skill={skill} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-600"
        >
          <p>And many more tools in my arsenal...</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

