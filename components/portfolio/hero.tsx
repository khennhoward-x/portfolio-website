import Image from 'next/image'
import { ArrowDown, MapPin } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { RotatingRole } from './rotating-role'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm text-muted-foreground">
          <MapPin className="size-4 text-accent" aria-hidden="true" />
          {profile.origin} → {profile.location}
        </p>

        <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight text-balance md:text-7xl">
          Hi, I&apos;m {profile.name}.
        </h1>

        <p className="mt-6 font-serif text-2xl text-muted-foreground md:text-3xl">
          <RotatingRole roles={profile.roles} />
        </p>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
          {profile.intro}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            View my projects
          </a>
          <a
            href="#contact"
            className="rounded-full border bg-card px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
          >
            Get in touch
          </a>
        </div>

        <a
          href="#about"
          className="mt-20 hidden items-center gap-2 text-sm text-muted-foreground hover:text-foreground md:inline-flex"
        >
          <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
          Scroll to explore
        </a>
        </div>

        <figure className="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border-2 border-accent/60"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border bg-muted shadow-xl">
              <Image
                src="/images/profile.jpg"
                alt={`${profile.name} sitting on a couch at home`}
                fill
                priority
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 384px, 90vw"
                className="object-cover object-[50%_40%] transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
          <figcaption className="mt-6 text-center text-sm text-muted-foreground">
            Currently based in {profile.location}
          </figcaption>
        </figure>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-[28rem] rounded-full bg-accent/15 blur-3xl md:size-[40rem]"
      />
    </section>
  )
}
