import React from "react";
import './AddEmotion.css';
import { useNavigate } from "react-router-dom";
import ArchiveTopNav from "../../Component/ArchiveTopNav/ArchiveTopNav";
import EmotionBox from "../../Component/AddEmotion/EmotionBox";
import LoginButton from "../../Component/LoginPage/LoginButton";

export default function SelectEmotion() {
    const navigate = useNavigate();

    const handleEmotionRecord = () => {
        navigate ('/trigger-output');
        console.log ('record button is pressed')
    };

    return (
        <div className="select-emotion-page">
            <ArchiveTopNav/>
            <div className="text-zone">
                
                <p>멈멈이와 함께 중독 트리거를 찾아볼까요?</p>
                <h1>오늘 느낀 감정을 모두 선택해주세요</h1>
    
            </div>
            <div className="emotion-boxes">
                
                <EmotionBox
                    icon='😆'
                    text= '기뻐요'
                />
            
                <EmotionBox
                    icon='🥱'
                    text= '피곤해요'
                />
                <EmotionBox
                    icon='🤓'
                    text= '궁금해요'
                />
                <EmotionBox
                    icon='😱'
                    text= '불안해요'
                />
            
                <EmotionBox
                    icon='🙂'
                    text= '평온해요'
                />
                <EmotionBox
                    icon='😡'
                    text= '화나요'
                />
                <EmotionBox
                    icon='😶'
                    text= '지루해요'
                />
                <EmotionBox
                    icon='😭'
                    text= '슬퍼요'
                />
            
              
            </div>
            <div className="record-button-zone">
                <LoginButton type = 'login' text ='기록하기' onClick={handleEmotionRecord}/>
            </div>
        </div>
    )
}