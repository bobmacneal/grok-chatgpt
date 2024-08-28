import Chat from "./components/Chat"

export default function Home() {
  return (
    <main className='mt-4 flex-col'>
      <h1 className='text-xl font-bold'>Chat GPT</h1>
      <Chat />
    </main>
  )
}
