import React from 'react';
import {useState} from 'react';
import './ArchiveTopNav.css';

import MenuIcon from '../Icons/MenuIcon';
import XIcon from '../Icons/XIcon';




const tabs = [
    { id: 'menu', label: 'Menu',icon: MenuIcon },
    { id: 'X', label: 'X',icon: XIcon},
    
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
                        <Icon color="#252420"/>
                    </div>
                </button>
            ))}
        </div>
    )
}