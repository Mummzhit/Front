import React from 'react';
import './MainCalendar.css';

const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

export default function MainCalendar({ baseDate }) {
  // 기준 날짜로부터 해당 주 일요일 구하기
  const current = baseDate ? new Date(baseDate) : new Date();
  const dayIndex = current.getDay(); // 0(일) ~ 6(토)
  const sunday = new Date(current);
  sunday.setDate(current.getDate() - dayIndex);

  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(sunday);
    date.setDate(sunday.getDate() + i);
    return date;
  });

  const today = new Date();

  return (
    <div className="calendar-container">
      {weekDates.map((date, idx) => {
        const isToday =
          date.getFullYear() === today.getFullYear() &&
          date.getMonth() === today.getMonth() &&
          date.getDate() === today.getDate();

        return (
          <div key={idx} className="calendar-item">
            <div className={`calendar-day ${isToday ? 'today' : ''}`}>
              {days[date.getDay()]}
            </div>
            <div className={`calendar-date ${isToday ? 'today-circle' : ''}`}>
              {date.getDate()}
            </div>
          </div>
        );
      })}
    </div>
  );
}