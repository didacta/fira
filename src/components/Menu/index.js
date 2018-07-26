import React from 'react'
import styled from 'styled-components'

const StyledMenu = styled.ul`
  list-style-type:korean-hanja-informal;
  padding-left: 10.0px;
  padding-top:  5.0px;
  padding-bottom:500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  
  
  li {
    
    font-size: 1.2rem;
    font-family: 'Lato', sans-serif;
    font-style: Semi-Bold ;
    font-weight: 200;
    margin: .1rem 0 .1rem 0 ;
    &:nth-child(even) {
      margin: 0.6rem 0;
    }
    &:last-child {
      margin-left: 10px;
    }
    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
    img#external-link {
      color: #5082b0;
      width: 11px;
      height: 11px;
      display: flex;
      flex-direction: row;
      margin-bottom: 1px;
      margin-left: 81px;
    }
  }
  a {
    color: teal;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

const Menu = ({ children }) => {
  return (
    <StyledMenu>
      {children}
    </StyledMenu>
  )
}

export default Menu
