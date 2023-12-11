import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../images/LOGO.jpeg";


function NavigationBar() {
return (
<div >
    <Navbar
    expand="lg"
    style={{ background: "black" ,width:"100vw" }}
    variant="dark"
    >
    <Container className="d-flex flex-row-reverse">
        <LinkContainer to="/Home">
        <Navbar.Brand>
            <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
            />{" "}
            codeVISTA
        </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav
            // className="me-auto"
            // onClick={() => {
            // document
            //     .querySelector(".navbar-collapse")
            //     .classList.remove("show");
            // }}
        >
            <LinkContainer to="/Home">
            <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/Compiler">
            <Nav.Link>Compiler</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/HackathonUser">
            <Nav.Link>Hackathon</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/TechNewsUser">
            <Nav.Link>Tech news</Nav.Link>
            </LinkContainer>

            <NavDropdown menuVariant="dark" title="Language" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">English (Default)</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Hindi</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Kannada</NavDropdown.Item>
            </NavDropdown>


        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
</div>
);
}

export default NavigationBar;
