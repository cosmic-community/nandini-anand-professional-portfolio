'use client'

import { motion } from 'framer-motion'
import type { ExperienceEntry } from '@/types'

interface ExperienceProps {
  experiences: ExperienceEntry[]
}

export default function Experience({ experiences }: ExperienceProps) {
  if (!experiences || experiences.length === 0) {
    return null
  }

  return (
    <section id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-16 text-primary">Experience</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}>
                    <div className="bg-background border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      {exp.metadata.company_logo && (
                        <img
                          src={`${exp.metadata.company_logo.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                          alt={exp.metadata.company_name}
                          className="w-16 h-16 rounded-lg mb-4 object-cover"
                          width="64"
                          height="64"
                        />
                      )}
                      <h3 className="text-xl font-semibold mb-2">
                        {exp.metadata.role}
                      </h3>
                      <p className="text-primary font-medium mb-2">
                        {exp.metadata.company_name}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {exp.metadata.start_date} -{' '}
                        {exp.metadata.current ? 'Present' : exp.metadata.end_date}
                      </p>
                      <div
                        className="prose prose-sm dark:prose-invert"
                        dangerouslySetInnerHTML={{ __html: exp.metadata.description }}
                      />
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}