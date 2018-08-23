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
  height:400px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  background-image: linear-gradient(to bottom, white,  	 	#342c5c);  
  color:  	 	#FF1493;
  padding:1.5rem;
  border: 1px solid #5082b0;
  box-shadow: 1px 1px 6px 1px #5082b0;
  h1{
    margin:20px;
    padding:10px;
    text-align:center;
    border: 1px solid  	#342c5c;
    background-image: linear-gradient(to bottom right, pink,   	#342c5c);  
    box-shadow: 4px 1px 6px 1px #9999ff ;
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

const GradientButton = styled.button`
    position: relative;
  appearance: none;
  background: #f72359;
  padding: 1em 5em 1em 5em;
  border: 2px solid hotpink;
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

  margin:1rem;
  &::before {
    --size:   0;
    content: '';
    position: absolute;
    left: ${props => props.x}px;
    top: ${props => props.y}px;
    width: var(--size);
    height: var(--size);
    
    background-image: linear-gradient(to bottom left  , orange, magenta );
    
    transform: translate(-30%, -20%);
    transition: width .45s ease, height .5s ease;
		}
		&:hover::before {
        
			--size: 500px;
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
  
  <GradientButtonComponent />

</Table>
{/*     <User
      username="Jane Doe"
      avatar={github}
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    /> */}
   
  </Container>
);