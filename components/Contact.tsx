'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, MapPin } from 'lucide-react'
import type { PortfolioSettings } from '@/types'

interface ContactProps {
  settings: PortfolioSettings
}

export default function Contact({ settings }: ContactProps) {
  const { email, linkedin_url, location } = settings.metadata

  return (
    <section id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-8 text-primary">Get In Touch</h2>
          <p className="text-xl text-muted-foreground mb-12">
            I'm always open to discussing new projects, opportunities, or collaborations.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}
            <motion.a
              href={`mailto:${email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center gap-4 p-6 bg-background border border-border rounded-xl hover:shadow-lg transition-all"
            >
              <div className="p-4 bg-primary/10 rounded-full">
                <Mail size={32} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">{email}</p>
              </div>
            </motion.a>

            {/* LinkedIn */}
            {linkedin_url && (
              <motion.a
                href={linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-center gap-4 p-6 bg-background border border-border rounded-xl hover:shadow-lg transition-all"
              >
                <div className="p-4 bg-primary/10 rounded-full">
                  <Linkedin size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <p className="text-muted-foreground text-sm">Connect with me</p>
                </div>
              </motion.a>
            )}

            {/* Location */}
            {location && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col items-center gap-4 p-6 bg-background border border-border rounded-xl"
              >
                <div className="p-4 bg-primary/10 rounded-full">
                  <MapPin size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground text-sm">{location}</p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}