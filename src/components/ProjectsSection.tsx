'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import { MyProjects } from '@/data/index'
import { useLanguage } from '@/context/LanguageContext'

export default function ProjectsSection() {
  const { language } = useLanguage()

  return (
    <section id="projects" className="container py-20 bg-white dark:bg-dark transition-colors duration-200">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-colors duration-200">
        {language === 'en' ? 'Projects' : 'المشاريع'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MyProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.name}
            title_ar={project.name_ar}
            description={project.desc}
            description_ar={project.desc_ar}
            image={project.image}
            technologies={project.technologies}
            technologies_ar={project.technologies_ar}
            liveUrl={project.Live}
            githubUrl={project.source}
          />
        ))}
      </div>
    </section>
  )
} 