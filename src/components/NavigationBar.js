import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from 'react-i18next';
import { LinkContainer } from "react-router-bootstrap";
import logo from "../images/LOGO.jpeg";


function NavigationBar() {

const handleItemClick = (eventKey, event) => {
    if(eventKey==="item1"){
        changeLanguage('en')
    }
    if(eventKey==="item2"){
        changeLanguage('hindi')
    }
    if(eventKey==="item3"){
        changeLanguage('kannada')
    }
};
const { t } = useTranslation();
const { i18n } = useTranslation();

const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
};

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
            {t('brandName')}
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
            <Nav.Link>{t('navHome')}</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/Compiler">
            <Nav.Link>{t('navCompiler')}</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/HackathonUser">
            <Nav.Link>{t('navHackathon')}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/TechNewsUser">
            <Nav.Link>{t('navTechNews')}</Nav.Link>
            </LinkContainer>

            <NavDropdown menuVariant="dark" title={t('navLanguage')} id="basic-nav-dropdown" onSelect={handleItemClick}>
            <NavDropdown.Item eventKey="item1" href="#action/3.1">{t('navLanguageDropdown1')}</NavDropdown.Item>
            <NavDropdown.Item eventKey="item2" href="#action/3.2">{t('navLanguageDropdown2')}</NavDropdown.Item>
            <NavDropdown.Item eventKey="item3" href="#action/3.3">{t('navLanguageDropdown3')}</NavDropdown.Item>
            </NavDropdown>


        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
</div>
);
}

export default NavigationBar;
