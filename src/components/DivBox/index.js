import React from "react";
import ReactDOM from 'react-dom';

import styled from "styled-components";
import github from '../../assets/github.svg'
import {
  Table,
  Tr,
} from 'styled-table-component';
const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-style: Semi-Bold;
  margin: -3rem auto;
  margin-left: 0 auto;

  max-width: 550px;
  height:480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  th {
    height: 55px;
}
td {
  height: 25px;
  vertical-align: bottom;
}
th, td {
  padding: 15px;
  text-align: left;
}
  background: #b92b27;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #1565C0, #b92b27);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top left, #29b3b3 , #008080); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color:#94d9d9 ;
  padding:2.15rem;
  border: 1px solid #5082b0;
  box-shadow: 1px 1px 6px 1px #5082b0;
  h1{
    margin:20px;
    padding:7.5px 30px;
    text-align:center;
    
    box-shadow: 2px 1px 6px 1px #9999ff ;
    font-weight:200;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    width: 95%;
    margin-top: 0;
    margin-left: auto;
    margin-bottom: 0
    margin-right:auto;
    display: flex;
    font-weight: 350;
    font-size: 13px;
`;


/* const UserWrapper = styled.div`
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
 */

/* const User = props => (
  <UserWrapper>
    <Avatar src={props.avatar} alt="" />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
); */
const GradientButton = styled.button`
    position: relative;
    top:20px;
    left: 400px;
    
  appearance: none;
  background: #4d5a99;
  box-shadow: 1px 1px 6px 1px #5082b0;
  padding: 1em 5em 1em 5em;
  .text {color:#3b4371;}
  border: 1px solid #444488 ;
  color: white;con
  font-size: 1.9em;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  border-radius: 100px;
  box-shadow:10px 10px 60px 1px pink
  span {
    position: relative;
  } 

  margin:10px;
  @media (max-width: 768px) {
      padding:10px 10px;}




  &::before {
    --size:   0px;
    content: '';
    position: absolute;
    left: ${props => props.x}px;
    top: ${props => props.y}px;
    width: var(--size);
    height: var(--size);
    
    background-image: linear-gradient(to bottom left  , #246ca6, pink, red );
    
    transform: translate(-50%, -20%);
    transition: width .45s ease, height .5s ease;
		}
		&:hover::before {
        
			--size: 1000px;
		}
`;

class GradientButtonComponent extends React.Component {
	constructor(props) {
		super(props)
		this.ref = React.createRef();
		this.state = {
			x: undefined,
			y: undefined
		}
	}
	updateFromMouse(e) {
		const x = e.pageX - e.target.offsetLeft
  	const y = e.pageY - e.target.offsetTop
		this.setState({
			x: x,
			y: y
		})
	}
  render() {
    return (
      <div>
        <GradientButton x={this.state.x} y={this.state.y} onMouseMove={this.updateFromMouse.bind(this)} ref={this.ref}>Message Me</GradientButton>
      </div>
    )
  }
}




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
      <td>Python</td>
    </tr>
    <tr>
      <td>HTML5</td>
      <td>LESS</td>
      <td>Redux</td>
      <td>Linux</td>
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
    <tr>
    <td></td>
    <td></td>
    <td>d3</td>
    <td>Agile</td>

    </tr>
  </tbody>
  
  <GradientButtonComponent />

</Table>

{/*     <User
      username="Igor"
      avatar={github}
      excerpt="I'm Igor. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    /> */}
   
  </Container>
);