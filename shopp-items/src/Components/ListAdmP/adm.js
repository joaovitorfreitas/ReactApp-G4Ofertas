import React from "react";

import React, { Component } from 'react'

class Adm extends Component {
    constructor(props){
        super(props);
        this.state = {
            listaProduto : [],
            nomeProduto : "",
            descricao : "",
            imagem : "",
            quantidade : "",
            status: 0,
            promocao: 0
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
    CadastrarProduto = async () =>{
        fetch('',{        
        method: "POST",
        body:JSON.stringify({
            titulo : this.state.titulo,
            descricao : this.state.descricao,
            imagem : this.state.imagem,
           quantidade: this.state.quantidade,
            status : this.state.status,
            promocao : this.state.promocao
            }),
        headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + localStorage.getItem('auth')
            }
        })
    }
    
    ComponentDitMount(){
        this.ListarUsuario()
    }
    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name] : campo.target.value })
    };

   render(){
       return(
           <>
               <main>
                   <div>
                       <div>
                       <form onSubmit={this.alterarSenha}>
                                        <input type="text" name="titulo" value={this.state.titulo} onChange={this.atualizeLinhaCampo}></input>
                                        <input type="text" name="imagem" value={this.state.imagem} onChange={this.atualizeLinhaCampo}></input>
                                        <input type="text" name="descricao" value={this.state.descricao} onChange={this.atualizeLinhaCampo}></input>
                                        <input type="text" name="quantidade" value={this.state.quantidade} onChange={this.atualizeLinhaCampo}></input>
                                        <input type="text" name="status" value={this.state.status} onChange={this.atualizeLinhaCampo}></input>
                                        <input type="text" name="promocao" value={this.state.promocao} onChange={this.atualizeLinhaCampo}></input>
                                        <button type="submit">Salvar</button>
                                    </form> 
                       </div>
                        <div>
                            <button>Ofertas</button>
                            <h1>Todos os Alimentos</h1>
                            <div>
                                {
                                this.state.listaProduto.map((Produto) =>{
                                    return(
                                        <a key={Produto.idProduto } href="#">
                                            <image src={Produto.imagem}/>
                                            <h1>{Produto.titulo}</h1>
                                            <p>{Produto.descricao}</p> 
                                            <p>{Produto.quantidade}</p>
                                            <p>{Produto.status}</p>
                                            
                                            <image onClick={{
                                                // função deletar
                                            }}/>                                               
                                        </a>                                         
                                        )                                      
                                    }                                  
                                )                                            
                                }                          
                            </div>
                        </div>
                    </div>
               </main>
           </>
       )
   } 
}

export default Adm;