import React from 'react'
import "./Option.css"

import { useContext } from 'react'
import { QuizContext} from '../context/quiz'


const Option = ({option}) => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className='option'>
      <p>{option}</p>
    </div>
  )
}

export default Option
