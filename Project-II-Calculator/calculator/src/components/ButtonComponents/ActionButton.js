import React, { useLayoutEffect } from 'react';
import './Button.css';


export default function ActionButton(props) {
    return (
        (props.large)
            ? <div className="btn action large" onClick={props.updateDisplay}>
                    {props.content}
              </div> 
            : <div className="btn action" onClick={props.updateDisplay}>
                    {props.content}
              </div>
    )
}