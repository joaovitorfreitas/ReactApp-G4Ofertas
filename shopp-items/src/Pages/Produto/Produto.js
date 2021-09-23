import React, { Component } from 'react'
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Carousels from "../../Components/Carousels";
import ListProdutosAlimentos  from "../../Components/ListAllP/ListP"
import { Container,Row, Col } from "react-bootstrap";
import  "./index.css"


class Usuario extends Component {
    constructor(props){
        super(props);
        this.state = {
            listaProduto : [],
            nomeProduto : "",
            descricao : "",
            imagem : "",
            quantidade : ""
        }
    };
    ReservarProduto =(event) => {
        event.preventDefult();

        fetch('', {
            method: "POST", 
            body: JSON.stringify(
                {
                    Quantidade : this.state.quantidade
                }),
            headers:{
                'Content-Type':'application/json'
            }
            //localStorage.getItem('auth')
            //Precisamos de um if para ONG's
            //if()
        });
    }

    listarProduto=()=>{
        fetch('',{
            headers:{
                'Content-Type':'application/json'
            }
        })
    }
    

    componentDidMount(){
        this.listarProduto()
    }

    render(){
        return(
            <>
                <Header />
                <div className="Sizediv">
                <Container className="ProdutoPageContainer">
                    <Row>
                        <Col className="NamedivCarousel"> <Carousels /> </Col>             
                    </Row>
                    <ListProdutosAlimentos />
                    <ListProdutosAlimentos />
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
}
export default Usuario;