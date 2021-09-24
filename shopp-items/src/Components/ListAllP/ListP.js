import React, { Component } from 'react'
import { Card} from "react-bootstrap";
import Banana from "../../Assets/BannerProdutos/Banana.png"
import "../../Pages/ProdutoAlimentos/index.css"

class List extends Component {
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

    listarProduto=()=>{
       //if(se a url for alimentos)
        fetch('',{
            headers:{
                'Content-Type':'application/json'
            }
        })
        //else listar roupas
    }
    
    ComponentDitMount(){
        this.ListarUsuario()
    }

   render(){
       return(
           <>
               <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Banana} />
                <Card.Body>
                    <Card.Title>Banana</Card.Title>
                    <Card.Text>
                    Unidade : 7
                    </Card.Text>
                    <Card.Text>
                    Banana nanica 12$
                    </Card.Text>
                </Card.Body>
                </Card >
           </>
       )
   } 
}

export default List;