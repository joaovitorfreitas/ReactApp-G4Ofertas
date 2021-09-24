import { ButtonToolbar } from "react-bootstrap";
import React, { Component } from 'react'
import BannerPerfilUser from "../../Assets/Banner/BannerPerfilUser.png"
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import "../../Pages/Perfil/style.css"


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
                <Header />
                <div className="DivPerfilCtn">
                    <div className="EsquerdaDivPerfilUser">   
                        <form>
                            <p style={{paddingBottom: 3, fontSize:19}}>Nome:</p>
                            <input type="text" className="BtnSizePerfil"/>

                            <p style={{paddingBottom: 3, fontSize:19}}>Email:</p>
                            <input type="email" className="BtnSizePerfil"/>

                            <p style={{paddingBottom: 8, fontSize:19}}>Senha:</p>
                            <input type="password" className="BtnSizePerfil"/>

                            <div className="btnDivPerfilDown">
                                <button className="BtnPerfilUsuarioDownPage">Salvar</button>                  
                            </div>
                        </form>
                    </div>
                    <div className="DireitaDivPerfilUser">
                        <img
                            src={BannerPerfilUser}
                        />
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Perfil;