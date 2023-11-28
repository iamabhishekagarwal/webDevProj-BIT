import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap";
import github from "../icons/github.svg";
import insta from "../icons/insta.svg";
import logo from "../images/logo_edited.jpg";
function NavigationBar() {
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
            <NavDropdown.Item href="#action/3.1">Hackathon</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
            Tech News
            </NavDropdown.Item>
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
            <img src={insta} alt='Instagram'/>
            <img src={github} alt='Github'/>
        </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>
</div>
)
}

export default NavigationBar
