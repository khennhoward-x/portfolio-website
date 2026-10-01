import { SiteHeader } from '@/components/portfolio/site-header'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Projects } from '@/components/portfolio/projects'
import { ExperienceSection } from '@/components/portfolio/experience'
import { EducationSection } from '@/components/portfolio/education'
import { Contact } from '@/components/portfolio/contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Projects />
        <ExperienceSection />
        <EducationSection />
        <Contact />
      </main>
    </>
  )
}
