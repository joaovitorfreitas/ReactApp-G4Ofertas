import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Cad from './Pages/RegisterUser';
import Produto from './Pages/ProdutoAlimentos/Produto';
import Perfil from './Pages/Perfil/Perfil';
import perfilProduto from './Pages/PerfilProduto/index'
import AtualizarProduto from './Pages/AtualizarProduto/index'
import RegistrarProduto from './Pages/RegisterProducts/index'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';




const routing = (
  <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path = "/home" component={Home}/>
        <Route path = "/Login" component={Login}/>
        <Route path = "/Cadastro" component={Cad}/>
        <Route path = "/perfil" component={Perfil}/>
        <Route path = "/Produto" component={Produto}/>
        <Route path = "/PerfilProduto" component={perfilProduto}/>
        <Route path = "/AtualizarProduto" component={AtualizarProduto} />
        <Route path ="/RegistrarProdutos" component={RegistrarProduto} />
      </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
