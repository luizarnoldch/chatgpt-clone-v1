"use server";

import { revalidateTag } from "next/cache";

export async function CreateConversation(formData: FormData) {
  // Convert FormData to a usable object
  const rawFormData = Object.fromEntries(formData);
  const message = rawFormData.message;

  console.log(message)

  if (!message) {
    console.error("Message is required to create a conversation");
    return "Message is required to create a conversation";
  }

  try {
    // Send POST request to the server
    const response = await fetch("http://localhost:4000/v1/conversation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to create conversation. Status: ${response.status}`
      );
    }

    // Parse the response
    const data = await response.json();

    // Trigger revalidation for tags to refresh cached data
    revalidateTag("list-conversations");

    console.log("Successfully created new conversation:", data);
    return data;
  } catch (error) {
    console.error("Failed to create the conversation:", error);
    return "Failed to create the conversation";
  }
}
