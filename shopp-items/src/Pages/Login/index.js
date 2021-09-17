import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./style.css"
import { useHistory } from "react-router-dom";
import axios from 'axios';
import BannerLogin from "../../Assets/Banner/LoginBanner.png";

export const Login = () =>{

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const [error, setError] = useState('')

    let history = useHistory();


    function fazerlogin(event) {

        event.preventDefault();
        
        setError('')

        axios.post('http://localhost:5000/api/login', {
        Email: email,
        Senha : pwd
        })
        .then(rs =>
        {
            if(rs.status === 200) {
            localStorage.setItem('@jwt', rs.data.token);

            console.log(parseJwt().nameid);

            history.push('/Listar')

            }else{         
            history.push('/')
            }

        })
        .catch(() => {
            setError( 'E-mail ou senha inválidos! Tente novamente.')
        })

        console.log(email)
        console.log(pwd)
        }

    

    
    return(
        <>
            <div className="BackGroundLogin">
                <div className="BorderBoxLogin">
                <Row
                >
                    <Col>
                        <img
                            className="FundoLogin"
                            src={BannerLogin}
                        />
                    </Col>
                    <Col className="EmailpwdSide">
                    <div>
                        <h1>Login</h1>
                    </div>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" />
                        </Form.Group>                    
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>

                    <Col className="GroupPwdReg1">
                                <p>Esqueceu a Senha ?</p>
                                <p>Clique Aqui</p>
                            </Col>
                            <Col className="GroupPwdReg1">
                                <p>Não tem um Login ?</p>
                                <p>Cadastre-se</p>
                            </Col>
                    </Col>
                     
                </Row>
                </div>
            </div>
        </>
    );
}

export default Login;