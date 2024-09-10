"use client"

// Lib
import React from 'react';

// Stores
import { useChatStore } from '@/stores/chat-store';

type Props = { params: { id: string } };

const ChatWithID = ({ params }: Props) => {
  const chat = useChatStore((state) => state.getChatById(params.id));

  if (!chat) {
    return <div>No chat found with ID {params.id}</div>;
  }

  return (
    <section className='max-w-7xl mx-auto p-4'>
      <div className='space-y-4'>
        {chat.messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.user === 'Person' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`${
                message.user === 'Person' ? 'bg-primary' : 'bg-secondary'
              } p-3 rounded-lg max-w-md`}
            >
              <p className='font-bold'>{message.user}</p>
              <p>{message.message}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChatWithID;
