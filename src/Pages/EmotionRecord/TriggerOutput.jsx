import React from "react";
import './AddEmotion.css';
import { useNavigate } from "react-router-dom";
import ArchiveTopNav from "../../Component/ArchiveTopNav/ArchiveTopNav";
import ActivityBox from "../../Component/AddEmotion/ActivityBox";

import LoginButton from "../../Component/LoginPage/LoginButton";

export default function SelectEmotion() {
    const username = localStorage.getItem('username') || '멋쟁이사자처럼'; // 기본값 설정
    const navigate = useNavigate();
    

    const handleStore = () => {
        
        console.log ('store button is pressed')
    };

    return ( 
        <div className="Trigger-output-page">
            <ArchiveTopNav/>
            <div className="text-zone">
                
                <p>어제보다 나은 {username}님을 응원해요</p>
                <h1>이번 주의 트리거 분석이 도착했어요!</h1>
            </div>
            <div className="weekly-trigger-output"> 
                <div className="section-title">
                    이번주 분석을 요약했어요
                </div>
                <div className="trigger-output-content">
                    <div className="result-summary">
                        <p>지난주 대비 시청시간</p>
                        <h1>🔺</h1>
                        <h2>96분</h2>
                        <h3>+ 8.2%</h3>
                    </div>
                    <div className="result-summary">
                        <p>지난주 대비 감정변화</p>
                        <h1>😶</h1>
                        <h2 className="emotion-result-text">지루해요</h2>
                        <h4>+1일</h4>
                    </div>
        

                </div>
                <div className="activity-zone"> 
                    <div className="section-title-activity">
                    다음주 루틴 추천해드려요
                    </div>
                    <div className="activity-boxes">
                        <ActivityBox
                            icon='🎧'
                            text= '<아이들의 집> 마저 읽기'/>
                        <ActivityBox
                            icon='🚶'
                            text= '안산호수공원 산책하기'/>
                       </div>
                </div>          
                <div className="record-button-zone">
                    <LoginButton type = 'login' text ='저장하기' onClick={handleStore}/>
                </div>
            
            </div>
        </div>
    )
}