import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const getPhotos = gql`
  query getPhotos($categoryId: ID){
    photos(categoryId: $categoryId){
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export function useGetPhotos (categoryId) {
  const { loading, data, error } = useQuery(getPhotos,
    { variables: { categoryId } }
  )

  return { loading, data, error }
}
