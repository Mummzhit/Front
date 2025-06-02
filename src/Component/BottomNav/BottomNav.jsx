
import React from 'react';
import {useState} from 'react';
import './BottomNav.css';
import HomeIcon from '../Icons/HomeIcon';

/* 캘린더, 채팅, 메인, 분석, 설정*/
const tabs = [
    { id: 'calendar', label: 'Calendar' },
    { id: 'chat', label: 'Chat'},
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'analyze', label: 'Analyze'},
    { id: 'settings', label: 'Settings'},
    
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
                    
                    {Icon && <Icon color='red' size='28'/>}
                    {id === 'home' && <div className="tab-label">{label}</div>}
                </button>
            ))}
        </div>
    )
}