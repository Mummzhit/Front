import React, { useState } from 'react';
import './ArchiveAddingPage.css';
import { useNavigate } from 'react-router-dom'; // 1. useNavigate import

import BottomNav from '../Component/BottomNav/BottomNav';
import ArchiveTopNav from '../Component/ArchiveTopNav/ArchiveTopNav';
import ArchiveDateHeader from '../Component/ArchiveDateHeader/ArchiveDateHeader';
import TextInput from '../Component/TextInput/TextInput';
import LoginButton from '../Component/LoginPage/LoginButton'; 

export default function ArchivePage() {
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("저장하기 버튼이 클릭되었습니다.");
    navigate('/archive-added'); // 저장 후 /archive-added 경로로 이동
  };

  return (
    <div className="archive-page-container">
      <ArchiveTopNav />

      <main className="archive-main-content">
        <ArchiveDateHeader/>
        <h3>자세한 이야기를 들려주세요</h3>
        <TextInput />
        <div className="save-button-container">

          <LoginButton 
            onClick={handleSave} 
            text="저장하기" 
            type="login" 
          />
        </div>
      </main>
    </div>
  );
}