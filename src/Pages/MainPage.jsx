import React from 'react';

import './MainPage.css';

import { useState, useEffect } from 'react';
import HeroInfoContainer from '../Component/HeroSection/HeroInfoContainer';
import GreetingText from '../Component/HeroSection/GreetingText';
import MainCalendar from '../Component/MainCalendar/MainCalendar';
import HeaderNav from '../Component/HeaderNav/HeaderNav';
import DashContainer from '../Component/MainDashContainer/DashContainer';
import BottomNav from '../Component/BottomNav/BottomNav';
import { getProfile } from '../Utils/api'; 


export default function MainPage() {
    
    const [loading, setLoading] = useState(true);
    const level = 1;
    const baseDate = new Date(); // 기준 날짜 (예시)



    const [username, setUsername] = useState('');
    useEffect(() => {
        getProfile()
        .then(data => {
            console.log('받아온 profile:', data);
            setUsername(data.nickname || '민서'); // 받아온 username 없으면 기본값
            setLoading(false);
        })
        .catch(err => {
            console.error('프로필 불러오기 실패:', err);
            setUsername('민서');
            setLoading(false);
        });
    }, []);


    if (loading) return <div>로딩 중...</div>;

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