import React from 'react';

import './MainPage.css';


import HeroInfoContainer from '../Component/HeroSection/HeroInfoContainer';
import GreetingText from '../Component/HeroSection/GreetingText';
import MainCalendar from '../Component/MainCalendar/MainCalendar';
import HeaderNav from '../Component/HeaderNav/HeaderNav';
import DashContainer from '../Component/MainDashContainer/DashContainer';
import BottomNav from '../Component/BottomNav/BottomNav';


export default function MainPage() {
    const username = "멋쟁이사자처럼";
    const level = 1;
    const baseDate = new Date(); // 기준 날짜 (예시)

    return (
        <div className="main-page">
            <div className="headernav"> <HeaderNav onTabChange={(tabId) => console.log(`Active tab changed to: ${tabId}`)} /></div>
            <div className='HeroSection'>
                <div className='HeroSection-left'>
                    <GreetingText username={username} />
                    <HeroInfoContainer level={level} />
                </div>
                <div className='HeroSection-right'>
                    <img className='HeroSection-image' src="/Mummum_new.png" alt="Mummum" />
                </div>   
            </div>
            <MainCalendar baseDate={baseDate}/>
            <DashContainer/>
            <div className='BottomNav'> <BottomNav  onTabChange={(tabId) => console.log(`Active tab changed to: ${tabId}`)} /> </div>
        </div>
    );
}