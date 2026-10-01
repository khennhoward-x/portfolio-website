'use client'

import { useEffect, useState } from 'react'

export function RotatingRole({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600)
    return () => clearInterval(id)
  }, [roles.length])

  return (
    <span>
      <span className="sr-only">{roles.join(', ')}</span>
      <span aria-hidden="true">
        <span className="italic">{'— '}</span>
        <span
          key={roles[index]}
          className="inline-block text-accent italic animate-in fade-in slide-in-from-bottom-2 duration-500"
        >
          {roles[index]}
        </span>
      </span>
    </span>
  )
}
