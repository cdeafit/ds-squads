import React from "react";
import { Lightbox } from "react-modal-image";
import mujerCareer from "../../img/mujer-career.png";
import loadingIcon from "../../img/carga.gif";
//import { Link } from "react-router-dom";
import axios from "axios";
import SweetAlert from "sweetalert";
import inputData from "../../database/inputData";
import { modelFetch } from "../../config";

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
      isLoading: false,
      onDragState: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formChangeEvent = this.formChangeEvent.bind(this);
  }


  setLabelText(bool){
    if(bool) return "Arrastra aquí tu PDF" 
    else return "Sube aquí el PDF con los resultados de tus ICFES";

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
    if (allZeros) {
      SweetAlert({
        title: "Alerta",
        text: "¿Todos tus resultados de tu ICFES fueron cero (0)?",
        icon: "warning",
        buttons: ["Corregir", "Continuar"]
      }).then(respuesta => { if (respuesta) this.props.history.push("/results") });
    } else {
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

  handleFocus = (event) => event.target.select(); //handler de formulario numerico

  onUploadPdf = async (event) => { //Request del pdf
    this.setState({ isLoading: true });
    try {
      const obj = { script: event.target.files[0] };
      const data = new FormData();
      Object.keys(obj).forEach(key => data.append(key, obj[key]));
      //console.log(data.get("script"));
      const res = await axios.post(modelFetch, data);
      //console.log(res.data);
      inputData.res1 = res.data["lectura_critica"];
      inputData.res2 = res.data["matematicas"];
      inputData.res3 = res.data["sociales_y_ciudadanas"];
      inputData.res4 = res.data["ciencias_naturales"];
      inputData.res5 = res.data["ingles"];
      inputData.name = res.data["apnombre"];
      inputData.isDone = true;
      this.props.history.push("/results");
    }
    catch (e) {
      this.setState({ isLoading: false });
      SweetAlert({
        title: "Error al leer archivo",
        text: "No hemos podido reconocer tu archivo PDF, si sigues presentando este problema, por favor, diligencia el formulario.",
        icon: "error",
      });
    }
  };

  formChangeEvent(index, event) {
    inputData.name = event.target.value;
  }

  render() {
    return (
      <>
        <div className="flex input">
          <div>
            <div>
              <img src={mujerCareer} alt="" draggable="false" />
            </div>
          </div>
          <div>
            <label htmlFor="uploadFile" onMouseLeave={(event) => this.setState({onDragState: false})} onMouseEnter={(event) =>this.setState({onDragState: true})}>{this.setLabelText(this.state.onDragState)}</label>
            <input id="uploadFile" onChange={this.onUploadPdf} type="file" accept=".pdf" />
            {
              this.state.isLoading && (
                <Lightbox
                  hideZoom={true}
                  hideDownload={true}
                  medium={loadingIcon}
                  large={loadingIcon}
                />
              )
            }
          </div>
          <div className="flex">
            <p><i>Si no tienes el PDF con los resultados o tienes dificultades para subirlo, también puedes diligenciar el siguiente <b>formulario</b></i></p>
            <div>
              <h3>Lectura crítica</h3>
              <p id="ra1" style={{ display: "none" }}>
                ¡Valor inválido! 😢
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
                ¡Valor inválido! 😢
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
                ¡Valor inválido! 😢
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
                ¡Valor inválido! 😢
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
                ¡Valor inválido! 😢
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
                Ver carreras
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
