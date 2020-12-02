import React from 'react'
import { useGetPhotos } from '../../hooks/useGetPhotos'
import { PhotoCard } from '../PhotoCard'
import { Spinner } from '../Spinner'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, data } = useGetPhotos(categoryId)

  if (loading) return <Spinner />

  return (
    <ul>
      {data.photos.map((photoCard, id) => (
        <PhotoCard key={id} {...photoCard} />
      ))}
    </ul>
  )
}
