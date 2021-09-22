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
            <>
                <main>
                <div>
                    <div>
                        {
                            this.state.listaProduto.map((Produto) =>{
                                return(
                                    <div key={Produto.idProduto}>
                                        <image src={Produto.imagem}/>
                                        <div className="linha"></div>
                                        <h1>{Produto.titulo}</h1>
                                        <p>{Produto.descricao}</p> 
                                        <p>{Produto.quantidade}</p>                                               
                                    </div>                                         
                                    )                                      
                                }                                  
                            )                                            
                        }
                        </div>

                    <button onClick={this.ReservarProduto}>Reservar</button>
                    </div> 
                </main>
            </>
        )
    }
}
export default Usuario;