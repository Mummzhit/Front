import React from "react";
import './AddEmotion.css';
import { useNavigate } from "react-router-dom";
import ArchiveTopNav from "../../Component/ArchiveTopNav/ArchiveTopNav";
import EmotionBox from "../../Component/AddEmotion/EmotionBox";
import LoginButton from "../../Component/LoginPage/LoginButton";

export default function SelectEmotion() {
    const navigate = useNavigate();

    const handleEmotionRecord = () => {
        navigate ('/TriggerOutput');
        console.log ('record button is pressed')
    };

    return (
        <div className="select-emotion-page">
            <ArchiveTopNav/>
            <div className="text-zone">
                
                <p>멈멈이와 함께 중독 트리거를 찾아볼까요?</p>
                <h1>오늘 느낀 감정을 모두 선택해주세요</h1>
    
            </div>
            <EmotionBox
                icon='😆'
                text= '기뻐요'
            />
            <EmotionBox
                icon='😆'
                text= '기뻐요'
            />
            <EmotionBox
                icon='😢'
                text= '슬퍼요'
            />
            <EmotionBox
                icon='😡'
                text= '화나요'
            />
            <div className="onboarding-button-zone">
                <LoginButton type = 'login' text ='기록하기' onClick={handleEmotionRecord}/>
            </div>
        </div>
    )
}