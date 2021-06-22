import React from "react";
import sistemas from "../../img/sistemas.jpg";
//import derecho from "../../img/Derecho.jpg";
//import nutricion from "../../img/nutricion.jpg";
import estrellas from "../../img/estrella.png";
import axios from "axios";
// import { history } from "../../history";
import { withRouter } from "react-router-dom";
import { modelEndpoint, token } from "../../config";
import { database } from "../../database/databaseParser";
import { comUni } from "../../database/commentariesParser";
import { unisIndex } from "../../database/unisIndexParser";
import inputData from "../../database/inputData";
import SweetAlert from "sweetalert";
import Popup from 'reactjs-popup';


class Results extends React.Component {
  //clase principal
  constructor(props) {
    super(props);
    this.state = {
      afinity: [
        {
          pregrado: "Carrera1",
          afinidad: 100,
        },
        {
          pregrado: "Carrera2",
          afinidad: 100,
        },
        {
          pregrado: "Carrera3",
          afinidad: 100,
        },
      ],
      careersUnis: [{}, {}, {}],
      careersData: database,
      careersAffinities: {},
      ca: "Carrera4",
      rca: 100,
      cau: {},
    };
    this.SelectorHandler = this.SelectorHandler.bind(this);
    this.AuxCareerHandler = this.AuxCareerHandler.bind(this);
    this.setCommentsUnis = this.setCommentsUnis.bind(this);
    document.title = "Career | Results";
  }

