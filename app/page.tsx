import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Certificates from '@/components/Certificates'
import Contact from '@/components/Contact'
import ScrollProgress from '@/components/ScrollProgress'
import {
  getPortfolioSettings,
  getExperiences,
  getProjects,
  getSkills,
  getCertificates,
} from '@/lib/cosmic'

export default async function Home() {
  // Fetch all data server-side
  const [settings, experiences, projects, skills, certificates] = await Promise.all([
    getPortfolioSettings(),
    getExperiences(),
    getProjects(),
    getSkills(),
    getCertificates(),
  ])

  if (!settings) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-muted-foreground">Portfolio settings not found</p>
      </div>
    )
  }

  return (
    <>
      <ScrollProgress />
      <Navigation settings={settings} />
      <main className="min-h-screen">
        <Hero settings={settings} />
        <About settings={settings} />
        <Experience experiences={experiences} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Certificates certificates={certificates} />
        <Contact settings={settings} />
      </main>
    </>
  )
}