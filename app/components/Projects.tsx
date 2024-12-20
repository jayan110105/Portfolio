'use client'

import ProjectsCard from "./ui/projects-card"
import maternalHealth from "../img/maternal-healthcare-mockup.png"
import opthadoc from "../img/opthadoc-mockup.png"
import urbanscene from "../img/urban-scene-mockup.png"
import { motion } from "framer-motion"

const Projects = () => {
    const projects = [
        {
          title: "Maternal Healthcare Web App",
          date: "December 2023 - Present",
          description: "Built a web platform for maternal healthcare with machine learning models for risk prediction, anxiety detection, and diet recommendations. Integrated an interactive chatbot using Llama APIs.",
          image: maternalHealth,
          technologies: ["Next.js", "Prisma", "PostgreSQL", "FastAPI"],
          links: {
            website: "https://mom-care.vercel.app/",
            source: "https://github.com/jayan110105/MomCare"
          }
        },
        {
          title: "Ophthalmology EMR App",
          date: "September 2023 - November 2023",
          description: "Developed an EMR app to simplify ophthalmology data documentation for clinical and research purposes. Implemented real-time data management with Firebase and offline storage.",
          image: opthadoc,
          technologies: ["Flutter", "Firebase", "Hive"],
          links: {
            source: "https://github.com/jayan110105/OpthaDoc"
          }
        },
        {
          title: "Urban Scene Understanding",
          date: "June 2023 - August 2023",
          description: "Created a semantic segmentation model with 84% accuracy using CityScapes DashCam dataset for urban scene analysis.",
          image: urbanscene,
          technologies: ["Python", "TensorFlow", "Computer Vision"],
          links: {
            source: "https://github.com/jayan110105/Urban-Scene-Understanding"
          }
        }
      ]
    
    return(
        <section id='projects' className="py-20 bg-white">
            <div className="px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-2">Projects</h2>
                    <p className="text-gray-600 mb-12">Some things I&apos;ve built 🚀</p>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectsCard key={index} {...project}/>
                    ))}
                </div>
            </div>
        </ section>
    )
}

export default Projects;