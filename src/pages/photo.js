import React from 'react'
import styled from 'styled-components'

const StyledAbout = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 50%;
  align-items: right;
  margin: .4rem;
  padding: 0 4px;
  width: 350px;
  height: 400px;
  background-color:white;
  border: 1px solid hotpink;
  p {
    box-shadow:10px 10px 60px 1px pink;
    background-image: linear-gradient(to bottom left  , huntergreen, white, pink );
    margin: 0;
    color: #333333;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: .5rem;
    line-height: 2.25rem;
    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
    a {
      color: darkblue;
      text-decoration: none;
    }
  }
`

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-style: Semi-Bold;
  border: 1px solid #5082b0;
  display:inline-block;
  position: relative;
  margin: 100px;
  float:center;
  padding:10px;
  width: calc(25% - 10px);
  height:400px;
  background:black;
  background-image: linear-gradient(to bottom left  , #246ca6, pink, red );
`

export default () => (
  <Container>
    <StyledAbout>
    <Container>
    <StyledAbout>
    <Container>
    <StyledAbout>
      
      </StyledAbout>

  </Container>
      </StyledAbout>

  </Container>
      </StyledAbout>

  </Container>












)
