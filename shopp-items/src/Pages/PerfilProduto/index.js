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
        </>
    );
}

export default PerfilProduto;

     