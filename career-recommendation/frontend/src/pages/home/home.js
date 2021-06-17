import React from "react";
import mujerCareer from "../../img/mujer-career.png";
//import { Link } from "react-router-dom";
//import axios from "axios";
import SweetAlert from "sweetalert";
import inputData from "../../database/inputData";

class Home extends React.Component {
  //clase principal
  constructor(props) {
    super(props);
    this.state = {
      r1: 0,
      r2: 0,
      r3: 0,
      r4: 0,
      r5: 0,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    //Función para validar resultados ingresados

    inputData.res1 = this.state.r1;
    inputData.res2 = this.state.r2;
    inputData.res3 = this.state.r3;
    inputData.res4 = this.state.r4;
    inputData.res5 = this.state.r5;
    const check = [
      this.state.r1,
      this.state.r2,
      this.state.r3,
      this.state.r4,
      this.state.r5,
    ];
    let allZeros = true;
    check.forEach((element) => {
      if (element !== 0) return (allZeros = false);
    });
    if (allZeros){
      SweetAlert({
        title: "Alerta",
        text: "¿Todos tus resultados de tu ICFES fueron cero (0)?",
        icon: "warning",
        buttons: ["Corregir","Continuar"]
      }).then(respuesta => {if(respuesta)this.props.history.push("/results")});
    }else{
      this.props.history.push("/results");
    }
    inputData.isDone = true;
  }

  valueChecker(value, id) {
    if (value < 0 || value > 100 || value === "e") {
      document.getElementById("ra" + id).style.display = "block";
    } else {
      document.getElementById("ra" + id).style.display = "none";
    }
  }

  submitChecker() {
    // chequear si no hay alertas de valores inválidos
    const pAlerts = [
      document.getElementById("ra1").style.display,
      document.getElementById("ra2").style.display,
      document.getElementById("ra3").style.display,
      document.getElementById("ra4").style.display,
      document.getElementById("ra5").style.display,
    ];
    for (let i = 0; i < 5; i++) {
      if (pAlerts[i] === "block") {
        document.getElementById("submitButton").disabled = true;
        break;
      } else {
        document.getElementById("submitButton").disabled = false;
      }
    }
  }

  handleInputChange(event, id) {
    //Función para guardar los resultados según se escriban
    const target = event.target;
    switch (id) {
      case 1:
        this.setState({ r1: target.value });
        this.valueChecker(target.value, id);
        break;
      case 2:
        this.setState({ r2: target.value });
        this.valueChecker(target.value, id);
        break;
      case 3:
        this.setState({ r3: target.value });
        this.valueChecker(target.value, id);
        break;
      case 4:
        this.setState({ r4: target.value });
        this.valueChecker(target.value, id);
        break;
      case 5:
        this.setState({ r5: target.value });
        this.valueChecker(target.value, id);
        break;
      default: break;
    }
    this.submitChecker();
  }

  handleFocus = (event) => event.target.select();

  render() {
    return (
      <>
        <h2>Ingresa tus resultados! 👇</h2>
        <div className="flex input">
          <div>
            <div>
              <img src={mujerCareer} alt="" draggable="false" />
            </div>
          </div>
          <div className="flex">
            <div>
              <h3>Lectura crítica</h3>
              <p id="ra1" style={{ display: "none" }}>
                Valor inválido! 😢
              </p>
              <input
                type="number"
                value={this.state.r1}
                onFocus={this.handleFocus}
                onChange={(event) => this.handleInputChange(event, 1)}
              />
            </div>
            <div>
              <h3>Matemáticas</h3>
              <p id="ra2" style={{ display: "none" }}>
                Valor inválido! 😢
              </p>
              <input
                type="number"
                value={this.state.r2}
                onFocus={this.handleFocus}
                onChange={(event) => this.handleInputChange(event, 2)}
              />
            </div>
            <div>
              <h3>Sociales y ciudadanas</h3>
              <p id="ra3" style={{ display: "none" }}>
                Valor inválido! 😢
              </p>
              <input
                type="number"
                value={this.state.r3}
                onFocus={this.handleFocus}
                onChange={(event) => this.handleInputChange(event, 3)}
              />
            </div>
            <div>
              <h3>Ciencias naturales</h3>
              <p id="ra4" style={{ display: "none" }}>
                Valor inválido! 😢
              </p>
              <input
                type="number"
                value={this.state.r4}
                onFocus={this.handleFocus}
                onChange={(event) => this.handleInputChange(event, 4)}
              />
            </div>
            <div>
              <h3>Inglés</h3>
              <p id="ra5" style={{ display: "none" }}>
                Valor inválido! 😢
              </p>
              <input
                type="number"
                value={this.state.r5}
                onFocus={this.handleFocus}
                onChange={(event) => this.handleInputChange(event, 5)}
              />
            </div>

            <div>
                <button id="submitButton" onClick={this.handleSubmit}>
                  Resultado
                </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  componentDidMount() {
    document.title = "Career | Home";
  }
}

export default Home;