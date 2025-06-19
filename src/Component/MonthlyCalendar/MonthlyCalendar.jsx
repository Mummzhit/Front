import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // react-calendar 기본 CSS
import './MonthlyCalendar.css'; // 우리가 직접 만들 커스텀 CSS

export default function MonthlyCalendar() {
  // 날짜 상태를 관리하기 위한 state
  const [date, setDate] = useState(new Date());

  return (
    <div className="custom-calendar-container">
      <Calendar
        onChange={setDate}
        value={date}
        // --- 여기부터가 커스터마이징을 위한 props입니다 ---
        
        // (상단 네비게이션) 년/월 표시 형식
        formatYear={(locale, date) => date.getFullYear()} 
        calendarType="gregory"
        // (요일) '일' '월' 대신 'sun' 'mon'으로 표시
        formatShortWeekday={(locale, date) => ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][date.getDay()]}
        
        // (상단 네비게이션) 다음달, 이전달 표시를 제거 (디자인에 따라 선택)
        next2Label={null}
        prev2Label={null}
      />
    </div>
  );
}