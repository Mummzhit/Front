import React from 'react';
import './AddRecordCard.css';

// 클릭 이벤트를 props로 받아와서 section에 연결합니다.
export default function AddRecordCard({ onClick }) {
  return (
    <section className="add-record-section" onClick={onClick}>
      <div className="add-record-card">
        <p>오늘의 멈칫<br/>추가하기</p>
      </div>
    </section>
  );
}