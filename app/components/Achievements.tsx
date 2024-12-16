'use client'

import { motion } from 'framer-motion'
import { GiAchievement } from "react-icons/gi";
import Image, { StaticImageData } from 'next/image'
import appathon from "../img/appathonpng.png"

interface AchievementItem {
  icon: React.ElementType
  title: string
  date: string
  description: string
  link?: string
  image: StaticImageData
}

const AchievementCard = ({ item }: { item: AchievementItem }) => {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-center gap-8"
    >
      <div className="relative w-full md:w-1/3 aspect-video rounded-lg overflow-hidden flex items-center justify-center">
        <Image
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center mb-4">
          <div className="bg-gray-100 p-3 rounded-full mr-4">
            <Icon className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.date}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{item.description}</p>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  )
}

const Achievements = () => {
  const achievements: AchievementItem[] = [
    {
      icon: GiAchievement,
      title: "App-a-thon 2024 Winner",
      date: "February 2024",
      description: "Secured first place at a mobile application hackathon hosted by MAHE, showcasing innovative problem-solving skills and technical expertise in app development. The winning project showcased a unique approach to managing EMR records in an ophthalmology clinic.",
      image: appathon
    }
  ]

  return (
    <section id="achievement" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Achievements</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            🎉 Here&apos;s a highlight from my tech adventure
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} item={achievement} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

