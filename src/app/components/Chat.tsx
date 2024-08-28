"use client"

import { useState } from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import { uuid } from "uuidv4"

import ProgressBar from "@/app/components/ProgressBar"
import { getCompletion } from "@/app/server-actions/getCompletion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  role: "user" | "assistant"
  refusal?: any
  content: string | null
}

export default function Chat() {
  const [message, setMessage] = useState<string>("")
  const [messages, setMessages] = useState<Message[]>([])
  const [makingProgress, setMakingProgress] = useState<boolean>(false)

  const onClick = async () => {
    setMakingProgress(true)
    const messageHistory: Message[] = JSON.parse(JSON.stringify(messages))
    messageHistory.push({ role: "user", content: message })
    const completions: any = await getCompletion(message)
    messageHistory.push({
      role: completions.role ? completions.role : "assistant",
      content: completions.content ? completions.content : "",
    })
    setMessage("")
    setMessages(messageHistory)
    setMakingProgress(false)
  }

  return (
    <div className='flex flex-col'>
      {messages.map((message) => (
        <div key={uuid()} className='mb-5 flex flex-col'>
          <div
            className={`${
              message.role === "user" ? "bg-inherit" : "bg-blue-100"
            } rounded-md px-8 py-2`}
          >
            {message.content}
          </div>
        </div>
      ))}
      <div className='-ml-1 mt-3 flex-col pt-3'>
        <div>{makingProgress && <ProgressBar />}</div>
        <div className='mt-1.5 flex'>
          <Input
            className='grow'
            placeholder='Prompt for Chat GPT'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                onClick().then()
              }
            }}
          />
          <Button onClick={onClick} className='ml-3'>
            Send Inquiry
          </Button>
        </div>
      </div>
    </div>
  )
}
