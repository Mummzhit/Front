import React from 'react';
import './ArchivePage.css';
import { useNavigate } from 'react-router-dom';

import BottomNav from '../Component/BottomNav/BottomNav';
import ArchiveTopNav from '../Component/ArchiveTopNav/ArchiveTopNav';
import ArchiveDateHeader from '../Component/ArchiveDateHeader/ArchiveDateHeader';
import MonthlyCalendar from '../Component/MonthlyCalendar/MonthlyCalendar';
import AddRecordCard from '../Component/AddRecordCard/AddRecordCard';

export default function ArchivePage() {
  const navigate = useNavigate();

  const handleAddRecordClick = () => {
    navigate('/archive-adding');
  };

  return (
    <div className="archive-page-container">
      <ArchiveTopNav/>
      <main className="archive-main-content">
        <ArchiveDateHeader/>
        <h2 className="title">오늘의 멈칫을 기록해 볼까요?</h2>

        <section className="calendar-section">
          <MonthlyCalendar/>
        </section>

        <AddRecordCard onClick={handleAddRecordClick} />

      </main>
      <BottomNav className='BottomNav' /> 
    </div>
  );
}