'use client'

import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

export function ChatInterface() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<string[]>([])

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message])
      setMessage('')
      // TODO: Implement AI response logic
    }
  }

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto">
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className="mb-2 p-2 bg-gray-100 rounded"
          >
            {msg}
          </div>
        ))}
      </div>
      <div className="flex p-4">
        <Input 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow mr-2"
        />
        <Button onClick={handleSendMessage}>
          Send
        </Button>
      </div>
    </div>
  )
}