import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../images/LOGO.jpeg";
function NavigationBar() {

return (
<div>
    <Navbar
    expand="lg"
    style={{ background: "black" }}
    variant="dark"
    className=""
    >
    <Container>
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
        <Nav className="me-auto">
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
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
</div>
);
}

export default NavigationBar;
