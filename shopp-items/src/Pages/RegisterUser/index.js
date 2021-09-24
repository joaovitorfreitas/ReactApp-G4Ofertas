import React, { useState }from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./styleR.css"
import { useHistory } from "react-router-dom";
import BannerLogin from "../../Assets/Banner/CadastroBanner.png";
import api from "../../Services/BaseUrl/BaseUrl"

export const Cadastro = () =>{



    const [Email, setEmail] = useState("")
    const [Nome, SetNome] = useState("")
    const [Senha, setSenha] = useState("")
    const [Decisao, SetTipoDecisao] = useState([])
    const [error, setError] = useState("")

    let history = useHistory();

    

    function SubmiteItens( event ){

        event.preventDefault()
        
        setError("")

        console.log(Email)
        console.log(Nome)
        console.log(Senha)
        console.log(Decisao)


        api.post("/v1/account/signup",{
            nome: Nome,
            email: Email,
            senha: Senha,
            tipoUsuario: 1
        })
        .then(
            response => {
                console.log(response)
                if(response.data.sucesso === true){
                    console.log("é falso")


                    history.push("/Login");
                }else{
                    setError(response.data.mensagem)
                }
            }
        )   
        .catch(
            error => {
                console.log(error.response)
            }
        )
    }

    
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
                    <Form onSubmit={SubmiteItens}>
                        <Form.Group className="LetrasP" controlId="formBasicEmail">
                            <Form.Label className="LetrasP">Nome: </Form.Label>
                            <input type="text" placeholder="Nome" value={Nome}
                                onChange={(event) => SetNome(event.target.value)}
                                className={"InputLoginTela"}
                            />
                        </Form.Group>

                        <Form.Group className="LetrasP" controlId="formBasicEmail">
                            <Form.Label className="LetrasP">Email: </Form.Label>
                            <input type="email" placeholder="Email" value={Email}
                                onChange={(event) => setEmail(event.target.value)}
                                className={"InputLoginTela"}

                            />
                        </Form.Group>

                        <Form.Group className="LetrasP" controlId="formBasicPassword">
                            <Form.Label className="LetrasP">Senha: </Form.Label>
                            <input type="password" placeholder="Senha" value={Senha}
                                onChange={(event) => setSenha(event.target.value)}
                                className={"InputLoginTela"}
                            />
                        </Form.Group> 

                        
                        <Form.Group className="LetrasP" controlId="formBasicPassword">
                                    <p className="LetrasP">Status</p>
                                    <select id="cars" name="cadastro"
                                        onChange={(event) => SetTipoDecisao(event.target.value)}
                                    >
                                        <option value={0}>Colaborador</option>
                                        <option value={1}>Cliente</option>
                                    </select>
                        </Form.Group> 


                        {/* <Form.Group className="LetrasP" controlId="formBasicPassword">
                            <Form.Label className="LetrasP">Confirmar Senha: </Form.Label>
                            <Form.Control type="password" placeholder="Confirmar Senha" />
                        </Form.Group>     
                        */}

                        <p style={{color:"red", marginTop:25}}>{error}</p>

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

export default Cadastro;