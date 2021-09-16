import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import FacebookLogo from "../../Assets/Icons/facebook.png";
import TwitterLogo from "../../Assets/Icons/twitter.png";
import InstagramLogo from "../../Assets/Icons/instagram.png";
import FooterLogoShop from "../../Assets/Icons/ShoppItemsLogoFooter.png"
import "./style.css"


export const Footer = () => {
    return(
        <>
        <Navbar className="FooterNavBar">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Services</Nav.Link>
                    <Nav.Link href="#features">Contatos</Nav.Link>
                    <Navbar.Brand href="#home"> <img src={FooterLogoShop}/> </Navbar.Brand>
                        <div className="IconsFooter">
                            <Nav.Link href="#" disabled>
                            Redes Sociais:
                            </Nav.Link>
                            <Nav.Link href="#" >
                                <img
                                    src={FacebookLogo}
                                />
                            </Nav.Link>
                            <Nav.Link href="#" >
                                <img
                                    src={TwitterLogo}
                                />
                            </Nav.Link>
                            <Nav.Link href="#" >
                                <img
                                    src={InstagramLogo}
                                />
                            </Nav.Link>
                        </div>
                </Nav>
            </Container>
        </Navbar>
        </>
    );
}   

export default Footer;