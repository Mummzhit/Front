import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // react-calendar 기본 CSS
import './ArchivePage.css'; // 커스텀 CSS
import BottomNav from '../Component/BottomNav/BottomNav';
import { useNavigate } from 'react-router-dom';
import ArchiveTopNav from '../Component/ArchiveTopNav/ArchiveTopNav';
import ArchiveDateHeader from '../Component/ArchiveDateHeader/ArchiveDateHeader';
import MonthlyCalendar from '../Component/MonthlyCalendar/MonthlyCalendar';

export default function ArchivePage() {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  const handleAddRecordClick = () => {
    navigate('/archive-adding');
    console.log("오늘의 멈칫 추가하기 섹션 클릭됨")
  }

  return (
    <div className="archive-page-container">
      <ArchiveTopNav/>
      <main className="archive-main-content">
        <ArchiveDateHeader/>
        {/* 3. 캘린더 */}
        <MonthlyCalendar />

        {/* 4. 기록 추가 카드 */}
        <section className="add-record-section" onClick={handleAddRecordClick}>
          <div className="add-record-card">
            <p>오늘의 멈칫<br/>추가하기</p>
          </div>
        </section>
      </main>
      <BottomNav className='BottomNav' onTabChange={(tabId) => console.log(`Active tab changed to: ${tabId}`)} /> 
    </div>
  );
}
