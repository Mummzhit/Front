import React from "react";
import ChallengeStatusCard from "../ChallengeStatusCard/ChallengeStatusCard";
import NumbMomentsCard from "../NumbMomentsCard/NumbMomentsCard";
import './DashContainer.css'

import EmotionChart from "../EmotionChart/EmotionChart";
import HappyMomentsSection from "../HappyMomentsCard/HappyMomentsSection";
import DidList from "../DidList/DidList";
import ToDoList from "../ToDoList/ToDoList";
import { useState, useEffect } from "react";
import { getProfile } from "../../Utils/api"; 

export default function DashContainer (){
    
    const day = '9';
    const safetime ='146';
    const days='목요일';
    const session ='오후';

    const emotion1 ='무료하다';
   
    const sns1 ='유튜브';
    const sns2 ='인스타그램';
    const averagewatchingtime = '46'

    const [username, setUsername] = useState('');
        useEffect(() => {
            getProfile()
            .then(data => {
                console.log('받아온 profile:', data);
                setUsername(data.nickname || '민서'); // 받아온 username 없으면 기본값
                
            })
            .catch(err => {
                console.error('프로필 불러오기 실패:', err);
                setUsername('민서');
               
            });
        }, []);
    
    

    

    const data = [
        { type: 'book', image: '/mummzhit_book.jpeg', writer: '가즈오 이시구로', booktitle: '<클라라와 태양>' },
        { type: 'walk', image: '/mummzhit_walk.jpeg', place: '양재천' },
    ]
      
      
      
     

    return (
        <div className="Main-Dash-Container">
            <div className='challenge-status-card'>
                <ChallengeStatusCard username={username} day = {day} safetime={safetime}/>
            </div>
            <div>
                <HappyMomentsSection data={data} />
            </div>

            <div className="emotion-chart">
                <EmotionChart />
            </div>
            
            <div className ='numb-moments-card'>
                <NumbMomentsCard  username={username} days={days} session={session}  emotion1={emotion1} sns1={sns1} sns2={sns2} averagewatchingtime={averagewatchingtime}/>   
            </div>

            <div className="did-list">
                <DidList/>
            </div>

            <div className="to-do-list">
                <ToDoList/>
            </div>
        


            
        </div>

        
    )
}