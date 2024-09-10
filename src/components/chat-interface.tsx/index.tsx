"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageSquare, Send, Plus } from 'lucide-react'

interface Message {
  id: number
  content: string
  sender: 'user' | 'ai'
}

interface Thread {
  id: number
  name: string
  messages: Message[]
}

export default function ChatInterface() {
  const [threads, setThreads] = useState<Thread[]>([
    { id: 1, name: 'Welcome Thread', messages: [{ id: 1, content: 'Welcome to ChatGPT clone!', sender: 'ai' }] }
  ])
  const [currentThreadId, setCurrentThreadId] = useState(1)
  const [inputMessage, setInputMessage] = useState('')

  const currentThread = threads.find(thread => thread.id === currentThreadId) || threads[0]

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return

    const newMessage: Message = {
      id: currentThread.messages.length + 1,
      content: inputMessage,
      sender: 'user'
    }

    const updatedThreads = threads.map(thread =>
      thread.id === currentThreadId
        ? { ...thread, messages: [...thread.messages, newMessage] }
        : thread
    )

    setThreads(updatedThreads)
    setInputMessage('')

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: currentThread.messages.length + 2,
        content: `AI response to: "${inputMessage}"`,
        sender: 'ai'
      }
      const threadsWithAiResponse = updatedThreads.map(thread =>
        thread.id === currentThreadId
          ? { ...thread, messages: [...thread.messages, aiResponse] }
          : thread
      )
      setThreads(threadsWithAiResponse)
    }, 1000)
  }

  const handleNewThread = () => {
    const newThread: Thread = {
      id: threads.length + 1,
      name: `New Thread ${threads.length + 1}`,
      messages: []
    }
    setThreads([...threads, newThread])
    setCurrentThreadId(newThread.id)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <Button onClick={handleNewThread} className="w-full mb-4">
          <Plus className="mr-2 h-4 w-4" /> New Thread
        </Button>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          {threads.map(thread => (
            <Button
              key={thread.id}
              variant={thread.id === currentThreadId ? "secondary" : "ghost"}
              className="w-full justify-start mb-2"
              onClick={() => setCurrentThreadId(thread.id)}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              {thread.name}
            </Button>
          ))}
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Messages */}
        <ScrollArea className="flex-1 p-4">
          {currentThread.messages.map(message => (
            <div
              key={message.id}
              className={`mb-4 p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-200'
                } max-w-[80%]`}
            >
              {message.content}
            </div>
          ))}
        </ScrollArea>

        {/* Input Area */}
        <div className="p-4 bg-white border-t">
          <div className="flex space-x-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              onKeyUp={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button onClick={handleSendMessage}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}