import React, { useState, useEffect }from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./styleL.css"
import { useHistory, Link } from "react-router-dom";
import api from "../../Services/BaseUrl/BaseUrl"
import BannerLogin from "../../Assets/Banner/LoginBanner.png";

export const Login = () =>{

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const [error, setError] = useState('')

    let history = useHistory();


    function fazerlogin(event) {


        event.preventDefault();
        

        api.post('/v1/account/signin', {
        Email: email,
        Senha : pwd
        })
        .then(rs =>
        {   
            if(rs.data.sucesso === true) {
            console.log(rs.data.data.token)
            localStorage.setItem('@jwt', rs.data.data.token);

            history.push("/Produto")

            }else if (rs.data.sucesso === false){         
            console.log(rs.data.mensagem)

            setError(rs.data.mensagem)
            }

        })
        .catch((error) => {
            console.log(error)
        })

        }

        useEffect(() => {
            console.log(email)
            console.log(pwd)
          });

    
    return(
        <>
            <div className="BackGroundLogin">
                <div className="BorderBoxLogin">
                    <Row
                        className="RemoveSpacingCad"
                    >
                       
                        <Col className="fundo">
                            <img
                                className="FundoLogin"
                                src={BannerLogin}
                            />
                        </Col>

                        <Col className="EmailpwdSide">
                        <div style={{marginTop: 20}}>
                            <h1 className="LetrasG">Login</h1>
                        </div>

                        <Form
                            className="FormLoginWidht"
                            onSubmit={fazerlogin}
                        >

                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <div className="GrouInputLogin">
                                    <Form.Label className="LetrasP">Email </Form.Label>
                                    <input type="email" placeholder="Email" value={email}
                                        onChange={(event) => setEmail(event.target.value) }
                                    />
                                </div>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <div className="GrouInputLogin"> 
                                    <Form.Label className="LetrasP">Senha </Form.Label>
                                    <input type="password" placeholder="Senha" value={pwd}
                                    onChange={(event) => setPwd(event.target.value) }

                                    />
                                </div>
                    

                            </Form.Group>       
                            <p style={{color: "red", marginLeft: 40}}> {error}</p>

                            <div className="BtnLoginDiv">
                                <Button  type="submit" className="BtnLogin">
                                    Login
                                </Button>
                            </div>
                            </Form>

                                <Col className="GroupPwdReg1">
                                    <p className="LetrasP">Não tem um Login?</p>
                                    <Link to="/Cadastro" className="LinkName">Cadastra-se</Link>
                                </Col>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Login;