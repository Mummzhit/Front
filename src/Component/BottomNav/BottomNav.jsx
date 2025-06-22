
import React, { use } from 'react';
import {useState} from 'react';
import './BottomNav.css';
import HomeIcon from '../Icons/HomeIcon';
import CalendarIcon from '../Icons/CalendarIcon';
import ChatIcon from '../Icons/ChatIcon';
import AnalyzeIcon from '../Icons/AnalyzeIcon';
import SettingsIcon from '../Icons/SettingsIcon';
import { useNavigate } from 'react-router-dom';

/* 캘린더, 채팅, 메인, 분석, 설정*/
const tabs = [
    { id: 'calendar', label: 'Calendar',icon: CalendarIcon, path: '/archive' },
    { id: 'chat', label: 'Chat',icon: ChatIcon},
    { id: 'home', label: 'Home', icon: HomeIcon, path: '/main' },
    { id: 'analyze', label: 'Analyze',icon: AnalyzeIcon, path: '/add-emotion' },
    { id: 'settings', label: 'Settings',icon: SettingsIcon},
    
];



export default function BottomNav({ onTabChange }) { 
      
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const navigate = useNavigate();

    const handleClick = (id,path) => {
        setActiveTab(id);
        navigate(path || '/main'); // 기본 경로를 '/main'으로 설정
        if (onTabChange) {
            onTabChange(id);
        };
    }

    return (
        <div className="nav-box">
            {tabs.map(({id,label,icon: Icon, path}) => (
                <button
                    key={id}
                    onClick={() => handleClick(id,path)}
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