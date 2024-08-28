"use server"

// eslint-disable-next-line import/no-extraneous-dependencies
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function getCompletion(prompt: string) {
  const response = await openai.chat.completions.create({
    model: process.env.OPENAI_CHAT_MODEL,
    messages: [{ role: "user", content: prompt }],
  })
  return response.choices[0].message
}
