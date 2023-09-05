import './Question.css';
import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Option from './Option';

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];
  console.log(currentQuestion)
  return (
    <div id='question'>
      <p>Pergunta {quizState.currentQuestion +1} de {quizState.questions.length}</p>
      <h2>{currentQuestion.question} {currentQuestion.text && <a  target='_blank' className='textlink' href={currentQuestion.text} rel="noreferrer"><i className="fa fa-book"></i></a>} </h2>
      <div id="options-container">
        {currentQuestion.options.map((option) =>(
          <Option key={option} option={option} />
        ))}
      </div>
      <button onClick={() => dispatch({type:"CHANGE_QUESTION"})}>Continuar</button>
    </div>
  )
}

export default Question
