import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import LogoHeader from "../../Assets/Icons/ShoppItemsLogoHeader.png";
import "../Header/style.css"

export const Header = () =>{
    return(
        <>
        <Navbar className="NavHeader">
            <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <Navbar.Brand href="#"> <img src={LogoHeader} className="imgHeader"/> </Navbar.Brand>
                    <Nav.Link href="#action1"><p className="colorTxtHeader">Alimentos</p></Nav.Link>
                    <Nav.Link href="#action2"><p className="colorTxtHeader">Roupas</p></Nav.Link>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Procurar"
                            className="mr-2"
                            aria-label="Procurar"
                        />
                    </Form>
                    <Nav.Link href="#action1"><p className="colorTxtHeader">Cadastrar</p></Nav.Link>
                    <Nav.Link href="#action2"><p className="colorTxtHeader">Login</p></Nav.Link>
                    </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    );
}

export default Header;