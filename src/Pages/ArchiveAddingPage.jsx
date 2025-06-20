import React, { useState } from 'react';
import './ArchiveAddingPage.css';
import { useNavigate } from 'react-router-dom'; // 1. useNavigate import

import BottomNav from '../Component/BottomNav/BottomNav';
import ArchiveTopNav from '../Component/ArchiveTopNav/ArchiveTopNav';
import ArchiveDateHeader from '../Component/ArchiveDateHeader/ArchiveDateHeader';
import TextInput from '../Component/TextInput/TextInput';
import LoginButton from '../Component/LoginPage/LoginButton'; 
import TimeRollerPicker from '../Component/TimeRollerPicker/TimeRollerPicker';

export default function ArchiveAddingPage() {
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("저장하기 버튼이 클릭되었습니다.");
    navigate('/archive-added'); // 저장 후 /archive-added 경로로 이동
  };

  return (
    <div className="archive-page-container">
      

      <main className="archive-main-content">
        <ArchiveTopNav onTabChange={(tabId) => console.log(`Active tab changed to: ${tabId}`)} />
        <ArchiveDateHeader/>
        <h3>시작 시간을 입력해 주세요</h3>
        <TimeRollerPicker/>
        <h3>종료 시간을 입력해 주세요</h3>
        <TimeRollerPicker/>
        <h3>활동 종류를 선택해 주세요</h3>
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
      <BottomNav className='BottomNav' onTabChange={(tabId) => console.log(`Active tab changed to: ${tabId}`)} /> 
    </div>
  );
}