'use client'

import { useChat } from '@ai-sdk/react'
import { AlertCircle, ArrowUp, MessageCircle, RotateCcw, Square, X } from 'lucide-react'
import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from 'react'
import { profile } from '@/lib/portfolio-data'

const SUGGESTED_QUESTIONS = [
  `What management experience does ${profile.firstName} have?`,
  `What did ${profile.firstName} do as a teaching assistant?`,
  `What are ${profile.firstName}'s skills?`,
  `What projects has ${profile.firstName} worked on?`,
  `What type of opportunities is ${profile.firstName} looking for?`,
]

const MAX_CHARS = 1000

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const { messages, sendMessage, status, error, regenerate, stop, clearError, setMessages } = useChat()
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const isBusy = status === 'submitted' || status === 'streaming'
  const lastMessage = messages[messages.length - 1]
  const showTyping = status === 'submitted' || (status === 'streaming' && lastMessage?.role !== 'assistant')

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, status])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const ask = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || isBusy) return
    if (error) clearError()
    sendMessage({ text: trimmed.slice(0, MAX_CHARS) })
    setInput('')
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    ask(input)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      if (e.nativeEvent.isComposing || e.keyCode === 229) return
      e.preventDefault()
      ask(input)
    }
  }

  return (
    <>
      {open && (
        <section
          id="ask-about-me"
          role="dialog"
          aria-label={`Ask about ${profile.firstName}`}
          className="fixed inset-x-3 bottom-20 z-50 flex max-h-[min(640px,calc(100dvh-7rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-2xl animate-in fade-in slide-in-from-bottom-4 sm:inset-x-auto sm:right-6 sm:bottom-24 sm:w-[400px]"
        >
          <header className="flex items-center justify-between gap-3 bg-primary px-5 py-4 text-primary-foreground">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex size-9 items-center justify-center rounded-full bg-accent font-serif text-sm text-accent-foreground"
              >
                {profile.initials}
              </span>
              <div>
                <h2 className="font-serif text-lg leading-tight">Ask About {profile.firstName}</h2>
                <p className="text-xs opacity-75">Answers based on this portfolio</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {messages.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    stop()
                    clearError()
                    setMessages([])
                  }}
                  className="rounded-full p-2 transition-colors hover:bg-primary-foreground/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  aria-label="Start a new conversation"
                >
                  <RotateCcw className="size-4" aria-hidden="true" />
                </button>
              )}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-2 transition-colors hover:bg-primary-foreground/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                aria-label="Close chat"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>
          </header>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-5" aria-live="polite" aria-busy={isBusy}>
            {messages.length === 0 ? (
              <div className="flex flex-col gap-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {`Hi! I can answer questions about ${profile.firstName}'s experience, skills, education, and projects. Try one of these:`}
                </p>
                <ul className="flex flex-col gap-2">
                  {SUGGESTED_QUESTIONS.map((question) => (
                    <li key={question}>
                      <button
                        type="button"
                        onClick={() => ask(question)}
                        className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-left text-sm transition-colors hover:border-accent hover:text-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                      >
                        {question}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <ol className="flex flex-col gap-3">
                {messages.map((message) => {
                  const text = message.parts
                    .map((part) => (part.type === 'text' ? part.text : ''))
                    .join('')
                  if (!text) return null
                  const isUser = message.role === 'user'
                  return (
                    <li key={message.id} className={isUser ? 'flex justify-end' : 'flex justify-start'}>
                      <div
                        className={
                          isUser
                            ? 'max-w-[85%] rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap text-primary-foreground'
                            : 'max-w-[85%] rounded-2xl rounded-bl-md bg-muted px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap text-foreground'
                        }
                      >
                        <span className="sr-only">{isUser ? 'You: ' : `${profile.firstName}'s assistant: `}</span>
                        {text}
                      </div>
                    </li>
                  )
                })}
                {showTyping && (
                  <li className="flex justify-start">
                    <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-muted px-4 py-3.5">
                      <span className="sr-only">Thinking…</span>
                      <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                      <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                      <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground" />
                    </div>
                  </li>
                )}
              </ol>
            )}

            {error && (
              <div
                role="alert"
                className="mt-4 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 px-3.5 py-3 text-sm"
              >
                <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
                <div className="flex-1">
                  <p className="text-foreground">Sorry, something went wrong while getting an answer.</p>
                  <button
                    type="button"
                    onClick={() => {
                      clearError()
                      regenerate()
                    }}
                    className="mt-1 font-medium text-accent underline-offset-4 hover:underline"
                  >
                    Try again
                  </button>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-border bg-background p-3">
            <div className="flex items-end gap-2 rounded-xl border border-input bg-card px-3 py-2 focus-within:ring-2 focus-within:ring-ring/50">
              <label htmlFor="chat-input" className="sr-only">
                {`Ask a question about ${profile.firstName}`}
              </label>
              <textarea
                id="chat-input"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                maxLength={MAX_CHARS}
                placeholder={`Ask about ${profile.firstName}'s background…`}
                className="max-h-28 min-h-6 flex-1 resize-none bg-transparent py-1 text-base outline-none placeholder:text-muted-foreground sm:text-sm"
              />
              {isBusy ? (
                <button
                  type="button"
                  onClick={() => stop()}
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90"
                  aria-label="Stop generating"
                >
                  <Square className="size-3.5 fill-current" aria-hidden="true" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
                  aria-label="Send question"
                >
                  <ArrowUp className="size-4" aria-hidden="true" />
                </button>
              )}
            </div>
            <p className="mt-2 px-1 text-[11px] text-muted-foreground">
              AI answers are based only on this portfolio and may not be complete.
            </p>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="ask-about-me"
        className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg ring-1 ring-primary-foreground/10 transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:right-6 sm:bottom-6"
      >
        {open ? (
          <X className="size-4" aria-hidden="true" />
        ) : (
          <MessageCircle className="size-4 text-accent" aria-hidden="true" />
        )}
        {open ? 'Close' : 'Ask About Me'}
      </button>
    </>
  )
}
