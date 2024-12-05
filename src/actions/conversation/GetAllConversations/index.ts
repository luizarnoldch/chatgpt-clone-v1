"use server";

export async function GetAllConversations() {
  try {
    const response = await fetch("http://localhost:4000/v1/conversation", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      // cache: "no-store",
      next: { tags: ["list-conversations"] },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Successfully retrieved all conversations.");
    return data;
  } catch (error) {
    console.log("Failed to retrieve conversations:", error);
    return {
      data: [],
      message: "Failed to retrieve conversations",
      status: "error",
    };
  }
}
