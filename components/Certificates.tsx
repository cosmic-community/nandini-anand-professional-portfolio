'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import type { Certificate } from '@/types'

interface CertificatesProps {
  certificates: Certificate[]
}

export default function Certificates({ certificates }: CertificatesProps) {
  if (!certificates || certificates.length === 0) {
    return null
  }

  return (
    <section id="certificates" className="bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-12 text-primary">Certificates</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                {cert.metadata.certificate_image && (
                  <img
                    src={`${cert.metadata.certificate_image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                    alt={cert.metadata.certificate_title}
                    className="w-full h-48 object-cover"
                    width="400"
                    height="300"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {cert.metadata.certificate_title}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {cert.metadata.issuing_org}
                  </p>
                  {cert.metadata.issue_date && (
                    <p className="text-sm text-muted-foreground mb-3">
                      {cert.metadata.issue_date}
                    </p>
                  )}
                  {cert.metadata.description && (
                    <p className="text-sm text-muted-foreground mb-4">
                      {cert.metadata.description}
                    </p>
                  )}
                  {cert.metadata.verification_link && cert.metadata.verification_link !== '#' && (
                    <a
                      href={cert.metadata.verification_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      Verify Certificate
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}