"use server";

import { redirect } from "next/navigation";

const GetChatHistory = async (id: string) => {
  console.log("get chat history");

  return `chatHistory ${id}`;
};

export default GetChatHistory;
