import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { Spinner } from '../Spinner'
// import { useGetPhotos } from '../../hooks/useGetPhotos'
// import { PhotoCard } from '../PhotoCard'
// import { Spinner } from '../Spinner'

// export const ListOfPhotoCards = ({ categoryId }) => {
export const ListOfPhotoCardsComponent = ({ data: { photos = [], loading } } = {}) => {
  // const { loading, data } = useGetPhotos(categoryId)
  if (loading) return <Spinner />

  return (
    <ul>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}
