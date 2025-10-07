'use client'

import { motion } from 'framer-motion'
import type { Skill } from '@/types'

interface SkillsProps {
  skills: Skill[]
}

export default function Skills({ skills }: SkillsProps) {
  if (!skills || skills.length === 0) {
    return null
  }

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.metadata.skill_category.key
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  const categoryOrder = ['technical', 'interpersonal', 'tools']
  const categoryLabels = {
    technical: 'Technical Skills',
    interpersonal: 'Interpersonal Skills',
    tools: 'Tools & Software',
  }

  return (
    <section id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-12 text-primary">Skills</h2>

          <div className="space-y-12">
            {categoryOrder
              .filter(categoryKey => {
                const skills = skillsByCategory[categoryKey]
                return skills && skills.length > 0
              })
              .map((categoryKey) => {
                const categorySkills = skillsByCategory[categoryKey]
                
                if (!categorySkills || categorySkills.length === 0) {
                  return null
                }

                return (
                  <motion.div
                    key={categoryKey}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-background border border-border rounded-xl p-8 shadow-lg"
                  >
                    <h3 className="text-2xl font-semibold mb-6 text-primary">
                      {categoryLabels[categoryKey as keyof typeof categoryLabels]}
                    </h3>
                    <div className="space-y-6">
                      {categorySkills.map((skill, index) => (
                        <div key={skill.id}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              {skill.metadata.icon_emoji && (
                                <span className="text-2xl">{skill.metadata.icon_emoji}</span>
                              )}
                              <span className="font-medium">{skill.metadata.skill_name}</span>
                            </div>
                            {skill.metadata.proficiency_level && (
                              <span className="text-muted-foreground">
                                {skill.metadata.proficiency_level}%
                              </span>
                            )}
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.metadata.proficiency_level || 0}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}