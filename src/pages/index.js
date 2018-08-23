import React from 'react'
import ReactDOM from 'react-dom';
import Layout from "../components/layout"
import { Link } from 'gatsby'

import Header from '../components/Header'
import Menu from '../components/Menu'
import Container from '../components/DivBox'

import LargeContainer from '../components/LargeDivBox'
import icon from '../assets/external-link.svg'
import {
  Table,
  Tr,
} from 'styled-table-component';

export default props => (
  <Layout location={props.location}>
 
    <Header>
      <h1><Link to='/'>Igor Yermak</Link></h1>
    
    </Header>
    <Menu>


      <li><Link to='/photo'>Photos</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/about'>About</Link></li>
      
    </Menu>
    <Container>
    </Container>
  </Layout>

)
