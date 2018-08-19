import React from 'react'
import styled from 'styled-components'

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 155px -15px -15px -15px;
  p {
    margin: 15px;
    color: #5e8767;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 2rem;
    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
    a {
      color: #c4e5ca;
      text-decoration: none;
    }
  }
`

export default () => (
  <StyledAbout>
    <p>
    <li>Fira is a programming and photography blog featuring <a href='https://d3js.org/' target='_blank'></a></li><a href='https://d3js.org/' target='_blank'> d3.js</a><br />
      Photography collages<br />
      Data visualations
      
      </p>
  </StyledAbout>
)
