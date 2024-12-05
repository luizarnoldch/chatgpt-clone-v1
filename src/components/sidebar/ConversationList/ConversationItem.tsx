import React from 'react'

// Icons
import { TbDots } from "react-icons/tb";
import { Button } from '../../ui/button';

type ConversationItemProps = {
  name: string
}

const ConversationItem = ({ name }: ConversationItemProps) => {
  return (
    <div className="w-full h-full px-2 py-2 relative bg-primary-foreground group rounded-md shadow-md">
      <p className="rounded-md pl-2 text-sm">{name}</p>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-0 mr-2 size-6 mt-2 hidden group-hover:block"
      >
        <TbDots className='mx-auto' />
      </Button>
    </div>
  )
}

export default ConversationItem
