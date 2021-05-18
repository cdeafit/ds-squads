import React from "react"
import mujerCareer from '../../img/mujer-career.png';
import {Link} from 'react-router-dom'
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';

// const Home = () => {
//     return (
//         <>
//         <h2>Ingresa tus resultados! 👇</h2>
//         <div className="flex">
//             <div>
//                 <div>
//                     <img src={mujerCareer} alt=""/>
//                 </div>
//             </div>
//             <div className="flex">
//                 <div>
//                     <h3>Lectura crítica</h3>
//                     <p>{this.state.ra1}</p>
//                     <input maxlength = "3" onChange={event => this.handleInputChange(event,1)}/>
//                 </div>
//                 <div>
//                     <h3>Matemáticas</h3>
//                     <p>{this.state.ra2}</p>
//                     <input maxlength = "3" onChange={event => this.handleInputChange(event,2)}/>
//                 </div>
//                 <div>
//                     <h3>Sociales y ciudadanas</h3>
//                     <p>{this.state.ra3}</p>
//                     <input maxlength = "3" onChange={event => this.handleInputChange(event,3)}/>
//                 </div>
//                 <div>
//                     <h3>Ciencias naturales</h3>
//                     <p>{this.state.ra4}</p>
//                     <input maxlength = "3" onChange={event => this.handleInputChange(event,4)}/>
//                 </div>
//                 <div>
//                     <h3>Inglés</h3>
//                     <p>{this.state.ra5}</p>
//                     <input maxlength = "3" onChange={event => this.handleInputChange(event,5)} />
//                 </div>
//                 <div>
//                     <Link to="/results">
//                     <button maxlength = "3" onClick={this.handleSubmit}>Resultado</button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//       </>
//     )
// }


class Home extends React.Component { //clase principal
  constructor(props) {
    super(props);
    this.state = {
      r1: 0,
      r2: 0,
      r3: 0,
      r4: 0,
      r5: 0,
      ra1: ' ',
      ra2: ' ',
      ra3: ' ',
      ra4: ' ',
      ra5: ' ',

    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() { //Función para validar resultados ingresados
    const rAll = [this.state.r1,this.state.r2,this.state.r3,this.state.r4,this.state.r5];
    var n= true;
    for (var i = 0; i < 5; i++) {
      if( rAll[i]<0 || rAll[i]>100){
        alert("¿Ingresó un puntaje mayor o menor a los posibles? Por favor corríjalos.");
        n = false;
        switch(i) {
          case 0:
            this.setState({ra1:'Valor inválido! 😢'});
            break;
          case 1:
            this.setState({ra2:'Valor inválido! 😢'});
            break;
          case 2:
            this.setState({ra3: 'Valor inválido! 😢'});
            break;
          case 3:
            this.setState({ra4: 'Valor inválido! 😢'});
            break;
           case 4:
            this.setState({ra5: 'Valor inválido! 😢'});
            break;
        }
      }
   }
   if(n){

        <SweetAlert 
        success={this.props.alerts.success}
        danger={!this.props.alerts.success}
        title={this.props.alerts.title}
        show={this.props.alerts.show} 
        onConfirm={this.props.closeAlert}
        />
        alert(this.state.r1+","+this.state.r2+","+this.state.r3+","+this.state.r4+","+this.state.r5);
        
   }
  }

  handleInputChange(event,id) { //Función para guardar los resultados según se escriban
    const target = event.target;
    switch(id) {
      case 1:
        this.setState({r1: target.value});
        break;
      case 2:
        this.setState({r2: target.value});
        break;
      case 3:
        this.setState({r3: target.value});
        break;
      case 4:
        this.setState({r4: target.value});
        break;
       case 5:
        this.setState({r5: target.value});
        break;
    }
  }
  
  render(){
    return (
        <>
          <h2>Ingresa tus resultados! 👇</h2>
          <div className="flex">
              <div>
                  <div>
                      <img src={mujerCareer} alt=""/>
                  </div>
              </div>
              <div className="flex">
                  <div>
                      <h3>Lectura crítica</h3>
                      <p>{this.state.ra1}</p>
                      <input maxlength = "3" onChange={event => this.handleInputChange(event,1)}/>
                  </div>
                  <div>
                      <h3>Matemáticas</h3>
                      <p>{this.state.ra2}</p>
                      <input maxlength = "3" onChange={event => this.handleInputChange(event,2)}/>
                  </div>
                  <div>
                      <h3>Sociales y ciudadanas</h3>
                      <p>{this.state.ra3}</p>
                      <input maxlength = "3" onChange={event => this.handleInputChange(event,3)}/>
                  </div>
                  <div>
                      <h3>Ciencias naturales</h3>
                      <p>{this.state.ra4}</p>
                      <input maxlength = "3" onChange={event => this.handleInputChange(event,4)}/>
                  </div>
                  <div>
                      <h3>Inglés</h3>
                      <p>{this.state.ra5}</p>
                      <input maxlength = "3" onChange={event => this.handleInputChange(event,5)} />
                  </div>
                  <div>
                  <Link to="/results">
                      <button maxlength = "3" onClick={this.handleSubmit}>Resultado</button>
                </Link>
                  </div>
              </div>
          </div>
        </>
    );
  }
}

export default Home