import React from "react";
import sistemas from "../../img/sistemas.jpg";
import derecho from "../../img/Derecho.jpg";
import nutricion from "../../img/nutricion.jpg";
import axios from "axios";
// import { history } from "../../history";
import {withRouter} from "react-router-dom"
import {modelEndpoint} from "../../config"


class Results extends React.Component {
  //clase principal
  
  constructor(props) {
    var careerDict = {};
    super(props);
    this.state = {
      c1: "Carrera1",
      rc1: 0,
      c2: "Carrera2",
      rc2: 0,
      c3: "Carrera3",
      rc3: 0,
      ca: "Carrera aux",
      rca: 0,
    };
    this.displaySelected = this.displaySelected.bind(this);
    document.title = "Career | Results";
  }

  render() {

    return (
      <>
        <h1>Las carreras que te recomendamos son:</h1>
        <div className="results">
          <div id="career1">
            <h2>{this.state.c1}</h2>
            <div>
              <img src={sistemas} alt="" />
              <div
                id="bar1"
                style={{ top: -306 + ((100 - this.state.rc1) * 306) / 100 }}
              >
                <h3 style={{ fontSize: 60 * ((this.state.rc1 + 10) / 100) }}>
                  {this.state.rc1}%
                </h3>
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <b>Universidad #1</b>
                  <i>Campus</i>
                </li>
                <li>
                  <p>
                    <b></b>
                  </p>
                  <p>
                    <i></i>
                  </p>
                </li>
                <li>
                  <p>
                    <b></b>
                  </p>
                  <p>
                    <i></i>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div id="career2">
            <h2>{this.state.c2}</h2>
            <div>
              <img src={derecho} alt="" />
              <div
                id="bar2"
                style={{ top: -306 + ((100 - this.state.rc2) * 306) / 100 }}>
                <h3 style={{ fontSize: 60 * ((this.state.rc2 + 10) / 100) }}>
                  {this.state.rc2}%
                </h3>
              </div>
            </div>
            <div>
              <ul>
                <li>
                    <b></b>
                    <i></i>
                </li>
                <li>
                    <b></b>
                    <i></i>
                </li>
                <li>
                    <b></b>
                    <i></i>
                </li>
              </ul>
            </div>
          </div>
          <div id="career3">
            <h2>{this.state.c3}</h2>
            <div>
              <img src={nutricion} alt="" />
              <div
                id="bar3"
                style={{ top: -306 + ((100 - this.state.rc3) * 306) / 100 }}
              >
                <h3 style={{ fontSize: 60 * ((this.state.rc3 + 10) / 100) }}>
                  {this.state.rc3}%
                </h3>
              </div>
            </div>
            <div>
              <ul>
                <li>
                    <b id="college3-1"></b>
                    <i id="campus3-1"></i>
                </li>
                <li>
                    <b id="college3-2"></b>
                    <i id="campus3-2"></i>
                </li>
                <li>
                    <b id="college3-3"></b>
                    <i id="campus3-3"></i>
                </li>
              </ul>
            </div>
          </div>
          <div></div>
        </div>
        <div className="flex plus">
        <div className="another results">
        <form>
          <h3>¿Quieres saber de otra carrera?</h3>
          <select
            name="Seleccione una carrera"
            id="aditionalCareer"
            onChange={this.displaySelected}
          >
            <option name='default'>Seleccione una carrera...</option>
          </select>
        </form>
        <div id="career4">
          <h2>{this.state.ca}</h2>
          <div>
            <img src={sistemas} alt="" />
            <div
              id="bar4"
              style={{ top: -306 + ((100 - this.state.rca) * 306) / 100 }}
            >
              <h3 style={{ fontSize: 60 * ((this.state.rca + 10) / 100) }}>
                {this.state.rca}%
              </h3>
            </div>
          </div>
          <div>
            <ul>
              <li>
                  <b id="college4-1">sd</b>
                  <i id="campus4-1">sd</i>
              </li>
              <li>
                  <b id="college4-2"></b>
                  <i id="campus4-2"></i>
              </li>
              <li>
                  <b id="college4-3"></b>
                  <i id="campus4-3"></i>
              </li>
            </ul>
          </div>
        </div>
        </div>
        <div><h2>¿Cómo funciona?</h2>
        <p><i>Mauris dictum lorem eu diam gravida, ac condimentum risus tempor. Quisque justo nunc, egestas ac sollicitudin eget, volutpat ut nunc. Donec mi justo, sollicitudin quis dictum quis, bibendum sit amet lacus. Proin id vestibulum nisl. Praesent auctor eget est eu maximus. Aliquam rutrum urna ac est vehicula, et bibendum lorem feugiat. Quisque a fermentum purus, sed dictum neque. Morbi eget nunc sagittis, tempus nunc non, fringilla ligula. Phasellus ullamcorper eleifend lacus, feugiat egestas erat venenatis eu. Nam sit amet urna velit. Etiam nec justo laoreet, feugiat risus nec, aliquam ex. Donec varius condimentum neque ut laoreet. Aliquam sit amet dui id ipsum vehicula mollis non vel enim. Sed maximus augue at eros interdum faucibus. Maecenas dictum quis elit et cursus.</i></p>
        <p>Donec eget tincidunt velit. Nullam blandit orci ac lacus lobortis luctus a non metus. Etiam blandit vehicula finibus. Phasellus fringilla quis neque ac euismod. Sed tincidunt nec purus ac laoreet. Nullam sodales consectetur pharetra. Nunc luctus iaculis risus, in eleifend sem euismod sed. Maecenas hendrerit luctus posuere. Nam porttitor nulla et sapien ultricies, et blandit diam tincidunt. Nam dapibus, nisi in vehicula bibendum, nisi ligula mollis augue, ac porttitor ipsum sapien vel nibh. Mauris dictum magna non libero lacinia tempus. Ut lacinia massa a luctus porta. Cras dignissim faucibus sem, eu aliquam eros vestibulum a.</p>
        </div>
        </div>
      </>
    );
  }

