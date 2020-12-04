import React from 'react'
import Context from '../context'
import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({ activatedAuth }) => {
          return (
            <>
              <UserForm title='Registrate' onSubmit={activatedAuth} />
              <UserForm title='Iniciar sesión' onSubmit={activatedAuth} />
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
