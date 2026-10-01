'use client'

import { useState } from 'react'
import { ChevronDown, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import { experiences } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="03"
          eyebrow="Work experience"
          title="Where I've worked, led, and grown."
          id="experience-title"
        />

        <ol className="relative flex flex-col border-l md:ml-4">
          {experiences.map((exp, i) => {
            const isOpen = openIndex === i
            const panelId = `exp-panel-${i}`
            return (
              <li key={exp.role + exp.period} className="relative pb-6 pl-8 last:pb-0 md:pl-12">
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute top-7 -left-[7px] size-3.5 rounded-full border-2 border-background transition-colors',
                    isOpen ? 'bg-accent' : 'bg-border',
                  )}
                />
                <div
                  className={cn(
                    'rounded-2xl border transition-colors',
                    isOpen ? 'bg-card shadow-sm' : 'hover:bg-card',
                  )}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="flex w-full flex-col gap-2 p-6 text-left md:flex-row md:items-center md:justify-between"
                    >
                      <span>
                        <span className="block text-sm text-accent">{exp.period}</span>
                        <span className="mt-1 block font-serif text-2xl">{exp.role}</span>
                        <span className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                          {exp.organization}
                          <span aria-hidden="true">·</span>
                          <MapPin className="size-3.5" aria-hidden="true" />
                          {exp.location}
                        </span>
                      </span>
                      <ChevronDown
                        aria-hidden="true"
                        className={cn('size-5 shrink-0 transition-transform', isOpen && 'rotate-180')}
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    className={cn(
                      'grid transition-[grid-template-rows] duration-300',
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                    )}
                  >
                    <div className="overflow-hidden" inert={!isOpen}>
                      <div className="border-t px-6 pt-4 pb-6">
                        <p className="leading-relaxed text-muted-foreground">{exp.description}</p>
                        <ul className="mt-4 flex flex-col gap-2">
                          {exp.achievements.map((a) => (
                            <li key={a} className="flex gap-3">
                              <span className="mt-2.5 h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
