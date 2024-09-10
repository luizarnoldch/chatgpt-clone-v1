import { create } from 'zustand';

interface Message {
  user: 'Person' | 'System';
  message: string;
}

interface Chat {
  id: string;
  messages: Message[];
}

interface ChatStore {
  chats: Chat[];
  addUserMessage: (message: string, chatId: string) => void;
  addSystemMessage: (message: string, chatId: string) => void;
  createChat: (id: string) => void;
  getChatById: (id: string) => Chat | undefined;
}

export const useChatStore = create<ChatStore>((set, get) => ({
  chats: [],

  createChat: (id: string) => {
    set((state) => ({
      chats: [...state.chats, { id, messages: [] }],
    }));
  },

  addUserMessage: (message: string, chatId: string) => {
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === chatId
          ? { ...chat, messages: [...chat.messages, { user: 'Person', message }] }
          : chat
      ),
    }));
  },

  addSystemMessage: (message: string, chatId: string) => {
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === chatId
          ? { ...chat, messages: [...chat.messages, { user: 'System', message }] }
          : chat
      ),
    }));
  },

  getChatById: (id: string) => {
    return get().chats.find((chat) => chat.id === id);
  },
}));
