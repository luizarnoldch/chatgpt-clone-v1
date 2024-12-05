import GetChatHistory from '@/actions/completion/GetChatHistory'
import React from 'react'

type Props = {
  id: string
}

const ChatHistory = async ({ id }: Props) => {

  const chatHistory = await GetChatHistory(id)
  return (
    <p className='border border-red-500'>
      <p>ChatPage {id}</p>
      <div>{chatHistory}</div>
    </p>
  )
}

export default ChatHistory