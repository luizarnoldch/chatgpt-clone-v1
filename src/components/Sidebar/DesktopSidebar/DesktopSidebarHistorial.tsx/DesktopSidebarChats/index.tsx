import { GetAllConversation } from "@/app/action/conversation/get-all-conversation";
import DesktopSidebarChat from "./DesktopSidebarChat";
import { Conversation } from "@prisma/client";

type Props = {};



const DesktopSidebarChats = async (props: Props) => {

  const conversations: Conversation[] = await GetAllConversation()

  return (
    <div className="mt-4 flex flex-col gap-2">
      {conversations.map((item, index) => (
        <DesktopSidebarChat
          name={item.name}
          path={`/chat/${item.uuid}`}
          key={index}
        />
      ))}
    </div>
  );
};

export default DesktopSidebarChats;
