import React from "react";
import LoginGreetingSection from "../../Component/LoginPage/LoginGreetingSection";
import LoginButton from "../../Component/LoginPage/LoginButton";
import './LoginPage.css'
import { useNavigate } from "react-router-dom";

export default function LoginOnboardingPage () {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate ('/login');
        console.log ('login button is pressed')
    };

    const handleSignUp = () => {
        navigate('/sign-up');
        console.log ('sign up button is pressed')
    };


    
    return (
        <div className="login-page">
            <div className="MumBackGradient">
                <div className="MumBackGradient-Butter"></div>
                <div className="MumBackGradient-Blue"></div>
            </div>
            <div className ="userFrame" onChange ={handleLogin}> </div>
            <LoginGreetingSection logintitletext="멈칫에 온 것을 환영해요." logindescriptiontext={<>
                저는 앞으로의 멈칫을 도울 <br />AI 어시스턴트, 멈멈이라고 해요.<br />원활한 서비스 이용을 위해 로그인해주세요.
             </>}/>
            <div className="onboarding-button-zone">
                <LoginButton type = 'login' text ='로그인하기' onClick={handleLogin}/>
                <LoginButton type = 'sign-up' text ='계정 등록하기' onClick={handleSignUp}/>
            </div>
            
        </div>
    )
}
    
