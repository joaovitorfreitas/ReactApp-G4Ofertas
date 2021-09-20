import React, { useState }from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "../Login/style.css"
import { useHistory } from "react-router-dom";
import axios from 'axios';
import BannerLogin from "../../Assets/Banner/CadastroBanner.png";

export const Cad = () =>{

    let history = useHistory();

    
    return(
        <>
            <div className="BackGroundLogin">
                <div className="BorderBoxCad">
                <Row
                 className="RemoveSpacingCad"
                >
                    <Col>
                        <img
                            className="FundoCad"
                            src={BannerLogin}
                        />
                    </Col>
                    <Col className="EmailpwdSide">
                    <div>
                        <h1>Cadastro</h1>
                    </div> 
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nome </Form.Label>
                            <Form.Control type="text" placeholder="Nome" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" />
                        </Form.Group> 

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirmar Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" />
                        </Form.Group>    

                        <Button variant="primary" type="submit">
                            Cadastro
                        </Button>
                    </Form>

                    <Col className="GroupPwdReg1">
                                <p>ja tem um cadastro ?</p>
                                <p>Faça seu login</p>
                            </Col>
                    </Col>
                     
                </Row>
                </div>
            </div>
        </>
    );
}

export default Cad;