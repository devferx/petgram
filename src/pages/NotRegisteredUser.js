import React from 'react'
import Context from '../context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({ activatedAuth }) => {
          return (
            <>
              <RegisterMutation>
                {
                  (register) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      register({ variables }).then(activatedAuth)
                    }
                    return <UserForm title='Registrate' onSubmit={onSubmit} />
                  }
                }
              </RegisterMutation>
              <UserForm title='Iniciar sesión' onSubmit={activatedAuth} />
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
