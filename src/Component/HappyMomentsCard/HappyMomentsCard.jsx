import React from 'react'
import './HappyMomentsCard.css'

export default function HappyMomentsCard ({type, image, writer, booktitle, place}){
    return (
        
        <div className = 'happy-moments-card'>
           
            <div>
                {type === 'book' && 
                    <div className='book-moment'>
                        <div className='moments-image'><img src = {image} alt='멈칫한 순간 이미지'/></div>
                        <span>{writer}의</span>
                        <span>{booktitle},</span>
                        <p>다음 장도 궁금하지 않으세요?</p>
                    </div>}       
                {type === 'walk' && 
                    <div className='walk-moment'>
                        <div className='moments-image'><img src = {image} alt='멈칫한 순간 이미지'/></div>
                        <span>{place}</span>
                        <span>산책 기억 나시나요?</span>
                        <p>오늘도 걸으러 가볼까요?</p>
                    </div>}       
                
            </div>
        </div>
        
    )
}