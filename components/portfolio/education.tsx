import { Award, GraduationCap, MapPin } from 'lucide-react'
import { credentials, education } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function EducationSection() {
  return (
    <section id="education" aria-labelledby="education-title" className="border-t bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="04"
          eyebrow="Education"
          title="Always learning, in more than one language."
          id="education-title"
        />

        <ul className="flex flex-col gap-6">
          {education.map((edu) => (
            <li
              key={edu.degree}
              className="grid gap-8 overflow-hidden rounded-2xl border bg-card p-6 md:grid-cols-3 md:p-10"
            >
              <div className="flex flex-col gap-4">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <GraduationCap className="size-7" aria-hidden="true" />
                </span>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
                <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="size-3.5" aria-hidden="true" />
                  {edu.location}
                </p>
              </div>
              <div className="md:col-span-2">
                <h3 className="font-serif text-3xl leading-tight md:text-4xl">{edu.degree}</h3>
                <p className="mt-2 font-serif text-xl text-accent italic">{edu.major}</p>
                <p className="mt-1 text-muted-foreground">{edu.school}</p>
                <ul className="mt-6 grid gap-3 border-t pt-6 sm:grid-cols-3">
                  {edu.notes.map((note) => (
                    <li key={note} className="rounded-xl bg-secondary/60 p-4 text-sm leading-relaxed">
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-4 rounded-2xl border bg-card p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <h3 className="flex items-center gap-3 font-serif text-2xl">
            <Award className="size-6 text-accent" aria-hidden="true" />
            Credentials
          </h3>
          <ul className="flex flex-wrap gap-3">
            {credentials.map((credential) => (
              <li key={credential} className="rounded-full border bg-secondary/60 px-4 py-2 text-sm">
                {credential}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
