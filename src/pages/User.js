import React, { useContext } from 'react'
import { Context } from '../context'
import { SubmitButton } from '../components/SubmitButton'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <div>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar Sesión</SubmitButton>
    </div>
  )
}
