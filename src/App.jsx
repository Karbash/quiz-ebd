import React, { useEffect } from 'react';
import { useContext } from 'react';
import { QuizContext } from "./context/quiz";
import Welcome from './components/Welcome'
import Question from './components/Question';
import './App.css';
import QuizOver from './components/QuizOver';

function App() {
 const [quizState, dispatch] = useContext(QuizContext);

 useEffect(()=> {
  //embaralhas as perguntas
  dispatch({type:"REORDER_QUESTIONS"})
 },[])
  return (
    <div className='App'>
      <h1>Quiz EBD</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Question/>}
      {quizState.gameStage === "End" && <QuizOver/>}
    </div>
  )
}

export default App
