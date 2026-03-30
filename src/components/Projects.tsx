'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

interface Project {
  id: string
  number: string
  tag: string
  title: string
  description: string
  tech: string[]
  link: string
}

interface ProjectCategory {
  title: string
  projects: Project[]
}

const projectCategories: ProjectCategory[] = [
  {
    title: 'Design Systems',
    projects: [
      {
        id: '1',
        number: '001',
        tag: 'React',
        title: 'DesignSystems Hub',
        description: 'Индустриальная дизайн-система с компонентами для сложных интерфейсов',
        tech: ['React', 'TypeScript'],
        link: '#'
      },
      {
        id: '2',
        number: '002',
        tag: 'Design',
        title: 'DS Reference',
        description: 'Справочник по дизайн-системам и паттернам UI',
        tech: ['Documentation', 'UI Patterns'],
        link: '#'
      },
      {
        id: '3',
        number: '003',
        tag: 'Tool',
        title: 'Color Picker Panel',
        description: 'Панель для выбора и генерации цветовых палитр',
        tech: ['Colors', 'Palette'],
        link: '#'
      }
    ]
  },
  {
    title: 'UI Tools',
    projects: [
      {
        id: '4',
        number: '004',
        tag: 'Comparison',
        title: 'UI Library Compare',
        description: 'Сравнительный обзор UI библиотек для React',
        tech: ['React', 'V0app'],
        link: '#'
      },
      {
        id: '5',
        number: '005',
        tag: 'Matrix',
        title: 'UI Matrix',
        description: 'Матрица UI компонентов и паттернов',
        tech: ['Components', 'Patterns'],
        link: '#'
      },
      {
        id: '6',
        number: '006',
        tag: 'Template',
        title: 'Radix Template',
        description: 'Шаблон на базе Radix UI для быстрого старта',
        tech: ['Radix UI', 'Template'],
        link: '#'
      }
    ]
  },
  {
    title: 'Applications',
    projects: [
      {
        id: '7',
        number: '007',
        tag: 'App',
        title: 'Notes App',
        description: 'Приложение для заметок с современным интерфейсом',
        tech: ['React', 'State Management'],
        link: '#'
      },
      {
        id: '8',
        number: '008',
        tag: 'Example',
        title: 'Design System App',
        description: 'Пример приложения с дизайн-системой (Bun + React)',
        tech: ['Bun', 'React'],
        link: '#'
      },
      {
        id: '9',
        number: '009',
        tag: 'Portfolio',
        title: 'Dev.Studio Portfolio',
        description: 'Портфолио разработчика с современным дизайном',
        tech: ['Portfolio', 'Showcase'],
        link: '#'
      }
    ]
  },
  {
    title: 'Ресурсы',
    projects: [
      {
        id: '10',
        number: '010',
        tag: 'Guide',
        title: 'UI Stack Guide',
        description: 'Руководство по выбору технологического стека для UI',
        tech: ['Guide', 'Documentation'],
        link: '#'
      },
      {
        id: '11',
        number: '011',
        tag: 'Docs',
        title: 'JavaScript/TypeScript',
        description: 'Материалы по JavaScript и TypeScript',
        tech: ['JavaScript', 'TypeScript'],
        link: '#'
      }
    ]
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
      {/* Section Header */}
      <motion.div
        className="flex items-center gap-8 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-mono text-xl text-indigo-500 font-bold">02</span>
        <h2 className="font-mono text-2xl font-bold uppercase tracking-[0.1em]">ПРОЕКТЫ</h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-neutral-700 to-transparent" />
      </motion.div>

      {/* Projects Grid */}
      <div className="flex flex-col gap-16">
        {projectCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          >
            <h3 className="font-mono text-lg text-indigo-500 mb-6 pl-2 border-l-2 border-indigo-500">
              {category.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    setRotateX((y - centerY) / 20)
    setRotateY((centerX - x) / 20)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.article
      className="project-card bg-neutral-900 border border-neutral-800 p-6 relative overflow-hidden cursor-pointer group"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`,
        transition: 'transform 0.1s ease-out, box-shadow 0.3s ease, border-color 0.3s ease'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        borderColor: 'rgb(51, 51, 51)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
      }}
    >
      {/* Left Border Accent */}
      <div className="absolute left-0 top-0 w-[3px] h-0 bg-indigo-500 transition-all duration-300 group-hover:h-full" />

      {/* Card Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="font-mono text-xs text-neutral-600">{project.number}</span>
        <span className="font-mono text-[10px] text-indigo-500 bg-indigo-500/10 px-2 py-1 uppercase tracking-[0.1em]">
          {project.tag}
        </span>
      </div>

      {/* Card Title */}
      <h4 className="text-xl font-semibold mb-2 text-white">{project.title}</h4>

      {/* Card Description */}
      <p className="text-neutral-400 text-sm leading-relaxed mb-6">{project.description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="font-mono text-xs text-neutral-500 bg-neutral-800 px-2 py-1 border border-neutral-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Card Link */}
      <a
        href={project.link}
        className="inline-flex items-center gap-2 text-indigo-500 font-mono text-sm group-hover:gap-3 transition-all duration-150"
      >
        <span>Открыть</span>
        <ArrowUpRight size={20} />
      </a>
    </motion.article>
  )
}
