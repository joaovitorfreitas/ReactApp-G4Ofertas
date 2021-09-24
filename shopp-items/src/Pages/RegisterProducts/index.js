import React, { useState } from 'react'
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Carousels from "../../Components/Carousels";
import ListProdutosAlimentos from "../../Components/ListAllP/ListP"
import { Container, Row, Col } from "react-bootstrap";
import "./index.css"
import api from "../../Services/BaseUrl/BaseUrl"



export const RegistarProdutos = () =>{

    const [titulo, settitulo] = useState("")
    const [imagem, setimagem] = useState("")
    const [descricao, setdescricao] = useState("")
    const [statusPreco, setstatusPreco] = useState([])
    const [statusReserva, setstatusReserva] = useState([])
    const [quantidade, setquantidade] = useState(0)



        function SubmitItens( event ){


            event.preventDefault()

            console.log("Entrou")

            console.log(titulo)
            console.log(imagem)
            console.log(descricao)
            console.log(statusPreco)
            console.log(statusReserva)
            console.log(quantidade)


        }


  
        return (
            <>
                <Header />
                <div className="Sizediv">
                    <Container className="ProdutoPageContainer">
                        <Row>
                            <Col className="NamedivCarousel"> <Carousels /> </Col>
                
                            <form className="FormClassCadastroproduto" onSubmit={SubmitItens}>
                                <div>
                                    <p>Nome:</p>
                                    <input
                                        type="text"
                                        value={titulo}
                                        onChange={(event) => settitulo(event.target.value)}
                                    />

                                    <p>Quantidade:</p>
                                    <input
                                        type="text"
                                        value={quantidade}
                                        onChange={(event) => setquantidade(event.target.value)}
                                    />
                
                                </div>

                                <div>
                                    <p>Descrição</p>
                                    <input
                                        type="text"
                                        value={descricao}
                                        onChange={(event) => setdescricao(event.target.value)}
                                    />

                                    <p>Status</p>
                                    <select id="Status" name="Status"
                                        onChange={(event) => setstatusReserva(event.target.value)}
                                    >
                                        <option value={0}>Indisponivel</option>
                                        <option value={1}>Disponivel</option>

                                    </select>
                                </div>
                                <div>
                                    <p>Promoção</p>
                                    <select id="Promocao" name="Promocao"
                                        onChange={(event) => setstatusPreco(event.target.value)}
                                    >
                                        <option value={0}>Sim</option>
                                        <option value={1}>Não</option>
                                    </select>

                                    <button type="submit">Adicionar Alimento</button>
                                </div>
                            </form>

                            <div>
                            <button className="btn">
                                Produtos
                            </button>
                            <h1>Todos os Alimentos</h1>
                            </div>
                        </Row>
                        <ListProdutosAlimentos />
                        <ListProdutosAlimentos />
                        <ListProdutosAlimentos />
                        <ListProdutosAlimentos />
                        <ListProdutosAlimentos />
                        <ListProdutosAlimentos />
                    </Container>
                </div>

                <Footer />
            </>
        )
}
export default RegistarProdutos;