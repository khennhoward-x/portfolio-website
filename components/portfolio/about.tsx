import { profile } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { Journey } from './journey'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="01"
          eyebrow="About me"
          title="A teacher shaped by two homes and a love of language."
          id="about-title"
        />

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-3">
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-pretty">
                {paragraph}
              </p>
            ))}

            <dl className="mt-4 grid grid-cols-3 gap-4 border-y py-8">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <dt className="text-sm text-muted-foreground">{stat.label}</dt>
                  <dd className="order-first font-serif text-4xl md:text-5xl">{stat.value}</dd>
                </div>
              ))}
            </dl>

            <div>
              <h3 className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">
                What I bring
              </h3>
              <ul className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border bg-card px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Journey />
          </div>
        </div>
      </div>
    </section>
  )
}