  async predict_career(language, math, humanity, science, english) {
    try {
      const body = {
          language,
          math,
          humanity,
          science,
          english
      }
      const res = await axios.get(modelEndpoint, body)
      return res.data
    } catch {
      this.props.history.push("/404")
    }
  }


  // predict_career(language, math, humanity, science, english) {
  //   var careers = [
  //     "NEGOCIOS INTERNACIONALES",
  //     "INGENIERIA INDUSTRIAL",
  //     "PSICOLOGIA",
  //     "COMUNICACION SOCIAL- PERIODISMO",
  //     "COMUNICACION SOCIAL",
  //     "ADMINISTRACION DE EMPRESAS",
  //     "DERECHO",
  //     "INGENIERIA AMBIENTAL",
  //     "CONTADURIA PUBLICA",
  //     "INGENIERIA MECANICA",
  //     "INGENIERIA CIVIL",
  //     "TRABAJO SOCIAL",
  //     "NUTRICION Y DIETETICA",
  //     "ECONOMIA",
  //     "ODONTOLOGIA",
  //     "ARQUITECTURA",
  //     "LICENCIATURA EN EDUCACION PREESCOLAR",
  //     "SOCIOLOGIA",
  //     "FONOAUDIOLOGIA",
  //     "ADMINISTRACION DE NEGOCIOS",
  //     "INGENIERIA QUIMICA",
  //     "LICENCIATURA EN PEDAGOGÍA INFANTIL",
  //     "CONTADURÍA PÚBLICA",
  //     "MEDICINA VETERINARIA",
  //     "INGENIERIA DE SISTEMAS",
  //     "INGENIERIA ELECTRONICA",
  //     "INGENIERIA DE PETROLEOS",
  //     "INGENIERIA BIOMEDICA",
  //     "INGENIERIA AMBIENTAL Y SANITARIA",
  //     "ENFERMERIA",
  //     "MEDICINA VETERINARIA Y ZOOTECNIA",
  //     "COMERCIO INTERNACIONAL",
  //     "BIOLOGIA",
  //     "INGENIERIA ELECTRICA",
  //     "ADMINISTRACION DE NEGOCIOS INTERNACIONALES",
  //     "INGENIERIA MECATRONICA",
  //     "CIENCIA POLITICA",
  //     "ADMINISTRACIÓN DE EMPRESAS",
  //     "COMUNICACION SOCIAL Y PERIODISMO",
  //     "MEDICINA",
  //     "RELACIONES INTERNACIONALES",
  //     "LICENCIATURA EN PEDAGOGIA INFANTIL",
  //     "ADMINISTRACIÓN EN SALUD OCUPACIONAL",
  //     "CIENCIAS MILITARES",
  //     "MERCADEO",
  //     "INSTRUMENTACION QUIRURGICA",
  //     "DISEÑO INDUSTRIAL",
  //     "LICENCIATURA EN CIENCIAS SOCIALES",
  //     "FISIOTERAPIA",
  //     "DISEÑO GRAFICO",
  //     "PSICOLOGÍA",
  //     "PUBLICIDAD",
  //     "SALUD OCUPACIONAL",
  //     "INGENIERIA AGRONOMICA",
  //   ];
    
  //   var careers_prob = {};
  //   careers.forEach((element) => {
  //     careers_prob[element] = Math.random();
  //   });
  //   var i = 1;
  //   var sel = document.getElementById("aditionalCareer");
  //   for (var key in careers_prob) {
  //     var value = careers_prob[key];
  //     var opt = document.createElement("option");
  //     opt.appendChild(document.createTextNode(key));
  //     opt.value = value;
  //     sel.appendChild(opt);
  //     //console.log(i+" "+Math.round(value * 100, 0) + " " + key);i++;
  //   }
  //   return careers_prob;
  // }


  top3Careers(dictAux) {
    var dict = dictAux;
    var bestsValue = [];
    var bestsKeys = [];
    var i = 0;
    do {
      var aux = 0;
      var auxKey = "";
      Object.entries(dict).forEach(([key,value]) => {
        if (value > aux) {
          aux = value;
          auxKey = key;
      }
    })
      delete dict[auxKey];
      bestsKeys.push(auxKey);
      bestsValue.push(Math.trunc(aux * 100));
      i++;
    }while(i < 3);
    this.setState({ 
      c1: bestsKeys[0],c2: bestsKeys[1],c3: bestsKeys[2],
      rc1: bestsValue[0],rc2: bestsValue[1],rc3: bestsValue[2]});
  }


  displaySelected() {
    var e = document.getElementById("aditionalCareer");
    var c = e.options[e.selectedIndex].text;
    var rc = e.options[e.selectedIndex].value;
    this.setState({ ca: c });
    this.setState({ rca: Math.trunc(rc * 100)});
    if(c === 'Seleccione una carrera...'){
        document.getElementById("career4").style.display = 'none';
    }else{
    document.getElementById("career4").style.display = 'block';
    }
  }

  componentDidMount() {
    var dict = this.predict_career(10, 10, 10, 10, 10);
    this.top3Careers(dict);
  }
}

export default withRouter(Results);
