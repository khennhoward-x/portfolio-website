'use client'

import { useState } from 'react'
import { GraduationCap, Plane, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

const stops = [
  {
    id: 'ph',
    label: 'Philippines',
    caption: 'Where it began',
    icon: Sun,
    text: 'Raised in the Philippines, surrounded by stories, songs, and a community that values education. This is where I earned my degree and started teaching.',
  },
  {
    id: 'degree',
    label: 'BSEd, English',
    caption: 'Becoming a teacher',
    icon: GraduationCap,
    text: 'Studied the craft of teaching English — linguistics, literature, and pedagogy — and practiced it in real secondary classrooms.',
  },
  {
    id: 'fl',
    label: 'Jacksonville, FL',
    caption: 'Where I am now',
    icon: Plane,
    text: 'Now based in Jacksonville, Florida, bringing a cross-cultural perspective to every learner I work with.',
  },
]

export function Journey() {
  const [active, setActive] = useState(stops[stops.length - 1].id)
  const current = stops.find((s) => s.id === active) ?? stops[0]

  return (
    <div className="rounded-2xl bg-primary p-6 text-primary-foreground md:p-8">
      <p className="text-sm tracking-widest uppercase opacity-70">My journey</p>
      <p className="mt-1 font-serif text-2xl">Tap a stop to explore</p>

      <div role="tablist" aria-label="My journey" className="relative mt-8 flex flex-col gap-2">
        <span
          aria-hidden="true"
          className="absolute top-6 bottom-6 left-[1.4rem] w-px border-l border-dashed border-primary-foreground/30"
        />
        {stops.map((stop) => {
          const Icon = stop.icon
          const isActive = stop.id === active
          return (
            <button
              key={stop.id}
              role="tab"
              type="button"
              id={`tab-${stop.id}`}
              aria-selected={isActive}
              aria-controls="journey-panel"
              onClick={() => setActive(stop.id)}
              className={cn(
                'relative flex items-center gap-4 rounded-xl p-2 text-left transition-colors',
                isActive ? 'bg-primary-foreground/10' : 'hover:bg-primary-foreground/5',
              )}
            >
              <span
                className={cn(
                  'flex size-7 shrink-0 items-center justify-center rounded-full transition-colors ml-1',
                  isActive ? 'bg-accent text-accent-foreground' : 'bg-primary-foreground/15',
                )}
              >
                <Icon className="size-3.5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-medium">{stop.label}</span>
                <span className="block text-sm opacity-70">{stop.caption}</span>
              </span>
            </button>
          )
        })}
      </div>

      <p
        id="journey-panel"
        role="tabpanel"
        aria-labelledby={`tab-${current.id}`}
        key={current.id}
        className="mt-6 border-t border-primary-foreground/15 pt-6 leading-relaxed opacity-90 animate-in fade-in duration-300"
      >
        {current.text}
      </p>
    </div>
  )
}
