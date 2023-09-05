import React from 'react';
import "./QuizOver.css"
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import WellDone from "../img/welldone.svg";


const QuizOver = () => {
const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id='quizover'>
      <h2>Fim do Quiz</h2>
      <p>Pontuação: {quizState.score} </p>
      <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
      <img src= {WellDone} alt="Fim do Quiz" />
      <button onClick={() => dispatch({type:"NEW_QUIZ"})}>Reiniciar</button>
    </div>
  )
}

export default QuizOver
