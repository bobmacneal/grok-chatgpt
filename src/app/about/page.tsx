export default function AboutRoute() {
  return (
    <main className='mt-4'>
      <h1 className='text-xl font-bold'>About</h1>
      <div className='my-5 text-sm'>
        <span className='text-gray-500'>
          Invokes ChatGPT model{" "}
          <b>{process.env.NEXT_PUBLIC_OPENAI_CHAT_MODEL}</b> by{" "}
        </span>
        <a href='https://openai.com/chatgpt/' target='_blank'>
          OpenAI
        </a>
        .
      </div>
    </main>
  )
}
