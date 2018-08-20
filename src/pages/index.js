import React from 'react'
import Layout from "../components/layout"
import {Link} from 'gatsby'
import Header from '../components/Header'
import Menu from '../components/Menu'
import icon from '../assets/external-link.svg'

export default props => (
  <Layout location ={props.location}>
  <Header>
  <h1><Link to='/'>Igor Yermak</Link></h1>
  </Header>
  <Menu>
    
    
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    <li><Link to='/photo'>Photos</Link></li>
    <li>
      <a href='https://github.com/didacta' target='noopener noreferrer'>
        GitHub
      </a>
      <img id='external-link' src={icon} alt='External link icon' />
    </li>
  </Menu>
  </Layout>
  
)
