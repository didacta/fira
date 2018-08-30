import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import photo from '../styles/photo.css';
import e47 from '../assets/img/e47.jpg'
import e51 from '../assets/img/e51.jpg'
import e52 from '../assets/img/e52.jpg'
import e18 from '../assets/img/e18.jpg'
import e73 from '../assets/img/e73.jpg'
import e80 from '../assets/img/e80.png'
//import Layout from "../components/layout"
import { rhythm } from "../utils/typography"

function Photo() {
  //const assets = props.data.allContentfulAsset.edges
  return <div class="container">
    <div class="grid">
      <div class="cell">
        <img src={e80} class="responsive-image" />
      </div>
      <div class="cell">
        <img src={e73} class="responsive-image" />
      </div>
      <div class="cell">
        <img src={e52} class="responsive-image" />
      </div>
      <div class="cell">
        <img src={e51} class="responsive-image" />
      </div>
      <div class="cell">
        <img src={e47} class="responsive-image" />
      </div>
      <div class="cell">
        <img src={e18} class="responsive-image" />
      </div>
    </div>
  </div>
}
export default Photo

{/*     {assets.map(({ node: { title, fixed } }) => (
      <div key={fixed.src} style={{ display: `inline-block` }}>
        <Img
          key={fixed.src}
          alt={title}
          fixed={fixed}
          backgroundColor
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: rhythm(1 / 2),
            border: `1px solid tomato`,
            display: `inline-block`,
          }}
        />
      </div>
    ))} */}


/* export default ImageAPI

export const pageQuery = graphql`
  query {
    allContentfulAsset{
      edges {
        node {
          title
          resize(width: 400) {
            src
            width
            height
          }
          fixed(width: 100) {
            ...GatsbyContentfulFixed_noBase64
          }
          resizing: fixed(width: 100, height: 100) {
            ...GatsbyContentfulFixed_noBase64
          }
          webp: fixed(width: 100) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
          fluid(maxWidth: 613) {
            ...GatsbyContentfulFluid_noBase64
          }
        }
      }
    }
  }
` */
/* import React from 'react'
import styled from 'styled-components'
import Photo from '../components/Photo';
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
    </StyledAbout>

    
  )
  </Container> */
