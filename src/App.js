import React from 'react'
import { Router } from '@reach/router'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { GlobalStyle } from './styles/GlobalStyles'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {/* <ListOfCategories />
      <ListOfPhotoCards categoryId={6} /> */}
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <UserLogged>
        {
          ({ isAuth }) =>
            isAuth
              ? (
                <Router>
                  <Favs path='/favs' />
                  <User path='/user' />
                </Router>
                )
              : (
                <Router>
                  <NotRegisteredUser path='/favs' />
                  <NotRegisteredUser path='/user' />
                </Router>
                )
          }
      </UserLogged>
      <Navbar />
    </div>
  )
}

export default App
