import { createContext, useReducer } from "react";

import questions from "../data/questions";

const STAGES = ["Start", "Playing", "End"];

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,

}

const quizReducer = (state, action) => {
       switch(action.type){
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1],
            };
            
        case "NEW_QUIZ":
            return initialState;

        case "REORDER_QUESTIONS":
            return {
                ...state,
                questions: questions.sort (() => { return Math.random() -0.5; }),
            };
        case "CHANGE_QUESTION":
            // eslint-disable-next-line no-unused-vars, no-case-declarations
            let endQuiz = false;
            if(!questions[(state.currentQuestion+1)]){
                endQuiz = true;
            }
            return {
                ...state,
                currentQuestion: state.currentQuestion+1,
                gameStage: endQuiz? STAGES[2] : state.gameStage
                };
        default:
            return state
    }
};

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer,initialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}; 