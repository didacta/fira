import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const StyledPost = styled.div`
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
  background-size: cover;
  h1 {
    
    color: #102a45;
    font-family: 'Poppin', sans-serif;
    font-weight: 700;
    text-align: center;
    font-size: 1.6rem;
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
  p#date {
    font-family: 'Poppin', sans-serif;
    color: navy;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 400;
  }
  .postBody {
    font-family: 'Lato', sans-serif;
    display: block;
    margin: 0 auto;
    width: 100%;
    font-size: 1.3rem;
    line-height: 1.8rem;
    color: #102a45;
    @media (min-width: 768px) {
      width: 60%;
    }
  }
`

const Post = ({ postData }) => {
  const { html, frontmatter } = postData
  const m = moment(frontmatter.date, 'YYYY MM DD')
  return (
    <StyledPost>
      <h1>{frontmatter.title}</h1>
      <p id='date'>Published on { m.format('MMM Do YYYY') }</p>
      <div
        className='postBody'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </StyledPost>
  )
}

export default Post
