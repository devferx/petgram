import React from 'react'
import Context from '../context'
import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({ activatedAuth }) => {
          return (
            <UserForm onSubmit={activatedAuth} />
          )
        }
      }
    </Context.Consumer>
  )
}
