import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import FacebookLogo from "../../Assets/Icons/facebook.png";
import TwitterLogo from "../../Assets/Icons/twitter.png";
import InstagramLogo from "../../Assets/Icons/instagram.png";
import FooterLogoShop from "../../Assets/Icons/ShoppItemsLogoFooter.png"
import "./style.css"


export const Footer = () => {
    return(
        <footer>
        <Navbar className="FooterNavBar">
            <Container className="BorderFooter">
                <Nav className="me-auto">
                    <Nav.Link href="#home"><p className="FooterStyletxt">Services</p></Nav.Link>
                    <Nav.Link href="#features"><p className="FooterStyletxt">Contatos</p></Nav.Link>
                    <Navbar.Brand href="#home"> <img src={FooterLogoShop}/> </Navbar.Brand>
                        <div className="IconsFooter">
                            <Nav.Link href="#" disabled>
                            <p className="FooterStyletxt">Redes Sociais:</p>
                            </Nav.Link>
                            <div className="BorderIcons">
                            <Nav.Link href="#">
                                <img
                                    className="logotype"
                                    src={FacebookLogo}
                                />
                            </Nav.Link>
                            <Nav.Link href="#" >
                                <img
                                    className="logotype"
                                    src={TwitterLogo}
                                />
                            </Nav.Link>
                            <Nav.Link href="#" >
                                <img
                                    className="logotype"
                                    src={InstagramLogo}
                                />
                            </Nav.Link>
                            </div>
                        </div>
                </Nav>
            </Container>
        </Navbar>
        </footer>
    );
}   

export default Footer;