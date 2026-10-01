import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  streamText,
  toUIMessageStream,
  type UIMessage,
} from 'ai'
import { chatInstructions } from '@/lib/chat-context'

export const maxDuration = 30

const MAX_MESSAGES = 20
const MAX_MESSAGE_CHARS = 1000
const DEFAULT_MODEL = 'openai/gpt-5.4-mini'

function isValidMessages(value: unknown): value is UIMessage[] {
  if (!Array.isArray(value) || value.length === 0 || value.length > MAX_MESSAGES) return false
  return value.every((message) => {
    if (!message || typeof message !== 'object') return false
    const { role, parts } = message as UIMessage
    if (role !== 'user' && role !== 'assistant') return false
    if (!Array.isArray(parts)) return false
    return parts.every(
      (part) => part.type !== 'text' || (typeof part.text === 'string' && part.text.length <= MAX_MESSAGE_CHARS * 4),
    )
  })
}

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const messages = (body as { messages?: unknown })?.messages
  if (!isValidMessages(messages)) {
    return Response.json({ error: 'Invalid messages.' }, { status: 400 })
  }

  const lastMessage = messages[messages.length - 1]
  const lastText = lastMessage.parts
    .map((part) => (part.type === 'text' ? part.text : ''))
    .join('')
    .trim()
  if (lastMessage.role !== 'user' || !lastText || lastText.length > MAX_MESSAGE_CHARS) {
    return Response.json({ error: `Questions must be between 1 and ${MAX_MESSAGE_CHARS} characters.` }, { status: 400 })
  }

  const result = streamText({
    model: process.env.CHATBOT_MODEL || DEFAULT_MODEL,
    instructions: chatInstructions,
    messages: await convertToModelMessages(messages),
    maxOutputTokens: 600,
  })

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  })
}
