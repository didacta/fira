import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`


  margin-top: 1px;
  text-align: right;
  body {
    background-color: red;
  }
  h1 {
    margin: 15px;
    background-color: #0e3b3c;
    color: blue;
    font-size: 1.3rem;
    font-family: 'Dunbar', sans-serif;
    font-weight: 200;
    font-style: normal;
    border-bottom: 4px solid teal;
    display: inline-flex;
    @media (min-width: 768px) {
      font-size: 1.6rem;
    }
    a {
      transition: all .45s ease-in-out;
      color: 	#c4e5ca;
      text-decoration: none;
      padding: 0 8px;
      &:hover {
        color: #fdfcfa;
        background: teal;
      }
    }
  }
  h2 {
    position: relative;
    background-color:#c4e5ca;
    margin: 1px;
    padding: 1px;
    margin-left: -1.6rem;
    margin-top: 0.2rem;
    color: #0e3b3c;
    font-size: 0.59rem;
    font-family: 'Poppins', sans-serif;
    @media (min-width: 768px) {
      font-size: 1rem;
    }
    span {
      color:#c4e5ca;      ;
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
