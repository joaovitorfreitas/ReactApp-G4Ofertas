import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Header from "../../Components/Header";
import Carousels from "../../Components/Carousels";
import ImgReceptionistHome from "../../Assets/Icons/SelfCheckoutHome.png"
import Footer from "../../Components/Footer";

export const Home = () =>{
    return(
        <>
        <Header/>
        <Container>
            <Row>
                <Col> <Carousels /> </Col>             
            </Row>

            <Row>
                <Col>
                    <h2>Titulo</h2>  
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                    <p>industry. Lorem Ipsum has been the industry's standard dummy</p>
                    <p>text ever since the 1500s, when an unknown printer took a galley</p>
                    <p>of type and scrambled it to make a type specimen book. It has</p>
                    <p>survived not only five centuries, but also the leap into electronic</p>
                    <p>typesetting, remaining essentially unchanged. It was popularised in</p>
                    <p>the 1960s with the release of Letraset sheets containing Lorem</p>
                    <p>Ipsum passages, and more recently with desktop publishing</p>
                    <p>software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Col>
                <Col> <img src={ImgReceptionistHome}/> </Col>
            </Row>
        </Container>
        <Footer />
        </>
    );
}

export default Home;