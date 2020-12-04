import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Context from './context'
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-self.vercel.app/graphql'
})

ReactDOM.render(
  <Context.Provider value={{ isAuth: true }}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
