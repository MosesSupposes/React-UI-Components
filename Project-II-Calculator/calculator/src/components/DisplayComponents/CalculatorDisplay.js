import React from 'react'
import './Display.css'
import ActionBtn from '../ButtonComponents/ActionButton'
import NumberBtn from'../ButtonComponents/NumberButton'

export default function CalculatorDisplay({reset, append, calculate, display}) {
    return (
        <article className="calculator-display">
            <div className="row" id="display">{display}</div>

            <div className="row">
                <ActionBtn 
                    content="clear"
                    large 
                    updateDisplay={reset}  
                />
                <ActionBtn content="/" updateDisplay={append.bind(null, '/')} />
            </div>

            <div className="row">
                <NumberBtn content="7" updateDisplay={append.bind(null, '7')} />
                <NumberBtn content="8" updateDisplay={append.bind(null, '8')} />
                <NumberBtn content="9" updateDisplay={append.bind(null, '9')} />
                <ActionBtn content="x" updateDisplay={append.bind(null, '*')} />
            </div>
            <div className="row">
                <NumberBtn content="4" updateDisplay={append.bind(null, '4')} />
                <NumberBtn content="5" updateDisplay={append.bind(null, '5')} />
                <NumberBtn content="6" updateDisplay={append.bind(null, '6')} />
                <ActionBtn content="-" updateDisplay={append.bind(null, '-')} />
            </div>
            <div className="row">
                <NumberBtn content="1" updateDisplay={append.bind(null, '1')} />
                <NumberBtn content="2" updateDisplay={append.bind(null, '2')} />
                <NumberBtn content="3" updateDisplay={append.bind(null, '3')} />
                <ActionBtn content="+" updateDisplay={append.bind(null, '+')} />
            </div>
            <div className="row">
                <NumberBtn 
                    content="0" 
                    large
                    updateDisplay={append.bind(null, '0')}     
                />
                <ActionBtn content="=" updateDisplay={calculate} />
            </div>
        </article>

    )
}