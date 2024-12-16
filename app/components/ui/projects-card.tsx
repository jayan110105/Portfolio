'use client'

import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { FaGlobe, FaGithub } from 'react-icons/fa'


interface ProjectCardProps {
    title: string
    description: string
    date: string
    image: StaticImageData
    technologies: string[]
    links: {
      website?: string
      source?: string
    }
  }

const ProjectsCard = ({
    title, 
    description, 
    date, 
    image, 
    technologies, 
    links 
  }: ProjectCardProps) => {

    return(
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
            <div className="relative aspect-[16/9] max-w-full overflow-hidden rounded-t-xl">
                <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>
            <div className='flex flex-col p-6 flex-grow'>
                <h3 className='text-2xl font-bold mb-2'>{title}</h3>
                <p className="text-gray-600 text-sm mb-4">{date}</p>
                <p className="text-gray-700 mb-6">{description}</p>
                <div className='flex flex-wrap gap-2 mb-6'>
                    {technologies.map((item,index) => (
                        <span 
                            key={index}
                            className='px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700'
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <div className='flex gap-3'>
                    {links.website && (
                        <motion.a
                            href={links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
                        >
                            <FaGlobe className="w-4 h-4"/>
                            <span>
                                Website
                            </span>
                        </motion.a>
                    )}
                    {links.source && (
                        <motion.a
                            href={links.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                        >
                                
                            <FaGithub className="w-4 h-4"/>
                            <span>
                                Source
                            </span>
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectsCard;