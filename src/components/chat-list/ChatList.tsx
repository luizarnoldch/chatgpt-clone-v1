// components/ChatList.tsx
import React, { useEffect } from 'react';
import ChatListItem from './ChatListItem';
import { useChatStore } from '@/stores/chat-store';

const ChatList = () => {
  const chats = useChatStore((state) => state.chats);
  // const setChats = useChatStore((state) => state.setChats);

  // Al cargar el componente, obtener los chats desde el backend
  // useEffect(() => {
  //   const fetchChats = async () => {
  //     try {
  //       const response = await fetch("/api/chats");
  //       const data = await response.json();
  //       setChats(data); // Guardar los chats obtenidos en el store
  //     } catch (error) {
  //       console.error("Error fetching chats:", error);
  //     }
  //   };

  //   fetchChats();
  // }, [setChats]);

  return (
    <div className='flex flex-col h-full w-full'>
      <h3 className='text-lg py-2'>Chats</h3>
      <div className='flex flex-col gap-2'>
        {chats.map((chat) => (
          <ChatListItem key={chat.id} href={`/chat/${chat.id}`}>{chat.id}</ChatListItem>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
