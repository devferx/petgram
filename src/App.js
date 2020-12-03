import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Logo } from './components/Logo'

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
            <>
              <ListOfCategories />
              <ListOfPhotoCards categoryId={1} />
            </>
            )
      }
    </div>
  )
}

export default App
