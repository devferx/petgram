import React from 'react'
import { Router } from '@reach/router'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'

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
    </div>
  )
}

export default App
