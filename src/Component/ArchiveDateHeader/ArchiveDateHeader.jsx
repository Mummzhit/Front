import React from 'react';

export default function DateHeader() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.toLocaleString('ko-KR', { month: 'long' });
  const day = today.getDate();
  const formattedDate = `${year}년 ${month} ${day}일`;

  return (
    <section className="archive-header">
      <p className="current-date">{formattedDate}</p>
      <h2 className="title">오늘의 멈칫을 기록해 볼까요?</h2>
    </section>
  );
}