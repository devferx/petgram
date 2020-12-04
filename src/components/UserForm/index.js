import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Title, Form, Input, Button, Error } from './styles'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          placeholder='Email'
          disabled={disabled}
          {...email}
        />
        <Input
          placeholder='Password'
          disabled={disabled}
          type='password'
          {...password}
        />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
