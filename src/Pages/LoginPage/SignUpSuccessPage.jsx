
import LoginGreetingSection from "../../Component/LoginPage/LoginGreetingSection";
import LoginButton from "../../Component/LoginPage/LoginButton";
import './LoginPage.css'
import { useNavigate } from "react-router-dom";

export default function SignUpSuccessPage () {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate ('/login');
        console.log ('login button is pressed')
    };

   


    
    return (
        <div className="login-page">
            <div className="MumBackGradient">
                <div className="MumBackGradient-Butter"></div>
                <div className="MumBackGradient-Blue"></div>
            </div>
            <div className ="userFrame" onChange ={handleLogin}> </div>
            <LoginGreetingSection logintitletext="계정 등록이 완료되었어요" logindescriptiontext={<>
                지금부터 멈멈이와 함께 <br />건강하고 즐거운 디지털 루틴을 만들어 보아요!<br />그럼 시작할까요?
             </>}/>
            <div className="onboarding-button-zone">
                <LoginButton type = 'login' text ='로그인하기' onClick={handleLogin}/>
            </div>
            
        </div>
    )
}
    
