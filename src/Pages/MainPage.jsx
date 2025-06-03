import React from 'react';
import BottomNav from '../Component/BottomNav/BottomNav';
import './MainPage.css';


import HeroInfoContainer from '../Component/HeroSection/HeroInfoContainer';
import GreetingText from '../Component/HeroSection/GreetingText';
import MainCalendar from '../Component/MainCalendar/MainCalendar';

export default function MainPage() {
    const username = "멋쟁이 사자처럼";
    const level = 1;
    const baseDate = "2025-06-01"; // 기준 날짜 (예시)

    return (
        <div className="main-page">
            <div className='HeroSection'>
                <div className='HeroSection-left'>
                    <GreetingText username={username} />
                    <HeroInfoContainer level={level} />
                </div>
                <div className='HeroSection-right'>
                    <img className='HeroSection-image' src="/Mummum.png" alt="Mummum" />
                </div>   
            </div>
            <MainCalendar baseDate={baseDate}/>
            <BottomNav onTabChange={(tabId) => console.log(`Active tab changed to: ${tabId}`)} /> 
        </div>
    );
}