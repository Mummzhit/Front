import React from 'react'
import ViewMoreIcon from '../Icons/ViewMoreIcon'
import './NumbMomentsCard.css'

export default function NumbMomentsCard ({username, days, session, isIndividual, emotion1, emotion2, sns1, sns2, averagewatchingtime}){
    return (
        
        <div className = 'numb-moments'>
            <div className='title'>
            <h1>무심코 스크롤한 순간을 돌아봤어요</h1>
            <span><ViewMoreIcon/></span>
            </div>
            
            <div className='contents'>
                <div><span className = 'username'>{username}</span>님은<span>{days}</span><span>{session}</span> 에</div>
                <div><span>{emotion1}</span> 는 감정을 느껴</div>
                <div><span>{sns1}</span> 나 <span>{sns2}</span> 을 켜는 경우가 많았어요.</div>
                <div>이때의 평균 시청 시간은 <span>{averagewatchingtime}</span>분 이었어요. </div>
            </div>
        </div>
        
    )
}