export function SectionHeading({
  index,
  eyebrow,
  title,
  id,
}: {
  index: string
  eyebrow: string
  title: string
  id: string
}) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="mb-3 flex items-center gap-3 text-sm font-medium tracking-widest text-accent uppercase">
        <span className="font-serif">{index}</span>
        <span className="h-px w-10 bg-accent" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="max-w-3xl font-serif text-4xl leading-tight tracking-tight text-balance md:text-5xl">
        {title}
      </h2>
    </div>
  )
}
