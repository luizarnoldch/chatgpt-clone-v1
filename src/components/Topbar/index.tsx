import React from 'react'
import LoginButton from '../Buttons/LoginButton'
import ToggleButtons from './ToggleButtons'

type Props = {}

const Topbar = (props: Props) => {
  return (
    <div className='w-full h-14'>
      <div className='w-full h-full flex justify-between items-center'>
        <ToggleButtons>
          <p>Model dropdown</p>
        </ToggleButtons>
        <div>
          Tokens
        </div>
        <LoginButton />
      </div>
    </div>
  )
}

export default Topbar