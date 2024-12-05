import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { HiOutlinePencilAlt } from 'react-icons/hi'

type Props = {}

const CreateButton = (props: Props) => {
  return (
    <Button variant="outline" size="icon" className='[&_svg]:size-6' asChild>
      <Link href="/">
        <HiOutlinePencilAlt />
      </Link>
    </Button>
  )
}

export default CreateButton