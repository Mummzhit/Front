import React from "react";
import './Text.css'

export default function LoginGreetingSection({logintitletext,logindescriptiontext}) {
    return(
        <div className="login-greeting-section">
            <img src="/Mummum_new.png" alt="이미지 출력 오류"/>
            <div>
                <h1>{logintitletext}</h1>
                <p>{logindescriptiontext}</p>
            </div>
            
        </div>
    )
}