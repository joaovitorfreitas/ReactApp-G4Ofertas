import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import LogoHeader from "../../Assets/Icons/ShoppItemsLogoHeader.png";
import "../Header/style.css"

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
    listarProduto=()=>{
        fetch('',{
            headers:{
                'Content-Type':'application/json'
            }
        })
    }
   render(){
       return(
           <>
               <main>
                    
               </main>
           </>
       )
   } 
}

export default List;