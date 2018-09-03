import React from 'react'
import Layout from "../components/layout"
import { Link } from 'gatsby'

import Header from '../components/Header'
import Menu from '../components/Menu'
import MyAlertComponent from '../components/Alert'
//import Container from '../components/DivBox'

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
    <MyAlertComponent></MyAlertComponent>
   
  </Layout>

)
