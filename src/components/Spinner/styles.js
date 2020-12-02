import styled, { keyframes } from 'styled-components'

const spinnerKeyframes = keyframes`
  from{
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`

export const SpinnerContainer = styled.div`
  width: min-content;
  height: auto;
  margin: 0 auto;
  animation: 300ms ${spinnerKeyframes} linear;
`
