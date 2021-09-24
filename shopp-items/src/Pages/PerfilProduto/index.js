<<<<<<< HEAD
import { Row, Container, Col } from "react-bootstrap";
import Header from "../../Components/Header";
import Carousels from "../../Components/Carousels";
import Footer from "../../Components/Footer";
import Bananaimg from "../../Assets//Icons/Bananaimg.png";
import "./style.css";
export const PerfilProduto = () => {
    return(
        <>
        <Header/>
        <div className="Quadrado1">
        <div className="Imagem"> <img src={Bananaimg.png}/></div>
        <div className="Banana">
            
             <h2 className="Banana">Banana Nanica</h2>
             <h2 className="Dinheiro">R$2,50</h2>   
             </div>
      
        <div className ="Quantidade">
          
            <h2 className="Quantidade">Quantidade</h2>
            <h2 className="Numero">1</h2>
            </div>
        
        <div className="BotaoReserva">
            <h2 className="Reserva">Reserva</h2>
            <Button  type="submit" className="BtnReserva">
              Reserva
             </Button>
            </div>
        </div>
        <Footer/>
=======
import React, { useState }from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css"
import { useHistory, Link } from "react-router-dom";
import axios from 'axios';
import BananaBannerPerfil from "../../Assets/BannerProdutos/BananaPerfil.png";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "../../Pages/PerfilProduto/style.css"



export const PerfilProduto = () =>{
    
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
                        <button className="BtnPerfilProduto">Reservar</button>
                    </div>
            </div>
        </div>
        <Footer />      
>>>>>>> 4a585ae4a5f799243dc78c3ebf2202eeba999901
        </>
    );
}

<<<<<<< HEAD
export default PerfilProduto;

     
=======
export default PerfilProduto;
>>>>>>> 4a585ae4a5f799243dc78c3ebf2202eeba999901