  render() {
    return (
      <>
        <div className="text-animation"><h1>Hola ¡{inputData.name}!</h1><h2>Las carreras recomendadas son:</h2></div>
        <div className="results">
          {this.state.careersUnis.map((career, index) => (
            <div>
              <h2>{this.state.afinity[index].pregrado.toUpperCase()}</h2>
              <div>
                <img src={sistemas} alt="" draggable="false" />
                <div
                  id="bar1"
                  style={{
                    top:
                      -240 +
                      ((90 - this.state.afinity[index].afinidad) * 240) / 100,
                  }}
                ><div>
                    <h3
                      style={{
                        fontSize:
                          60 * ((this.state.afinity[index].afinidad + 10) / 100),
                      }}
                    >
                      {this.state.afinity[index].afinidad}%
                    </h3>
                  </div>
                </div>
              </div>
              <div className="forms">
                <form>
                  <h3>¿En dónde te gustaría estudiar?</h3>
                  <select
                    name="Seleccione una universidad"
                    id={`aditionalCareer${index + 1}`}
                    onChange={() =>
                      this.SelectorHandler(
                        index + 1,
                        this.state.afinity[index].pregrado
                      )
                    }
                  >
                    <option name="default">
                      Selecciona una universidad...
                    </option>
                  </select>
                </form>
                <ul id={`career${index + 1}`} style={{ display: "none" }}>
                  <li key={Math.random().toString(36).substr(2, 9)}>
                    <b>Universidad:</b> {career.Universidad}
                  </li>
                  <li key={Math.random().toString(36).substr(2, 9)}>
                    <b>Ubicación:</b> {career.Ciudad}
                  </li>
                  <li key={Math.random().toString(36).substr(2, 9)}>
                    <b>Modalidad: </b>
                    {career.Modalidad}
                  </li>
                  <details>
                    <summary>Más información</summary>
                    <li key={Math.random().toString(36).substr(2, 9)}>
                      <b>Descripción:</b> {career.Descripcion}
                    </li>
                    <li key={Math.random().toString(36).substr(2, 9)}>
                      <b>Tipo de formación:</b> {career["Tipo de formación"]}
                    </li>
                    <li key={Math.random().toString(36).substr(2, 9)}>
                      <b>Duración:</b> {career["Duración"]}
                    </li>
                    <li key={Math.random().toString(36).substr(2, 9)}>
                      <b>Detalles:</b> {career["detalles"]}
                    </li>
                    <li key={Math.random().toString(36).substr(2, 9)}>
                      <b>Título otorgado:</b> {career["Título otorgado"]}
                    </li>
                  </details>
                  <hr />
                  <Popup trigger={<button onClick={() =>
                      this.setCommentsUnis(
                        career.Universidad,index + 1
                      )
                    }><p>Clic para ver comentarios</p><div id="estrella"></div></button>} modal>
                    <h3>Comentarios para {career.pregrado} en la {career.Universidad}.</h3>
                    <div id="estrella" style={{ width: 24 * 5 }}></div>
                    <div id={`popUp${index+1}`} ></div>
                  </Popup>
                </ul>
              </div>
            </div>
          ))
          }
          <div></div>
        </div >
        <div className="flex plus">
          <div className="another results">
            <form>
              <h3>¿Quieres saber de otra carrera?</h3>
              <select
                name="Seleccione una carrera"
                id="auxCareer"
                onChange={this.AuxCareerHandler}
              >
                <option name="default">Seleccione una carrera...</option>
              </select>
            </form>
            <div id="auxDiv">
              <h2>{this.state.ca.toUpperCase()}</h2>
              <div>
                <img src={sistemas} alt="" />
                <div
                  id="bar4"
                  style={{ top: -240 + ((80 - this.state.rca) * 240) / 100 }}
                ><div>
                    <h3 style={{ fontSize: 60 * ((this.state.rca + 30) / 100) }}>
                      {this.state.rca}%
                    </h3>
                  </div>
                </div>
              </div>
              <div className="forms">
                <form>
                  <h3>¿En dónde te gustaría estudiar?</h3>
                  <select
                    name="Seleccione una universidad"
                    id={`aditionalCareer${4}`}
                    onChange={() => this.SelectorHandler(3 + 1, this.state.ca)}
                  >
                    <option name="default">
                      Selecciona una universidad...
                    </option>
                  </select>
                </form>
                <ul id="career4" style={{ display: "none" }}>
                  <li key={Math.random().toString(36).substr(2, 9)}>
                    <b>Universidad:</b> {this.state.cau.Universidad}
                  </li>
                  <li key={Math.random().toString(36).substr(2, 9)}>
                    <b>Ubicación:</b> {this.state.cau.Ciudad}
                  </li>
                  <li key={Math.random().toString(36).substr(2, 9)}>
                    <b>Modalidad: </b>
                    {this.state.cau.Modalidad}
                  </li>
                  <details>
                    <summary>Más información</summary>
                    <li key={Math.random().toString(36).substr(2, 9)}>
                      <b>Descripción:</b> {this.state.cau.Descripcion}
                    </li>
                    <li key={Math.random().toString(36).substr(2, 9)}>
                      <b>Tipo de formación:</b> {this.state.cau["Tipo de formación"]}
                    </li>
                    <li key={Math.random().toString(36).substr(2, 9)}>
                      <b>Duración:</b> {this.state.cau["Duración"]}
                    </li>
                    <li key={Math.random().toString(36).substr(2, 9)}>
                      <b>Detalles:</b> {this.state.cau["detalles"]}
                    </li>
                    <li key={Math.random().toString(36).substr(2, 9)}>
                      <b>Título otorgado:</b> {this.state.cau["Título otorgado"]}
                    </li>
                  </details>
                  <hr />
                  <Popup trigger={<button><p>Clic para ver comentarios</p><div id="estrella"></div></button>} modal>
                    <h3>Comentarios para {this.state.cau.pregrado} en la {this.state.cau.Universidad}.</h3>
                    <div id="estrella"></div>
                    <p>{this.state.cau.Descripcion}</p>
                  </Popup>

                </ul>
              </div>
            </div>
          </div>
          <div>
            <h2>¿Cómo funciona?</h2>
            <p>
              <i>
                Mauris dictum lorem eu diam gravida, ac condimentum risus
                tempor. Quisque justo nunc, egestas ac sollicitudin eget,
                volutpat ut nunc. Donec mi justo, sollicitudin quis dictum quis,
                bibendum sit amet lacus. Proin id vestibulum nisl. Praesent
                auctor eget est eu maximus. Aliquam rutrum urna ac est vehicula,
                et bibendum lorem feugiat. Quisque a fermentum purus, sed dictum
                neque. Morbi eget nunc sagittis, tempus nunc non, fringilla
                ligula. Phasellus ullamcorper eleifend lacus, feugiat egestas
                erat venenatis eu. Nam sit amet urna velit. Etiam nec justo
                laoreet, feugiat risus nec, aliquam ex. Donec varius condimentum
                neque ut laoreet. Aliquam sit amet dui id ipsum vehicula mollis
                non vel enim. Sed maximus augue at eros interdum faucibus.
                Maecenas dictum quis elit et cursus.
              </i>
            </p>
            <p>
              Donec eget tincidunt velit. Nullam blandit orci ac lacus lobortis
              luctus a non metus. Etiam blandit vehicula finibus. Phasellus
              fringilla quis neque ac euismod. Sed tincidunt nec purus ac
              laoreet. Nullam sodales consectetur pharetra. Nunc luctus iaculis
              risus, in eleifend sem euismod sed. Maecenas hendrerit luctus
              posuere. Nam porttitor nulla et sapien ultricies, et blandit diam
              tincidunt. Nam dapibus, nisi in vehicula bibendum, nisi ligula
              mollis augue, ac porttitor ipsum sapien vel nibh. Mauris dictum
              magna non libero lacinia tempus. Ut lacinia massa a luctus porta.
              Cras dignissim faucibus sem, eu aliquam eros vestibulum a.
            </p>
          </div>
        </div>
      </>
    );
  }

