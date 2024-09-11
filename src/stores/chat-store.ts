import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type Message = {
  user: string;
  message: string;
};

type Chat = {
  id: string;
  messages: Message[];
};

type ChatStore = {
  chats: Record<string, Chat>;
  getChatById: (id: string) => Chat | undefined;
  createChat: (id: string) => void;
  setChats: (chats: Record<string, Chat>) => void;
  addUserMessage: (message: string, id: string) => void;
  addSystemMessage: (message: string, id: string) => void;
};

export const useChatStore = create<ChatStore>()(
  immer((set, get) => ({
    chats: {},

    getChatById: (id: string) => get().chats[id],

    createChat: (id: string) => {
      set((state) => {
        if (!state.chats[id]) {
          state.chats[id] = { id, messages: [] };
        }
      });
    },

    setChats: (chats: Record<string, Chat>) => { // Implement setChats
      set((state) => {
        state.chats = chats;
      });
    },

    addUserMessage: (message: string, id: string) => {
      set((state) => {
        const chat = state.chats[id];
        if (chat) {
          chat.messages.push({ user: "Person", message });
        }
      });
    },

    addSystemMessage: (message: string, id: string) => {
      set((state) => {
        const chat = state.chats[id];
        if (chat) {
          chat.messages.push({ user: "Robot", message });
        }
      });
    },
  }))
);
