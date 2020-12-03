import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { Spinner } from '../components/Spinner'

const GET_SINGLE_PHOTO = gql`
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

const renderProp = ({ loading, error, data }) => {
  if (!loading) {
    const { photo = {} } = data
    return <PhotoCard {...photo} />
  }

  if (error) return <p>Error!</p>

  return <Spinner />
}

export const PhotoCardWithQuery = ({ id }) => {
  return (
    <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
      {renderProp}
    </Query>
  )
}
