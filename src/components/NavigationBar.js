import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap";
import github from "../icons/github.svg";
import githubColor from "../icons/githubColor.svg";
import insta from "../icons/insta.svg";
import logo from "../images/LOGO.jpeg";
import instacolor from "../images/instagram.png";
function NavigationBar() {

const [icon1,seticon1]=useState(insta)
const [icon2,seticon2]=useState(github)

const handleInstaIconEnter=()=>{
    seticon1(instacolor)
}
const handleInstaIconLeave=()=>{
    seticon1(insta)
}
const handleGitIconEnter=()=>{
    seticon2(githubColor)
}
const handleGitIconLeave=()=>{
    seticon2(github)
}

return (
<div>
<Navbar expand="lg" style={{background:"black"}} variant='dark' className=''>
    <Container>
    <LinkContainer to="/">
    <Navbar.Brand >
    <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="Logo"
    />  codeVISTA</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <LinkContainer to="/">
        <Nav.Link >Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/Compiler">
        <Nav.Link>Compiler</Nav.Link>
        </LinkContainer>
        <NavDropdown  title="Blog"  id="basic-nav-dropdown">
            <LinkContainer to="/HackathonUser">
            <NavDropdown.Item >Hackathon</NavDropdown.Item>
            </LinkContainer>
            
            <LinkContainer to="/TechNewsUser">
            <NavDropdown.Item href="#action/3.2">
            Tech News
            </NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item href="#action/3.3">Latest Tech news</NavDropdown.Item>
            {/* <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
            Separated link
            </NavDropdown.Item> */}
        </NavDropdown>
        </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse id="icons" style={{justifyContent:"end"}}>
        <Nav style={{gap:"1rem",alignItems:"center"}}>

            <a href="" target='blank'>
                <img onMouseLeave={handleInstaIconLeave} onMouseEnter={handleInstaIconEnter} src={icon1} alt='Instagram'/>
            </a>

            <a target='blank' href="https://github.com/iamabhishekagarwal/webDevProj-BIT.git">
                <img  onMouseLeave={handleGitIconLeave} onMouseEnter={handleGitIconEnter} src={icon2} alt='Github'/>
            </a>
            
            
        </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>
</div>
)
}

export default NavigationBar
