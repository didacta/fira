import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery } from 'gatsby'
import style from '../styles/style.css';


import styled from 'styled-components'
import Header from '../components/Header/index.js'
import Footer from '../components/Footer/index.js'


const Layout = ({ children }) => (
  <div>    
    
    <Helmet
    
      title="Igor Yermak"
      
      meta={[
        {
          name: 'description',
          content:
            'Igor is a full-stack web developer, photographer and occasional writer',
            
        },
      ]}
    >
      <meta property="og:locale" content="en_US" />
      
    </Helmet>
      
      <Header />
      {children}
      
      <Footer/>
    <div className="site">
    
      <style>
        
        
      </style>
      <main className="site-content "></main>
 
    </div>
  </div>
);

export default Layout;


/* export default ({ children, location }) => (
  <StaticQuery
    query={graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
    `}
    render={data => (
      <>
        <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`} defaultTitle={data.site.siteMetadata.title} />
        <div>
          {children}
        </div>
      </>
    )}
  />
) */
