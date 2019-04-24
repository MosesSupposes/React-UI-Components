import React, { useState } from 'react'
import './App.css'
import Calculator from './components/DisplayComponents/CalculatorDisplay'

export default function App(props) {
  const [display, setDisplay] = useState('')
  const reset = () => setDisplay('') // Helper
  const update = (str) => setDisplay( (prevDisplay) => prevDisplay + str )
    
  return (
    <div className="app">
      <Calculator reset={reset} update={update}/>
    </div>
    )
}
  


