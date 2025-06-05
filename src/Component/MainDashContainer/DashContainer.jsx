import React from "react";
import ChallengeStatusCard from "../ChallengeStatusCard/ChallengeStatusCard";
import NumbMomentsCard from "../NumbMomentsCard/NumbMomentsCard";
import './DashContainer.css'
import HappyMomentsSection from "../HappyMomentsCard/HappyMomentsSection";

export default function DashContainer (){
    const username = '멋쟁이사자처럼';
    const day = '9';
    const safetime ='146';
    const days='목요일';
    const session ='오후';
    const isIndividual='혼자';
    const emotion1 ='무료하고';
    const emotion2 ='심심하다';
    const sns1 ='유튜브';
    const sns2 ='인스타그램';
    const averagewatchingtime = '46'

    const data = [
        { type: 'book', image: '/Mummum_new.png', writer: '가즈오 이시구로', booktitle: '<클라라와 태양>' },
        { type: 'walk', image: '/Mummum_new.png', place: '양재천' },
    ]
      
      
      
     

    return (
        <div className="Main-Dash-Container">
            <div className='challenge-status-card'>
                <ChallengeStatusCard username={username} day = {day} safetime={safetime}/>
            </div>
            <div>
                <HappyMomentsSection data={data} />
            </div>
            
            <div className ='numb-moments-card'>
                <NumbMomentsCard  username={username} days={days} session={session} isIndividual={isIndividual} emotion1={emotion1} emotion2={emotion2} sns1={sns1} sns2={sns2} averagewatchingtime={averagewatchingtime}/>   
            </div>
            
        </div>

        
    )
}