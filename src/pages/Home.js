import React from 'react'
import { Layout } from '../components/Layout/index'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

function HomePage ({ id }) {
  return (
    <Layout display={false} title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar tus fotos de animales domésticos'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})
