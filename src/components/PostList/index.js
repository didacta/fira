import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from "../../components/layout"
import Header from "../../components/Header"

const StyledPostList = styled.ul`
  list-style-type: none;
  padding: 2%;
  margin-left: 0.8rem;
  a {
    font-size: 1.1rem;
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    color: #b8f9f9;
    text-decoration: none;
    padding: 10px;
    &:hover {
      background:#102a45;
      color: white;
    }
  }
  
`

const PostList = ({ posts }) => {
  return (
    <Layout>
      <Header>
        <h1><Link to='/'>Igor Yermak</Link></h1>
      </Header>
      <StyledPostList>
        {posts.map(({ node: post }) => {
          return (

            <h2 key={post.id}>
              <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
            </h2>
          )
        })}
      </StyledPostList>
    </Layout>
  )
}

export default PostList
