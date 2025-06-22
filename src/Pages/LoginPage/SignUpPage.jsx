import LoginButton from "../../Component/LoginPage/LoginButton";
import './LoginPage.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginTextField from "../../Component/LoginPage/LoginTextField";
import InputField from "../../Component/LoginPage/InputField";
import { isValidEmail, isValidNickname, isValidPassword } from "../../Utils/validators";
import { signUp } from "../../Utils/api";

export default function SignUpPage () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // 에러 메시지 출력할때, 이메일이랑 닉네임을 따로 중복 테스트 하는 법을 모르겠음..

    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        // console.log("입력된 이메일:", e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        // console.log("입력된 비밀번호:", e.target.value);
    };

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
        // console.log("입력된 닉네임:", e.target.value);
    };


    const handleLogin = () => {
        navigate ('/login');
        console.log ('login button is pressed')
    };

    const handleSignUpSuccess = async () => {
        
        setErrorMessage(""); 
        
        if (!isValidEmail(email)) {
             alert('올바른 이메일 형식이 아닙니다.');
            return;
        }
        if (!isValidNickname(nickname)) {
             alert('닉네임은 최소 2자 이상이어야 합니다.');
            return;
        }
        if (!isValidPassword(password)) {
             alert('비밀번호는 최소 8자 이상이어야 합니다.');
             return;
        }

        try {
            const data = await signUp(email, password, nickname);
            console.log('회원가입 성공:', data);
            navigate('/sign-up-success');
        } catch (error) {
            alert(error.message); // 예: "이미 존재하는 이메일이나 닉네임입니다."
        }
        // navigate('/sign-up-success');
        // console.log ('sign up success')
    };


    
    return (

        <div className="login-page">
            
            <div className="title-field">
                <LoginTextField title='만나서 반가워요' subtitle='원활한 서비스 이용을 위해 계정을 등록해주세요' /> 
            </div>
            <div className="input-zone">
                <InputField type='id' placeholder='Email' onChange={handleEmailChange}/>
                <InputField type='nickname' placeholder='Nickname'onChange={handleNicknameChange}/>
                <InputField type='password' placeholder='Password' onChange={handlePasswordChange}/>
            </div>
            
            <div className="button-zone">
                    <LoginButton type = 'login' text ='계정 등록하기' onClick={handleSignUpSuccess}/>
                    <LoginButton type = 'sign-up' text ='로그인하기' onClick={handleLogin}/>
                </div>
                
        </div>
            
    )
}
    
