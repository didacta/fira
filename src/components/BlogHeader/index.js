import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  text-align: left;
  margin-left: 0.4rem;
  margin-top: 0.4rem;
  h1 {
    color: pink;
    font-size: 1.4rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-style: Semi-Bold;
    border-bottom: 4px solid #fdfcfa;
    display: inline-flex;
    a {
      transition: all .3s ease-in-out;
      padding: 0 4px;
      color: black;
      text-decoration: none;
      &:hover {
        color: white;
        background: black;
      }
    }
  }
`

const Header = ({ children }) => {
  return (
    <StyledHeader>
      {children}
    </StyledHeader>
  )
}

export default Header
