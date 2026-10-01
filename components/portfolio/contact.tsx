import { MapPin } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { CopyEmail } from './copy-email'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-primary py-24 text-primary-foreground md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="mb-3 flex items-center gap-3 text-sm font-medium tracking-widest text-accent uppercase">
          <span className="font-serif">05</span>
          <span className="h-px w-10 bg-accent" aria-hidden="true" />
          Contact
        </p>
        <h2 id="contact-title" className="max-w-4xl font-serif text-5xl leading-tight tracking-tight text-balance md:text-7xl">
          Let&apos;s write the next chapter together.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed opacity-80">
          Whether you&apos;re a school, a parent, or a learner looking for an English teacher or tutor, I&apos;d love to hear from you.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Email me
          </a>
          <CopyEmail email={profile.email} />
        </div>

        <footer className="mt-24 flex flex-col gap-6 border-t border-primary-foreground/15 pt-8 text-sm md:flex-row md:items-center md:justify-between">
          <p className="flex items-center gap-2 opacity-70">
            <MapPin className="size-4" aria-hidden="true" />
            {profile.location}
          </p>
          <ul className="flex gap-6">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="opacity-70">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </footer>
      </div>
    </section>
  )
}
