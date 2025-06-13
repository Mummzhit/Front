import React from "react";
import './Text.css'
export default function LoginTextField({title,subtitle}) {
    return(
        <div className="login-text-field">

                <h1>{title}</h1>
                <p>{subtitle}</p>
            
        </div>
    )
}