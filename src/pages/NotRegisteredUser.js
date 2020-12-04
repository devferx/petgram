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
                  (register, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      register({ variables }).then(activatedAuth)
                    }

                    const errorMsg = error && 'El usuario ya existe o hay algun problema'

                    return <UserForm disabled={loading} error={errorMsg} title='Registrate' onSubmit={onSubmit} />
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
