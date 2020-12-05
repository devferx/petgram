import React, { useContext, Suspense } from 'react'
import { Redirect, Router } from '@reach/router'

import { Context } from './context'

import { Home } from './pages/Home'
// import { Detail } from './pages/Detail'
// import { Favs } from './pages/Favs'
// import { User } from './pages/User'
// import { NotFound } from './pages/NotFound'
// import { NotRegisteredUser } from './pages/NotRegisteredUser'

import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { GlobalStyle } from './styles/GlobalStyles'

const Favs = React.lazy(() => import('./pages/Favs'))
const User = React.lazy(() => import('./pages/User'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const Detail = React.lazy(() => import('./pages/Detail'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <Suspense fallback={<div>Cargando</div>}>
      <GlobalStyle />
      <Logo />
      {/* <ListOfCategories />
      <ListOfPhotoCards categoryId={6} /> */}
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />

        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}

        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <Navbar />
    </Suspense>
  )
}
