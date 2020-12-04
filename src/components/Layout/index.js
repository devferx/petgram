import React from 'react'
import { Helmet } from 'react-helmet'
import { Div, Title, Subtitle } from './styles'

export const Layout = ({ children, title, subtitle, display = true }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title}  | Petgram 🐶 </title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>

      <Div>
        {display && title && <Title>{title}</Title>}
        {display && subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Div>
    </>
  )
}
