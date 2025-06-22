import React from 'react';
import './ArchiveAddingPage.css';
import { useNavigate } from 'react-router-dom';

import BottomNav from '../Component/BottomNav/BottomNav';
import ArchiveTopNav from '../Component/ArchiveTopNav/ArchiveTopNav';
import ArchiveDateHeader from '../Component/ArchiveDateHeader/ArchiveDateHeader';
import TimeRollerPicker from '../Component/TimeRollerPicker/TimeRollerPicker';
import TextInput from '../Component/TextInput/TextInput';
import LoginButton from '../Component/LoginPage/LoginButton';
import HorizontalScroller from '../Component/HorizontalScroller/HorizontalScroller';

export default function ArchiveAddingPage() {
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("저장하기 버튼이 클릭되었습니다.");
    navigate('/archive-added');
  };

  return (
    <div className="archive-page-container">
      <ArchiveTopNav />
      <main className="archive-main-content">
        <ArchiveDateHeader/>
        <h2 className="title">오늘의 멈칫을 기록해 볼까요?</h2>
        <section className="input-section">
          <h3>시작 시간을 입력해 주세요</h3>
          <TimeRollerPicker/>
        </section>

        <section className="input-section">
          <h3>종료 시간을 입력해 주세요</h3>
          <TimeRollerPicker/>
        </section>

        <section className="input-section">
          <h3>활동 종류를 선택해 주세요</h3>
        </section>

        <section className="input-section">
          <h3>자세한 이야기를 들려주세요</h3>
          <TextInput />
        </section>

        <div className="save-button-container">
          <LoginButton 
            onClick={handleSave} 
            text="저장하기" 
            type="login" 
          />
        </div>
      </main>
      <BottomNav className='BottomNav' /> 
    </div>
  );
}