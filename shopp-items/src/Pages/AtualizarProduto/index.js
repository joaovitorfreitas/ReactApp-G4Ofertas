import React, { useState }from "react";
import { useHistory, Link } from "react-router-dom";
import axios from 'axios';
import BananaBannerPerfil from "../../Assets/BannerProdutos/BananaPerfil.png";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "../../Pages/PerfilProduto/style.css"



export const AtualizarProduto = () =>{
    
    return(
        <>
        <Header />
        <div className="DivPerfilProdutoSize">

            <div className="CtnPerfilProduto">
                    <img
                        style={{width: 365, height: 365}}
                         src={BananaBannerPerfil}
                    />
            </div>

            <div className="DireitaPerfilProduto"> 
            <div>
                    <h2 style={{marginTop: 28}}>Banana Nanica</h2>
                    <p style={{marginTop: 28}} style={{color: "#D95843", fontSize: 21}}>R$: 2,5O</p>
            </div>
                <div style={{display: "flex", marginTop: 28, justifyContent:"space-between"}}>
                                <p style={{fontWeight: "bold"}}>Quantidade:</p>

                                <input type="number" className="InptPerfilProduto"/>
                            </div>

                    <div className="BtnPerfilProdutodiv"> 
                        <button className="BtnPerfilProduto">Atualizar</button>
                    </div>
            </div>
        </div>
        <Footer />      
        </>
    );
}

export default AtualizarProduto;