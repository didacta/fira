import React from 'react'
import styled from 'styled-components'

const StyledMenu = styled.ul`
  list-style-type:cjk-ideographic;
  padding-left: 5.0px;
  padding-top:  5.0px;
  padding-bottom: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  color: #b8f9f9;
  
  
  
  li {
     
    font-size: 1.2rem;
    font-family: 'Lato', sans-serif;
    font-style: Semi-Bold ;
    font-weight: 200;
    margin-left: 27px;
    
    &:nth-child(even) {
      margin: 0.9rem 0;
      margin-left:5px;
    }
    &:last-child {
      margin-left: 16px;
    }
    @media (min-width: 768px) {
      font-size: 1.9rem;
    }
    img#external-link {
      color: #5082b0;
      width: 11px;
      height: 11px;
      display: flex;
      flex-direction: block;
      margin-bottom: 200px;
      margin-left: 81px;
    }
  }
  a {
    color:#94d9d9;
    text-decoration: none;
    &:hover {
      padding: 5%;
      text-decoration: underline;
      background-color: pink;
      border-radius:5%;
    }
  }
  h1 {
    margin: 15px;
    color: teal;
    font-size: 1.3rem;
    font-family: 'Dunbar', sans-serif;
    font-weight: 200;
    font-style: normal;
    border: 2px solid teal;
    display: inline-flex;
    &:hover {
      color: #fdfcfa;
      background-color: pink;
      padding: 3px;
    }
    @media (min-width: 768px) {
      font-size: 2.0rem;
    
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
