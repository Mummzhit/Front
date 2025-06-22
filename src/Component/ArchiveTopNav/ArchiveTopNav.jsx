import React, { useState } from 'react';
import './ArchiveTopNav.css';
import { useNavigate } from 'react-router-dom';

import MenuIcon from '../Icons/MenuIcon';
import XIcon from '../Icons/XIcon';

const tabs = [
  { id: 'menu', label: 'Menu', icon: MenuIcon },
  { id: 'x', label: 'X', icon: XIcon }, // id를 소문자로 통일 (X → x)
];

export default function HeaderNav({ onTabChange }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const navigate = useNavigate();

  const handleClick = (id) => {
    setActiveTab(id);

    if (onTabChange) {
      onTabChange(id);
    }

    if (id === 'x') {
      navigate('/main'); // ← 여기서 페이지 이동
    }
  };

  return (
    <div className="header-nav-box">
      {tabs.map(({ id, icon: Icon }) => (
        <button key={id} onClick={() => handleClick(id)}>
          <div>
            <Icon color="#252420" />
          </div>
        </button>
      ))}
    </div>
  );
}
