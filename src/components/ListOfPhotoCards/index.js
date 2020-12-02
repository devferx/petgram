import React from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import { PhotoCard } from '../PhotoCard'
import { Spinner } from '../Spinner'

const withPhotos = graphql(gql`
  query getPhotos{
    photos{
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`)

const ListOfPhotoCardsComponent = ({ data: { photos = [], loading } } = {}) => {
  if (loading) return <Spinner />

  return (
    <ul>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
