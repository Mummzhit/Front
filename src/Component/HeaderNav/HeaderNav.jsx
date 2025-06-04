import React from 'react';
import {useState} from 'react';
import './HeaderNav.css';

import MenuIcon from '../Icons/MenuIcon';
import BellIcon from '../Icons/BellIcon';




/* 메뉴, 벨*/
const tabs = [
    { id: 'menu', label: 'Menu',icon: MenuIcon },
    { id: 'bell', label: 'Bell',icon: BellIcon},
    
];



export default function HeaderNav({ onTabChange }) { 
      
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    
    const handleClick = (id) => {
        setActiveTab(id);
        if (onTabChange) {
            onTabChange(id);
        };
    }

    return (
        <div className="header-nav-box">
            {tabs.map(({id,icon: Icon}) => (
                <button
                    key={id}
                    onClick={() => handleClick(id)}
                >
                    <div>
                        <Icon color="#B5B5B5"/>
                    </div>
                </button>
            ))}
        </div>
    )
}