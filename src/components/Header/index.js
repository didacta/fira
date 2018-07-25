import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  margin-top: 4rem;
  text-align: right;
  body {
    background-color: red;
  }
  h1 {
    background-color: white;
    color: blue;
    font-size: 2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
    font-style: Semi-Bold;
    border-bottom: 1px solid teal;
    display: inline-flex;
    @media (min-width: 768px) {
      font-size: 2.4rem;
    }
    a {
      transition: all .3s ease-in-out;
      color: #5082b0;
      text-decoration: none;
      padding: 0 8px;
      &:hover {
        color: #fdfcfa;
        background: #5082b0;
      }
    }
  }
  h2 {
    position: relative;
    margin: 0;
    margin-left: -1.6rem;
    margin-top: -0.8rem;
    color: #1a1a1a;
    font-size: 0.2rem;
    font-family: 'Poppins', sans-serif;
    @media (min-width: 768px) {
      font-size: 1rem;
    }
    span {
      color: #48697F;      ;
    }
    i {
      background-color: blue;
      position: absolute;
      font-size: 1.4rem;
      margin-top: -4px;
      margin-left: 4px;
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
