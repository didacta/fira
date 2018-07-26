import React from 'react'
import styled from 'styled-components'

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: .5rem;
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
      color: darkblue;
      text-decoration: none;
    }
  }
`

export default () => (
  <StyledAbout>
    <p>
     
      
      </p>
  </StyledAbout>
)
