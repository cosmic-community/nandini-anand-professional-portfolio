'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, X } from 'lucide-react'
import type { Project } from '@/types'

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  if (!projects || projects.length === 0) {
    return null
  }

  return (
    <section id="projects" className="bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-12 text-primary">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {project.metadata.featured_image && (
                  <img
                    src={`${project.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
                    alt={project.metadata.project_title}
                    className="w-full h-48 object-cover"
                    width="600"
                    height="300"
                  />
                )}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold">{project.metadata.project_title}</h3>
                    {project.metadata.project_type && (
                      <span className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-full">
                        {project.metadata.project_type.value}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {project.metadata.short_description}
                  </p>
                  {project.metadata.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.metadata.technologies.split(',').map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-muted rounded-md"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-background rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between">
              <h3 className="text-2xl font-semibold">{selectedProject.metadata.project_title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              {selectedProject.metadata.featured_image && (
                <img
                  src={`${selectedProject.metadata.featured_image.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
                  alt={selectedProject.metadata.project_title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                  width="800"
                  height="400"
                />
              )}

              <div className="mb-6">
                {selectedProject.metadata.project_type && (
                  <span className="inline-block px-3 py-1 text-sm bg-primary/20 text-primary rounded-full mb-4">
                    {selectedProject.metadata.project_type.value}
                  </span>
                )}
                {selectedProject.metadata.project_date && (
                  <p className="text-muted-foreground mb-4">
                    {selectedProject.metadata.project_date}
                  </p>
                )}
              </div>

              <div
                className="prose prose-lg dark:prose-invert max-w-none mb-6"
                dangerouslySetInnerHTML={{ __html: selectedProject.metadata.full_description }}
              />

              {selectedProject.metadata.technologies && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.metadata.technologies.split(',').map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-muted rounded-md"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.metadata.publication_link && (
                <a
                  href={selectedProject.metadata.publication_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink size={20} />
                  View Publication
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}