import React from 'react'
import styled from 'styled-components'

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem;
  p {
    margin: 0;
    color: #333333;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 2rem;
    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
    a {
      color: teal;
      text-decoration: none;
    }
  }
`

export default () => (
  <StyledAbout>
    <p>
      Fira is a programming and photography blog featuring <a href='https://d3js.org/' target='_blank'></a><a href='https://d3js.org/' target='_blank'> d3.js</a><br />
      Photography collages<br />
      Data visualations
      
      </p>
  </StyledAbout>
)
