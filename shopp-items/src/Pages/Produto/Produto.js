import React, { Component } from 'react'

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
            <div>
                <main>
                <table>
                    <thead>
                        <tr>
                            <th>Imagem</th>
                            <th>titulo</th>
                            <th>descricao</th>
                            <th>quantidade</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.listaProduto.map((Produto) =>{
                                return(
                                    <tr key={Usuario.idProduto}>
                                        <td>{Usuario.imagem}</td>
                                        <td>{Usuario.titulo}</td>
                                        <td>{Usuario.descricao}</td> 
                                        <td>{Usuario.quantidade}</td>                                               
                                    </tr>                                         
                                    )                                      
                                }                                  
                            )                                            
                        }
                        </tbody>

                    </table> 
                    <button onClick={this.ReservarProduto}>Reservar</button>
                </main>
            </div>
        )
    }
}
export default Usuario;