  AuxCareerHandler() {
    document.getElementById("career4").style.display = "none";
    this.cleanAuxDropDownList();
    var e = document.getElementById("auxCareer");
    var c = e.options[e.selectedIndex].text;
    var rc = e.options[e.selectedIndex].value;
    /*Object.entries(this.state.careersAffinities).forEach(([key, value]) => {
      if (key === c) {
        return (a = value);
      }
      
    });*/
    //console.log(c + " " + rc);
    if (c === "Seleccione una carrera...") {
      document.getElementById(`auxDiv`).style.display = "none";
    } else {
      document.getElementById(`auxDiv`).style.display = "block";
      this.setState({ ca: c, rca: parseFloat((rc * 100).toFixed(2)) });
      this.setSelecterInfo(c, 4);
    }
  }

  cleanAuxDropDownList() {
    var select = document.getElementById("aditionalCareer4");
    var length = select.options.length;
    for (let i = length - 1; i >= 0; i--) {
      select.options[i] = null;
    }
    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode("Selecciona una universidad..."));
    opt.value = "Selecciona una universidad...";
    select.appendChild(opt);
  }

  SelectorHandler(index, pregrado) {
    //handlerEvent para los dropdownlist

    var e = document.getElementById(`aditionalCareer${index}`);
    var c = e.options[e.selectedIndex].text;
    var u = {};
    this.state.careersData.forEach(function (obj) {
      //console.log("pre If "+c);
      if (obj.pregrado === pregrado && obj.Universidad === c) {
        u = obj;
      }
    });
    const update = (id) => this.onUpdateItem(id - 1, u);
    if (!(Object.keys(u).length === 0 && u.constructor === Object))
      update(index);
    if (c === "Selecciona una universidad...") {
      document.getElementById(`career${index}`).style.display = "none";
    } else {
      document.getElementById(`career${index}`).style.display = "block";
    }
  }

  onUpdateItem = (i, u) => {
    //función para cambiar a la universidad en el dropdownlist
    if (i === 3) {
      this.setState({ cau: u });
    } else {
      const list = this.state.careersUnis.map((item, j) => {
        if (j === i) {
          var careersUnis = [...this.state.careersUnis];
          careersUnis[j] = u;
          this.setState({ careersUnis });
        }
      });
      return {
        list,
      };
    }
  };

  setCareersScores(scores) {

    var careers = [
      "ADMINISTRACION DE EMPRESAS",
      "ADMINISTRACION DE NEGOCIOS",
      "ADMINISTRACION DE NEGOCIOS INTERNACIONALES",
      "ADMINISTRACIÓN DE EMPRESAS",
      "ADMINISTRACIÓN EN SALUD OCUPACIONAL",
      "ARQUITECTURA",
      "BIOLOGIA",
      "CIENCIA POLITICA",
      "CIENCIAS MILITARES",
      "COMERCIO INTERNACIONAL",
      "COMUNICACION SOCIAL",
      "COMUNICACION SOCIAL Y PERIODISMO",
      "COMUNICACION SOCIAL- PERIODISMO",
      "CONTADURIA PUBLICA",
      "CONTADURÍA PÚBLICA",
      "DERECHO",
      "DISEÑO GRAFICO",
      "DISEÑO INDUSTRIAL",
      "ECONOMIA",
      "ENFERMERIA",
      "FISIOTERAPIA",
      "FONOAUDIOLOGIA",
      "INGENIERIA AGRONOMICA",
      "INGENIERIA AMBIENTAL",
      "INGENIERIA AMBIENTAL Y SANITARIA",
      "INGENIERIA BIOMEDICA",
      "INGENIERIA CIVIL",
      "INGENIERIA DE PETROLEOS",
      "INGENIERIA DE SISTEMAS",
      "INGENIERIA ELECTRICA",
      "INGENIERIA ELECTRONICA",
      "INGENIERIA INDUSTRIAL",
      "INGENIERIA MECANICA",
      "INGENIERIA MECATRONICA",
      "INGENIERIA QUIMICA",
      "INSTRUMENTACION QUIRURGICA",
      "LICENCIATURA EN CIENCIAS SOCIALES",
      "LICENCIATURA EN EDUCACION PREESCOLAR",
      "LICENCIATURA EN PEDAGOGIA INFANTIL",
      "LICENCIATURA EN PEDAGOGÍA INFANTIL",
      "MEDICINA",
      "MEDICINA VETERINARIA",
      "MEDICINA VETERINARIA Y ZOOTECNIA",
      "MERCADEO",
      "NEGOCIOS INTERNACIONALES",
      "NUTRICION Y DIETETICA",
      "ODONTOLOGIA",
      "PSICOLOGIA",
      "PSICOLOGÍA",
      "PUBLICIDAD",
      "RELACIONES INTERNACIONALES",
      "SALUD OCUPACIONAL",
      "SOCIOLOGIA",
      "TRABAJO SOCIAL",
    ];
    var careers_prob = {};
    let i = 0;
    careers.forEach((element) => {
      careers_prob[element.toLowerCase()] = Math.random(); // scores[i];
      i++;
    });
    //Selectores
    var sel = document.getElementById("auxCareer");
    for (const [key, value] of Object.entries(careers_prob)) {
      var opt = document.createElement("option");
      opt.appendChild(document.createTextNode(key));
      opt.text = key;
      opt.value = value;
      sel.appendChild(opt);
    }
    this.setState({ careersAffinities: careers_prob });
    return careers_prob;
  }

  errorHandleEvent() {
    this.props.history.push("/404");
  }

  setSelecterInfo(key, id) {
    //Función para ingresar universidad al dropdownlist
    var i = 1;
    var sel = document.getElementById("aditionalCareer" + id);
    this.state.careersData.forEach(function (obj) {
      if (obj.pregrado === key) {
        var opt = document.createElement("option");
        const str = obj.Universidad;
        opt.appendChild(document.createTextNode(str));
        opt.value = str;
        sel.appendChild(opt);
      }
      //console.log(i+" " + obj.Universidad);i++;
    });
  }

  getCommId(key) {
    unisIndex.forEach(function (obj) {
      if (obj.nombre === key) {
        return obj["id"];
      }
    });
  }

      setCommentsUnis(key,index) { //Función para añadir comentarios al popup
        console.log(key);
        var sel = document.getElementById("popUp" + index);
        console.log(sel);
        comUni.forEach(function (obj) {
          if (obj["id_local"] === this.getCommId(key)) {
            console.log("a");
            var opt = document.createElement("div");
            const com = obj.comentario;
            const stars = obj.calificacion;
            var pCom = document.createElement("p");
            var pStars = document.createElement("p");
            pCom.appendChild(document.createTextNode('"' + com + '"'));
            pStars.appendChild(document.createTextNode('"' + stars + '"'));
            opt.appendChild(pCom);
            opt.appendChild(pStars);
            sel.appendChild(opt);
            return;
          }
        }
        );
      }

      top3Careers(dictAux) {
        var dict = { ...dictAux };
        var bestsValue = [];
        var bestsKeys = [];
        var i = 0;
        var aux = 0;
        var auxKey = "";
        do {
          var auxValues = this.greaterKey(dict);
          auxKey = auxValues[0];
          aux = auxValues[1];
          delete dict[auxKey];
          bestsKeys.push(auxKey);
          bestsValue.push(parseFloat((aux * 100).toFixed(2)));
          i++;
        } while (i < 3);

        //console.log(bestsKeys);
        var cr = [...this.state.afinity];
        // console.log(bestsKeys)
        cr[0] = { pregrado: bestsKeys[0], afinidad: bestsValue[0] };
        cr[1] = { pregrado: bestsKeys[1], afinidad: bestsValue[1] };
        cr[2] = { pregrado: bestsKeys[2], afinidad: bestsValue[2] };
        this.setState({ afinity: cr });
      }

      greaterKey(dict) {
        var aux = 0;
        var auxKey = "";
        Object.entries(dict).forEach(([key, value]) => {
          if (value > aux) {
            aux = value;
            auxKey = key;
          }
        });
        return [auxKey, aux];
      }
      async predict_career(language, math, humanity, science, english) {
        //Función para llamar el modelo en la nube
        try {
          const body = {
            instances: [
              [
                science,
                humanity,
                humanity,
                science,
                english,
                language,
                math,
                science,
              ],
            ],
          };
          const res = await axios.post(
            `https://thingproxy.freeboard.io/fetch/${modelEndpoint}`,
            body,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Access-Control-Allow-Origin": "*",
              },
            }
          );
          // console.log(res.data.predictions[0]);
          return res.data.predictions[0];
        } catch (e) {
          //console.log(e);
          this.errorHandleEvent();
        }
      }
      async componentDidMount() {
        //Función pre-mounting
        if (inputData.isDone === false) {
          //this.props.history.push("/");
        }
        /*
            let scoresList = await this.predict_career(
            inputData.res1,
            inputData.res2,
            inputData.res3,
            inputData.res4,
            inputData.res5
            );
            */
        let dict = await this.setCareersScores([]); //(scoresList);
        await this.top3Careers(dict);
        for (var i = 0; i < 3; i++) this.setSelecterInfo(this.state.afinity[i].pregrado, i + 1);
      }


    }



export default withRouter(Results);
