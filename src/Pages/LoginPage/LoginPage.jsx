
import LoginButton from "../../Component/LoginPage/LoginButton";
import './LoginPage.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginTextField from "../../Component/LoginPage/LoginTextField";
import InputField from "../../Component/LoginPage/InputField";


export default function LoginPage () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log("입력된 이메일:", e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log("입력된 비밀번호:", e.target.value);
  };

    const handleLogin = () => {
        navigate ('/main');
        console.log ('login button is pressed')
    };

    const handleSignUp = () => {
        navigate('/sign-up');
        console.log ('sign up button is pressed')
    };


    
    return (

        <div className="login-page">
            
            <div className="title-field">
                <LoginTextField title='돌아오신 것을 환영해요' subtitle='원활한 서비스 이용을 위해 로그인해주세요.' /> 
            </div>
            <div className="input-zone">
                <InputField type='ID' placeholder='Email' onChange={handleEmailChange}/>
                <InputField type='Password' placeholder='Password' onChange={handlePasswordChange}/>
            </div>
            
            <div className="button-zone">
                    <LoginButton type = 'login' text ='로그인하기' onClick={handleLogin}/>
                    <LoginButton type = 'sign-up' text ='계정 등록하기' onClick={handleSignUp}/>
                </div>
                
        </div>
            
    )
}
    
