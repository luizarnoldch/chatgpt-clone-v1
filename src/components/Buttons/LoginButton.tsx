"use client"

import React from 'react'

// Components
import { Button } from '../ui/button'

// Icons
import { FaRegUser } from "react-icons/fa6";

type Props = {}

const LoginButton = (props: Props) => {
  return (
    <Button
      variant="outline"
      size="icon"
      className="[&_svg]:size-4"
    >
      <FaRegUser />
    </Button>
  )
}

export default LoginButton