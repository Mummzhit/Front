import React from "react";
import LoginGreetingSection from "../../Component/LoginPage/LoginGreetingSection";
import LoginButton from "../../Component/LoginPage/LoginButton";
import './AddEmotion.css';
import { useNavigate } from "react-router-dom";

export default function AddEmotionOnboardingPage () {
    const navigate = useNavigate();

    const handleEmotionRecord = () => {
        navigate ('/SelectEmotion');
        console.log ('record button is pressed')
       
    };


    
    return (
        <div className="add-emotion-onboarding-page">
            <div className="MumBackGradient">
                <div className="MumBackGradient-Butter"></div>
                <div className="MumBackGradient-Blue"></div>
            </div>
            <div className ="userFrame" > </div>
            <LoginGreetingSection 
                logintitletext={<> 멈멈이의 트리거 분석을 <br />도와주세요!</>} 
                logindescriptiontext={<>
                오늘 숏폼을 신청하며 느낀 감정을 기록해주시면, <br />시청 추이와 종합해<br />근본적인 숏폼 중독 원인을 추척해드려요.
             </>}/>
            <div className="onboarding-button-zone">
                <LoginButton type = 'login' text ='기록하기' onClick={handleEmotionRecord}/>
            </div>
            
        </div>
    )
}
    
