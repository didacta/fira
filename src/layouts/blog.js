import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import BlogHeader from '../components/BlogHeader'

const Main = styled.main`
  background-color:white;
  padding: 0 1rem;
  margin: 50px;
 
`

const TemplateWrapper = ({children, location}) => (
  <Main>
    <Helmet
      title='Igor Yermak🕶️'
      link={[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Lato|Poppins:700i'
        }
      ]}
    />
    <BlogHeader>
      <h1><Link to={location.pathname === '/blog' ? '/' : '/blog'}>Projects</Link></h1>
    </BlogHeader>

    {children()}
  </Main>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
