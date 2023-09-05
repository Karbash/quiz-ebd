import "./Welcome.css";
import Quiz from "../img/quiz.svg";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);
  
    return (
    <div id='welcome'>
      <h3>A OPORTUNIDADE PERDIDA</h3>
      <h4>A <q className="marker">Igreja Infiel</q> descreve <q className="marker">Jesus</q>, que o mundo rejeitou. Quando Ele já estiver arrebatado a sua <q className="marker">Igreja Fiel</q> .</h4>
      <a href="https://www.bibliaonline.com.br/acf/ct/3" target="_blank"> Livro de Cantares – capítulo 3.</a>
      <p>Clique no Botão abaixo para começar:</p>
      <button onClick={()=> dispatch({type:"CHANGE_STATE"})}>Inciar</button>
      <img src={Quiz} alt="Inicio Quiz" />
    </div>
  )
}

export default Welcome
