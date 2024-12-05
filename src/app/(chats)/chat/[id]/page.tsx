import GetChatHistory from '@/actions/completion/GetChatHistory'
import React from 'react'

type Params = Promise<{ id: string }>

type ChatPageProps = {
  params: Params
}

const ChatPage = async ({ params }: ChatPageProps) => {
  const { id } = await params
  const chatHistory = await GetChatHistory(id)

  return (
    <div className='border border-red-500 flex-1'>
      <div className='border border-red-500'>
        ChatPage {id}
        <div>{chatHistory}</div>
      </div>
    </div>
  )
}

export default ChatPage