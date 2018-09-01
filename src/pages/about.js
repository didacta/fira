import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from "../components/layout"
import Header from "../components/Header"
import Container from '../components/DivBox'

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppin', sans-serif;
  color: #102a45;
  margin:100px;
  li {
     
    font-size: 1.2rem;
    font-family: 'Lato', sans-serif;
    font-style: Semi-Bold ;
    font-weight: 200;
    margin: 1rem 0rem .1rem 0 ;
    &:nth-child(even) {
      margin: 0 0.5rem 0.5rem 0;
    }
    &:last-child {
      margin-left: 10px;
    }
    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  margin: 15px 15px 15px 15px;
  h2 {
    
    color: #102a45;
    font-family: 'Poppin', sans-serif;
    font-weight: 700;
    text-align: center;
    font-size: .7rem;
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
  p {
    margin: 15px;
    color: #a0d0db;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 2.4rem;
    @media (min-width: 768px) {
      font-size: 2.1rem;
    }
    
    a {
      
      color: #c4e5ca;
      text-decoration: none;
      font-size:1.5rem;
    }

  }
`

export default () => (
  <Layout>
      <Header>
        <h1><Link to='/'>Igor Yermak</Link></h1>
        
      </Header>
  <StyledAbout>
  <Container>
    </Container>
     
    
  </StyledAbout>
  </Layout>
)
