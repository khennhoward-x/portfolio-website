'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { projects, type Project } from '@/lib/portfolio-data'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'
import { SectionHeading } from './section-heading'

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]

export function Projects() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState<Project | null>(null)

  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="02"
          eyebrow="Projects"
          title="Selected work from the classroom and beyond."
          id="projects-title"
        />

        <div role="group" aria-label="Filter projects" className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={filter === cat}
              onClick={() => setFilter(cat)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm transition-colors',
                filter === cat
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'bg-card hover:border-accent hover:text-accent',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <ul className="grid gap-6 md:grid-cols-2">
          {visible.map((project) => (
            <li key={project.slug} className="animate-in fade-in zoom-in-95 duration-300">
              <button
                type="button"
                onClick={() => setSelected(project)}
                className="group flex w-full flex-col overflow-hidden rounded-2xl border bg-card text-left transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur">
                    {project.category}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <p className="text-sm text-muted-foreground">{project.year}</p>
                    <h3 className="mt-1 font-serif text-2xl">{project.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{project.summary}</p>
                  </div>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                    <span className="sr-only">View details for {project.title}</span>
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto p-0 sm:max-w-2xl">
          {selected && (
            <>
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={selected.image || '/placeholder.svg'}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 672px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 p-6 md:p-8">
                <p className="text-sm font-medium tracking-widest text-accent uppercase">
                  {selected.category} · {selected.year}
                </p>
                <DialogTitle className="font-serif text-3xl font-normal">{selected.title}</DialogTitle>
                <DialogDescription className="text-base leading-relaxed">
                  {selected.details}
                </DialogDescription>
                <ul className="mt-2 flex flex-col gap-3">
                  {selected.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-base">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                        <Check className="size-3" aria-hidden="true" />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
