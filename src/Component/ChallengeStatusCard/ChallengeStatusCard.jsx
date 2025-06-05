import React from 'react';
import './ChallengeStatusCard.css';


export default function ChallengeStatusCard({username,day,safetime}) {
    return (
        <div className='mummmum-DDAYITEM'>
            <img className='mummum-DDAYITEM-img' src='/Mumimg.png' alt='Mummum-circle-img'/>
            <div className='mummum-DDAYITEM-text'>
                <div className='mummum-DDAYITEM-text-firstline'>{username} 님은 도전 {day}일차!</div>
                <div className='mummum-DDAYITEM-text-secondline'> 멈멈이와 {day} 일동안 {safetime} 분을 아낄 수 있었어요</div>
            </div>
            
        </div>
        
    )
}