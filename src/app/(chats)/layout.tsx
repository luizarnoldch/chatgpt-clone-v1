import React from 'react'

type ChatLayoutProps = {
  children?: React.ReactNode
}

const ChatLayout = ({ children }: ChatLayoutProps) => {
  return (
    <div className='h-full w-full'>
      {children}
    </div>
  )
}

export default ChatLayout