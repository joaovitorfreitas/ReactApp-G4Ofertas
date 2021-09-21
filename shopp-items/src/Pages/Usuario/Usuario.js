import { ButtonToolbar } from "react-bootstrap";

class Usuario extends Component {
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
            method: "PATCH", 
            body: JSON.stringify(
                {
                    senha: this.state.senha
                }),
            headers:{
                'Content-Type':'application/json', 
                'authorization': 'Bearer' + localStorage.getItem('')
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
            [campo.target.name]: campo.target.value
        })
    }

    
    render(){
        return(
            <div>
                <main>
                      <table>
                          <thead>
                              <tr>
                                  <th>nome</th>
                                  <th>email</th>
                                  <th>senha</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                                  this.state.listaUsuario.map((Usuario) =>{
                                      return(
                                          <tr key={Usuario.idUsuario}>
                                              <td>{Usuario.nome}</td>
                                              <td>{Usuario.email}</td>
                                              
                                          </tr>
                                      )
                                  })
                                            
                                }
                                    {/* <form onSubmit={this.alterarSenha}>
                                             <input type="text" name="senha" onChange={this.atualizeLinhaCampo}></input>
                                             <Button type="submite">Salvar</Button>
                                    </form> */}
                          </tbody>
                          </table>  
                </main>
            </div>
        );
    }
}

export default Usuario;