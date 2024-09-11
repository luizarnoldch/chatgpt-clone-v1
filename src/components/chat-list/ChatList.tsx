import React, { useEffect } from 'react';
import ChatListItem from './ChatListItem';
import { useChatStore } from '@/stores/chat-store';

const ChatList: React.FC = () => {
  const chats = useChatStore((state) => state.chats);
  // const setChats = useChatStore((state) => state.createChat); // Ensure you are setting chats correctly

  // Fetch chats from the backend when the component mounts
  // useEffect(() => {
  //   const fetchChats = async () => {
  //     try {
  //       const response = await fetch('/api/chats');
  //       const data = await response.json();
  //       setChats(data); // Store chats in Zustand (you might need to adjust if `setChats` has a different name)
  //     } catch (error) {
  //       console.error('Error fetching chats:', error);
  //     }
  //   };

  //   fetchChats();
  // }, [setChats]);

  return (
    <div className="flex flex-col h-full w-full">
      <h3 className="text-lg py-2">Chats</h3>
      <div className="flex flex-col gap-2">
        {Object.values(chats).length > 0 ? ( // Convert object to array
          Object.values(chats).map((chat) => (
            <ChatListItem key={chat.id} href={`/chat/${chat.id}`}>
              {chat.id}
            </ChatListItem>
          ))
        ) : (
          <p>No chats available.</p>
        )}
      </div>
    </div>
  );
};

export default ChatList;
