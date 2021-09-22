import React from "react";

import React, { Component } from 'react'

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
    //mudar para quando consumir api
    listarProduto=()=>{
        //if()
        fetch('',{
            headers:{
                'Content-Type':'application/json'
            }
        })
        //else
    }
    
    ComponentDitMount(){
        this.ListarUsuario()
    }

   render(){
       return(
           <>
               <main>
                    <div>
                        <button>Ofertas</button>
                        <h1>Todos os Alimentos</h1>
                        <div>
                            {
                            this.state.listaProduto.map((Produto) =>{
                                return(
                                    <a key={Produto.idProduto} href="#">
                                        <image src={Produto.imagem}/>
                                        <h1>{Produto.titulo}</h1>
                                        <p>{Produto.descricao}</p> 
                                        <p>{Produto.quantidade}</p>
                                        <p>{Produto.status}</p>                                               
                                    </a>                                         
                                    )                                      
                                }                                  
                            )                                            
                            }                          
                        </div>
                    </div>
               </main>
           </>
       )
   } 
}

export default List;