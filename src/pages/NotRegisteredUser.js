import React from 'react'
import Context from '../context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

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
              <LoginMutation>
                {
                  (login, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      login({ variables }).then(activatedAuth)
                    }

                    const errorMsg = error && 'La contraseña no es correcta o el usuario no existe'

                    return <UserForm error={errorMsg} disabled={loading} title='Iniciar sesión' onSubmit={onSubmit} />
                  }
                }
              </LoginMutation>
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
