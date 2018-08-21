import React from "react";
import styled from "styled-components";
import github from '../../assets/github.svg'
import {
  Table,
  Tr,
} from 'styled-table-component';
const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-style: Semi-Bold;
  margin: -3rem auto;
  margin-left: 2rem ;
  justify-content: space-between;
  max-width: 450px;
  height:300px;
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: left;
  background-color:#cad9e7;
  color: #5082b0;
  padding:1.5rem;
  border: 1px solid #5082b0;
  box-shadow: 1px 1px 6px 1px #5082b0;
  h1{
    margin:1px;
    padding:5px;
    text-align:center;
  }
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Avatar = styled.img`
  flex: 1;

  align-items: left;
  width: 36px;
  height: 36px;
  margin: 1px;
`;

const Description = styled.div`
  flex: 1;
  margin-left: 8px;
  padding: 7px;
`;

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`;

const Excerpt = styled.p`
  margin: 10;
`;

const User = props => (
  <UserWrapper>
    <Avatar src={props.avatar} alt="" />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
);

export default () => (
  <Container>
    <h1>Skills</h1>
  <Table hover dark>
  
  <thead>     
    <tr>
      
      <th scope="col">HTML</th>
      <th scope="col">CSS</th>
      <th scope="col">Javascript</th>
      <th scope="col">Etc.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>JSX</td>
      <td>CSS3</td>
      <td>React</td>
      <td>Agile</td>
    </tr>
    <tr>
      <td>HTML5</td>
      <td>LESS</td>
      <td>Redux</td>
      <td>d3</td>
    </tr>
    <tr>
      <td>Responsive Layouts</td>
      <td>styled-components</td>
      <td>Mocha & Chai Testing</td>
      <td>git</td>
    </tr>
    <tr>
      <td></td>
      <td>Bootstrap</td>
      <td>ES6</td>
      <td>Webpack</td>
    </tr>
  </tbody>
</Table>
{/*     <User
      username="Jane Doe"
      avatar={github}
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    /> */}
   
  </Container>
);