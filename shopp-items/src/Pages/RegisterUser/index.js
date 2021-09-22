import React, { useState }from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./styleR.css"
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
                        <h1 className="LetrasG">Cadastro</h1>
                    </div> 
                    <Form >
                        <Form.Group className="LetrasP" controlId="formBasicEmail">
                            <Form.Label className="LetrasP">Nome: </Form.Label>
                            <Form.Control type="text" placeholder="Nome" />
                        </Form.Group>

                        <Form.Group className="LetrasP" controlId="formBasicEmail">
                            <Form.Label className="LetrasP">Email: </Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group className="LetrasP" controlId="formBasicPassword">
                            <Form.Label className="LetrasP">Senha: </Form.Label>
                            <Form.Control type="password" placeholder="Senha" />
                        </Form.Group> 

                        <Form.Group className="LetrasP" controlId="formBasicPassword">
                            <Form.Label className="LetrasP">Confirmar Senha: </Form.Label>
                            <Form.Control type="password" placeholder="Confirmar Senha" />
                        </Form.Group>    

                        <Button className="btnCad" variant="primary" type="submit">
                            Cadastro
                        </Button>
                    </Form>

                    <Col className="GroupPwdReg1">
                                <p className="LetrasP" >ja tem um cadastro?</p>
                                <a className="LinkName" href="http://localhost:3000/Login">Faça seu login</a>
                            </Col>
                    </Col>
                     
                </Row>
                </div>
            </div>
        </>
    );
}

export default Cad;