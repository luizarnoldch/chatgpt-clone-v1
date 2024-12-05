import React from 'react'

// Components
import { ScrollArea } from "@/components/ui/scroll-area"
import ConversationItem from './ConversationItem'
import { GetAllConversations } from '@/actions/conversation/GetAllConversations';

type Props = {}

type ConversationType = {
  id: string
  uuid: string
  name: string
  created: string
}

const ConversationList = async (props: Props) => {
  const conversationList: ConversationType[] = await GetAllConversations()

  return (
    <ScrollArea className="w-full h-full overflow-y-auto py-2 pr-4">
      <p className="text-sm mb-4">Today</p>
      <div className='flex flex-col gap-4 pb-2'>
        {conversationList.map((item) => (
          <ConversationItem key={item.uuid} name={item.name} />
        ))}
      </div>
    </ScrollArea>
  );
};

export default ConversationList;
