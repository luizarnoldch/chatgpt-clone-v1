"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { useChatStore } from '@/stores/chat-store';
import Topvar from '@/components/topvar/Topvar';
import ChatBox from '@/components/chat-box/ChatBox';

const HomePage = () => {
  const { addUserMessage, createChat } = useChatStore();
  const router = useRouter();

  const sendMessage = (input: string) => {
    if (!input.trim()) return;

    const uuid = uuidv4();
    createChat(uuid);
    addUserMessage(input, uuid);

    // Realizar un fetch POST para registrar el chat en el backend
    // try {
    //   await fetch("/api/chats", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ message: input, id: uuid }),
    //   });
    // } catch (error) {
    //   console.error("Error saving chat:", error);
    // }

    router.push(`/chat/${uuid}`);
  };

  return (
    <section className='bg-secondary h-screen w-full p-4 flex-1 flex flex-col'>
      <Topvar />
      <div className='flex-1 m-6' />
      <ChatBox handleButton={sendMessage} />
    </section>
  );
};

export default HomePage;



