import React, { useReducer } from 'react'
import Mathjs from 'mathjs'
import './App.css'
import Calculator from './components/DisplayComponents/CalculatorDisplay'

const initialState = {display: '0'}


export default function App(props) {
  const [state, dispatch] = useReducer(displayReducer, initialState)
  
  return (
    <div className="app">
      <Calculator 
        display={state.display}
        reset={() => dispatch(acReset())} 
        append={str => dispatch(acAppend(str))} 
        calculate={() => dispatch(acCalculate())}   
      />
    </div>
    )
}
  

// ---- Action creators ----
// Note: "ac" = action creator 

function acReset() {
  return { type: 'RESET' } 
} 

function acAppend(str) {
  return { type: 'APPEND_CALCULATION', payload: str } 
}

function acCalculate() {
  return { type: 'PERFORM_CALCULATION' }  
}


// ---- Reducer (callback for useReducer) ----


function displayReducer(state, action) {
  console.log(action)
  switch(action.type.toUpperCase()) {
    case 'APPEND_CALCULATION': 
      return { display: state.display + action.payload } 
    case 'PERFORM_CALCULATION':
      return { display: `${Mathjs.eval(state.display)}` }
    case 'RESET':
      return initialState
    default: 
      return state
  }
}
