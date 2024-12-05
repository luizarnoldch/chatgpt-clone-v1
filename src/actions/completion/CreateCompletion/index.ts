"use server";

import { redirect } from "next/navigation";

const CreateCompletion = async () => {
  console.log("create chat");

  redirect("/chat/1");
};

export default CreateCompletion;
