import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Main = styled.main`
  padding: 0 1rem;
`

const TemplateWrapper = ({ children }) => (
  <Main>
    <Helmet
      title='Igor Yermak | A Programming and Photography Portfolio 🕶️'
      link={[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Lato|Poppins:700i'
        }
      ]}
    />
    <Header>
      <h1><Link to='/'>Igor Yermak</Link></h1>
      <h2>A <span> Programming and Photography Portfolio</span></h2>
    </Header>

    {children()}

    <Footer>
      <p>Photos by <a href='https://twitter.com/igoryermak' target='_blank'>@igoryermak</a> with ❤️</p>
    </Footer>
  </Main>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
