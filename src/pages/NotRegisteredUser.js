import React from 'react'
import Context from '../context'

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        ({ activatedAuth }) => {
          return (
            <form onSubmit={activatedAuth}>
              <button>Iniciar sesión</button>
            </form>
          )
        }
      }
    </Context.Consumer>
  )
}
