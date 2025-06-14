import LoginButton from "../../Component/LoginPage/LoginButton";
import './LoginPage.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginTextField from "../../Component/LoginPage/LoginTextField";
import InputField from "../../Component/LoginPage/InputField";


export default function SignUpPage () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
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
        navigate ('/login');
        console.log ('login button is pressed')
    };

    const handleSignUpSuccess = () => {
        navigate('/sign-up-success');
        console.log ('sign up success')
    };


    
    return (

        <div className="login-page">
            
            <div className="title-field">
                <LoginTextField title='만나서 반가워요' subtitle='원활한 서비스 이용을 위해 계정을 등록해주세요' /> 
            </div>
            <div className="input-zone">
                <InputField type='id' placeholder='Email' onChange={handleEmailChange}/>
                <InputField type='nickname' placeholder='Nickname'/>
                <InputField type='password' placeholder='Password' onChange={handlePasswordChange}/>
            </div>
            
            <div className="button-zone">
                    <LoginButton type = 'login' text ='계정 등록하기' onClick={handleSignUpSuccess}/>
                    <LoginButton type = 'sign-up' text ='로그인하기' onClick={handleLogin}/>
                </div>
                
        </div>
            
    )
}
    
