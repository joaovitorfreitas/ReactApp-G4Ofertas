import { ButtonToolbar } from "react-bootstrap";
import React, { Component } from 'react'

class Perfil extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            senha : '',
            nome: '',
            listaUsuario:[]
        }
    };


    alterarSenha =(event) => {
        event.preventDefult();

        fetch('', {
            method: "PUT", 
            body: JSON.stringify(
                {
                    senha: this.state.senha
                }),
            headers:{
                'Content-Type':'application/json', 
               // 'authorization': 'Bearer' + localStorage.getItem('')
            }
        });
    }


    ListarUsuario=() =>{
        fetch('',{
            headers:{
                'Content-Type':'application/json'
            }
        })
    }


    ComponentDitMount(){
        this.ListarUsuario()
    }


    atualizeLinhaCampo= async(campo) => {
        await this.setState({
            [campo.target.name]: campo.target.value})
    }

    
    render(){
        return(
            <>
                <main>
                    <div> 
                                <div>                  
                                    <div>
                                    {
                                        this.state.listaUsuario.map((Usuario) =>{
                                            return(
                                                <div key={Usuario.idUsuario}>
                                                    <div>{Usuario.nome}</div>
                                                    <div>{Usuario.email}</div>                                              
                                                </div>                                          
                                            )                                     
                                        })                                            
                                        }
                                </div>                               
                                    <form onSubmit={this.alterarSenha}>
                                        <input type="text" name="senha" value={this.state.senha} onChange={this.atualizeLinhaCampo}></input>
                                        <button type="submit">Salvar</button>
                                    </form>  
                                </div>


                        <div>
                            
                        </div>


                        </div>
                </main>
            </>
        );
    }
}

export default Perfil;