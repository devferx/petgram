import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { Spinner } from '../components/Spinner'

const query = gql`
  query getSinglePhoto ($id: ID!){
    photo(id: $id){
      id
      categoryId
      src
      likes
      userId
      liked
    }
}
`

export const PhotoCardWithQuery = ({ id }) => {
  return (
    <Query query={query} variables={{ id }}>
      {
        ({ loading, error, data }) => {
          if (!loading) {
            const { photo = {} } = data
            return <PhotoCard {...photo} />
          }
          return <Spinner />
        }
      }
    </Query>
  )
}
