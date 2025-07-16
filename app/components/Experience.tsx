'use client'

import Image, { StaticImageData } from "next/image"
import prism from '../img/prism.png';
import insight from '../img/infinite.jpeg';
import ekam from '../img/ekam.png';

import { motion } from "framer-motion";


interface ExperienceItem
{
    logo: StaticImageData
    date: string
    title: string
    location: string
    description: string
}

const ExperienceCard = ({item, index 
}: { 
  item: ExperienceItem
  index: number 
}) => {
    return(
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="flex gap-4 md:gap-6 relative"
      >
            <div className="absolute left-6 top-[60px] bottom-0 w-px bg-gray-200" />
            <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                    <Image 
                        src={item.logo}
                        alt = {`${item.title} logo`}
                        height={48}
                        width={50}
                        className="w-8 h-8 object-contain"
                    />
                </div>
            </div>
            <div className="pb-12">
                <p className="text-sm text-gray-600 mb-1">{item.date}</p>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.location}</p>
                <p className="text-gray-700">{item.description}</p>
            </div>
        </motion.div>
    )
}

const Experience = () => {
    const experiences = [
        {
            logo: ekam,
            date: "May 2025 – July 2025",
            title: "Founding Engineering Intern",
            location: "Ekam Apps",
            description: "Built a B2B SaaS platform using Next.js, TypeScript, and FastAPI to automate customer document collection via WhatsApp. Engineered an AI multi-agent workflow with CrewAI to handle document requests, validation, and extraction, which significantly improved operational efficiency. The platform featured a scalable multi-tenant backend, secure REST APIs, and integrated WhatsApp Business API for automated reminders, reducing manual coordination by 60%."
        },
        {
          logo: prism,
          date: "August 2024 – March 2025",
          title: "Research Intern",
          location: "Samsung PRISM",
          description: "Designed solutions for user health identification using smart home data in the IoT domain. Developed models for patient monitoring, fall detection, and anomaly detection."
        },
        {
          logo: insight,
          date: "May 2024 – July 2024",
          title: "Product Management Intern",
          location: "Infinite Insight",
          description: "Enhanced search functionality, achieving measurable improvements in efficiency and usability. Streamlined user tutorials, reducing onboarding time and improving accessibility. Defined user stories to direct development efforts and ensure alignment with objectives."
        }
      ]

      return(
        <section id="experience" className="py-20 bg-gray-50 sm:px-4">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-2">Experience</h2>
                    <p className="text-gray-600">My professional journey so far 🚀</p>
                </div>
                <div className="max-w-3xl">
                    {experiences.map((item, index) => (
                        <ExperienceCard key={index} item={item} index={index}/>
                    ))}
                </div>
            </div>
        </section>
      )
}

export default Experience;