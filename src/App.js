import React from 'react'
import { Router } from '@reach/router'
import { Home } from './pages/Home'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {/* <ListOfCategories />
      <ListOfPhotoCards categoryId={6} /> */}
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : (
            <Router>
              <Home path='/' />
              <Home path='/pet/:id' />
            </Router>
            )
      }
    </div>
  )
}

export default App
