import React from "react";
import './LoginButton.css'

export default function LoginButton({type, text, onClick, disabled}) {

    return (
       <div>
            <button className={`login-button ${type}`} 
                    type={type} 
                    onClick = {onClick} 
                    disabled ={disabled}>
            {text}
            </button>
       </div>
    )
}