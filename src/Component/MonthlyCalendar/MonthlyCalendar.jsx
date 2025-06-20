import React from 'react';
import './MonthlyCalendar.css';

export default function MonthlyCalendar() {
  // --- 1. 날짜 데이터 계산 로직 ---
  const today = new Date();
  const currentMonth = today.getMonth(); // 현재 월 (0~11)

  // 이번 달의 1일이 무슨 요일인지 알아냅니다. (0=일요일, 1=월요일, ...)
  const firstDayOfMonth = new Date(today.getFullYear(), currentMonth, 1);
  const dayOfWeek = firstDayOfMonth.getDay();

  // 달력의 시작 날짜를 계산합니다. (1일의 요일만큼 이전 날짜로 이동)
  const startDate = new Date(firstDayOfMonth);
  startDate.setDate(startDate.getDate() - dayOfWeek);

  // --- 2. 35일(5주)의 날짜 배열 생성 ---
  const calendarDays = [];
  for (let i = 0; i < 35; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    calendarDays.push(date);
  }

  const dayNames = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  return (
    <div className="monthly-calendar">
      {/* --- 3. 요일 헤더 렌더링 --- */}
      <div className="calendar-header">
        {dayNames.map(day => (
          <div key={day} className={`day-name ${day}`}>{day}</div>
        ))}
      </div>

      {/* --- 4. 35개의 날짜 렌더링 --- */}
      <div className="calendar-grid">
        {calendarDays.map((date, index) => {
          // 각 날짜에 적용할 CSS 클래스를 동적으로 결정
          const isToday = date.toDateString() === today.toDateString();
          const isCurrentMonth = date.getMonth() === currentMonth;
          const dayCellClass = `day-cell ${!isCurrentMonth ? 'not-current-month' : ''}`;
          const dayTextClass = `day-text ${isToday ? 'today' : ''}`;
           return (
            <div key={index} className={dayCellClass}>
              <span className={dayTextClass}>
                {date.getDate()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}