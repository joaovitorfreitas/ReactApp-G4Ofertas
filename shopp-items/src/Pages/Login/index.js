import React, { useState }from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./style.css"
import { useHistory, Link } from "react-router-dom";
import axios from 'axios';
import BannerLogin from "../../Assets/Banner/LoginBanner.png";

export const Login = () =>{

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const [error, setError] = useState('')

    let history = useHistory();


    function fazerlogin(event) {

        event.preventDefault();
        

        axios.post('https://www.macoratti.net.br/catalogo/api/contas/login', {
        Email: email,
        Senha : pwd
        })
        .then()
        .then(rs =>
        {
            if(rs.status === 200) {
            localStorage.setItem('@jwt', rs.data.token);


            console.log("pronto")

            }else{         
            console.log("Merda")
            }

        })
        .catch((error) => {
            console.log(error)
        })

        console.log(email)
        console.log(pwd)
        }

    

    
    return(
        <>
            <div className="BackGroundLogin">
                <div className="BorderBoxLogin">
                    <Row
                        className="RemoveSpacingCad"
                    >
                        <Col>
                            <img
                                className="FundoLogin"
                                src={BannerLogin}
                            />
                        </Col>
                        <Col className="EmailpwdSide">
                        <div style={{marginTop: 20}}>
                            <h1 style={{color: "#D95843"}}>Login</h1>
                        </div>

                        <Form
                            className="FormLoginWidht"
                        >

                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <div className="GrouInputLogin">
                                    <Form.Label style={{color: "#D95843"}}>Email </Form.Label>
                                    <Form.Control type="email" placeholder="Email" />
                                </div>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <div className="GrouInputLogin"> 
                                    <Form.Label style={{color: "#D95843"}}>Senha </Form.Label>
                                    <Form.Control type="password" placeholder="Senha" />
                                </div>
                    
                            </Form.Group>       
                            <div className="BtnLoginDiv">
                                <Button  type="submit" className="BtnLogin">
                                    Login
                                </Button>
                            </div>
                        </Form>


                        <Col className="GroupPwdReg1">
                                    <p style={{color: "#D95843"}}>Esqueceu a Senha ?</p>
                                    <Link to="/about" className="LinkName"> Clique Aqui</Link>
                                </Col>
                                <Col className="GroupPwdReg1">
                                    <p style={{color: "#D95843"}}>Não tem um Login ?</p>
                                    <Link to="/about" className="LinkName">Cadastra-se</Link>
                                </Col>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Login;