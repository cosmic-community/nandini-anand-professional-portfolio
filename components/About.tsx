'use client'

import { motion } from 'framer-motion'
import type { PortfolioSettings } from '@/types'

interface AboutProps {
  settings: PortfolioSettings
}

export default function About({ settings }: AboutProps) {
  const { about_bio, profile_photo, education } = settings.metadata

  return (
    <section id="about" className="bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-12 text-primary">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            {profile_photo && (
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center"
              >
                <img
                  src={`${profile_photo.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
                  alt="Profile"
                  className="rounded-2xl shadow-2xl w-full max-w-md"
                  width="400"
                  height="400"
                />
              </motion.div>
            )}

            {/* Bio and Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: about_bio }}
              />

              {education && (
                <div className="mt-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Education</h3>
                  <div
                    className="prose dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: education }}
                  />
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}