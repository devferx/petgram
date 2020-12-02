import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { SpinnerContainer } from './styles'

export const Spinner = () => {
  return (
    <SpinnerContainer>
      <AiOutlineLoading3Quarters size={32} />
    </SpinnerContainer>
  )
}
