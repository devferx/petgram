import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { Spinner } from '../Spinner'

export const ListOfPhotoCardsComponent = ({ data: { photos = [], loading } } = {}) => {
  if (loading) return <Spinner />

  return (
    <ul>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}
