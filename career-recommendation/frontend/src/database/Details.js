import graph from "../img/graph.png";
import profilepic from "../img/members/profilepic.png"
import DavidCalle from "../img/members/DavidCalle.PNG"
import JuanDavidE from "../img/members/JuanDavidE.jfif"
import Miguel from "../img/members/Miguel.jpg"
import SantiagoCartagena from "../img/members/SantiagoCartagenaAgudelo.jpeg"
export const funcDetails1 = () =>{ return(<p>"Las recomendaciones de carrera basadas en los resultados obtenidos por el estudiante en la prueba saber 11, serán brindadas por un modelo de predicción perteneciente a la categoría de Machine Learning, al cual se le debe pasar como entrada los puntajes obtenidos en la prueba, posterior a esto, la página abrirá una nueva pestaña con tres recomendaciones, las carreras más afines a tus puntajes y el porcentaje de compatibilidad, debajo de cada una de ellas también, podrás obtener una breve descripción con información de utilidad."</p>);}
export const funcDetails2 =() =>{ return(<p> `Adicionalmente, como también se usaron técnicas de web scrapping, en las recomendaciones que recibe el usuario también hay detalles como universidades que ofrecen la carrera, modalidad, créditos, etc.
Un ejemplo del uso de la herramienta es el siguiente: "Soy estudiante de último año de bachillerato y quiero una recomendación sobre qué carrera elegir. Mis resultados en la prueba Saber 11 fueron: 51 en ciencias naturales, 72 en competencias ciudadanas, 84 en inglés, 75 en español, 80 en matemáticas".

Pero ¿qué pasa si no estás interesado en alguna de estas tres carreras?, en esta situación, entonces puedes buscar la que te gusta, obtendrás un porcentaje de afinidad y la información.`</p>);}
export const modelDetails = () =>{ return(<p>`La herramienta de recomendación de carreras basada en los resultados obtenidos por el estudiante en la prueba saber 11, está montada sobre un modelo de predicción perteneciente a la categoría de redes neuronales de Machine Learning llamado Selector Hat (SH). Para estimar los hiper parámetros del modelo, se utilizó el equilibrio de clases, el sobremuestreo, se estimó la profundidad máxima utilizando la búsqueda en cuadrícula o grid search con el cual se obtuvieron valores óptimos para los parámetros del modelo y, se calculó la validación cruzada para asegurarse de no cometer ningún sobre ajuste.
 
Los datos para entrenar el modelo fueron extraídos de la base de datos del ICFES llamada DataIcfes para realizar estudios e investigaciones, siendo extraídas de allí pruebas de Saber 11 de 2011-2014, tomando los resultados anonimizados individuales de sus pruebas estandarizadas.

Para evaluar el modelo se utilizó validación cruzada con 5 particiones de los datos. Se utilizaron como métricas para la evaluación de las combinaciones, modelo-partición de datos en entrenamiento y testeo a la precisión, además de un Área bajo la curva ROC (en inglés AUC), la cual obtuvo un resultado final de 89%.

A continuación, se muestran algunas imágenes de la curva ROC por carreras.
`</p>);}

export const modelPhotos = () => {
    return(
        <img src={graph} alt=""/>
    );
}

export const membersDetails = () => {
    return(
        <div>
        <div className="members">
                      <h3>David Calle</h3>  
        <img className="campos" alt="" src={DavidCalle} />
        <h4>Investigador</h4>
        </div>
        <div className="members">
                      <h3>Santiago Cartagena</h3>  
        <img className="campos" alt="" src={SantiagoCartagena}/>
        <h4>Investigador</h4>
        </div>
        <div className="members">
                      <h3>Miguel Manrique</h3>  
        <img className="campos" alt=""src={Miguel}/>
        <h4>Investigador</h4>
        </div>
        <div className="members" >
                      <h3>Andrés Salazar</h3>  
        <img className="campos" alt=""src={profilepic}/>
        <h4>Diseñador Lógico</h4>
        </div>
        <div className="members">
                      <h3>Juan David Echeverry</h3>  
        <img className="campos" alt=""src={JuanDavidE}/>
        <h4>Diseñador Lógico</h4>
        </div>
    </div>
    );
}
