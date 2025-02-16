import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Vortex AI Chatbot
        </h1>
      </div>
      <div className="mt-10">
        <Link 
          href="/chat" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Start Chatting
        </Link>
      </div>
    </main>
  )
}