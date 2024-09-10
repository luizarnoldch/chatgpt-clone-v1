"use client"

// Lib
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid';

// Components

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

// Store
import { useChatStore } from '@/stores/chat-store';

// Icons
import { SendIcon } from 'lucide-react';

type ChatBoxProps = {};

const ChatBox: React.FC<ChatBoxProps> = () => {
  const [input, setInput] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { addUserMessage, createChat } = useChatStore((state) => ({
    addUserMessage: state.addUserMessage,
    createChat: state.createChat
  }));
  const router = useRouter()

  const sendMessage = () => {
    if (!input.trim()) return;

    // Generar un UUID
    const uuid = uuidv4();

    // Crear nuevo chat
    createChat(uuid);

    // Añadir mensaje del usuario al chat recién creado
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
    setInput('');
  };

  // Handle input change and adjust height
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    adjustHeight();
  };

  const adjustHeight = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = Math.min(textAreaRef.current.scrollHeight, 600) + "px";
    }
  };

  return (
    <div className="border-t p-4 flex bg-background gap-2 justify-center items-center max-w-7xl mx-auto rounded-lg">
      <div className="flex flex-1 justify-center items-center overflow-hidden">
        <Textarea
          ref={textAreaRef}
          placeholder="Type a message..."
          value={input}
          onChange={handleChange}
          rows={1}
          className="w-full resize-none p-4 border rounded-md"
          style={{
            maxHeight: "600px",
            minHeight: "60px",
          }}
        />
      </div>
      <Button onClick={sendMessage} className="" size='icon' disabled={input.length < 1}>
        <SendIcon />
      </Button>
    </div>
  );
};

export default ChatBox;
