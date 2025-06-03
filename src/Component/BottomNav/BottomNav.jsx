
import React from 'react';
import {useState} from 'react';
import './BottomNav.css';
import HomeIcon from '../Icons/HomeIcon';
import CalendarIcon from '../Icons/CalendarIcon';
import ChatIcon from '../Icons/ChatIcon';
import AnalyzeIcon from '../Icons/AnalyzeIcon';
import SettingsIcon from '../Icons/SettingsIcon';

/* 캘린더, 채팅, 메인, 분석, 설정*/
const tabs = [
    { id: 'calendar', label: 'Calendar',icon: CalendarIcon },
    { id: 'chat', label: 'Chat',icon: ChatIcon},
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'analyze', label: 'Analyze',icon: AnalyzeIcon},
    { id: 'settings', label: 'Settings',icon: SettingsIcon},
    
];



export default function BottomNav({ onTabChange }) { 
      
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    
    const handleClick = (id) => {
        setActiveTab(id);
        if (onTabChange) {
            onTabChange(id);
        };
    }

    return (
        <div className="nav-box">
            {tabs.map(({id,label,icon: Icon}) => (
                <button
                    key={id}
                    onClick={() => handleClick(id)}
                    className={`tab-button ${id === 'home' ? 'home-btn' : ''}`} /** 홈버튼만 다른 클래스로 분리 -> 위로 올리기!*/
                >
                    <div>
                        {id !== "home"? <Icon color="#B5B5B5"/>: <Icon color="white"/>}
                        {id === 'home' && <div className="tab-label">{label}</div>}
                    </div>
                    
                </button>
            ))}
        </div>
    )
}