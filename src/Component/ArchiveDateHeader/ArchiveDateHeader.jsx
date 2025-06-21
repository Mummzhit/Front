import React from 'react';
import './ArchiveDateHeader.css';

export default function DateHeader() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); 
  const day = String(today.getDate()).padStart(2, '0');
  const formattedDate = `${year}년 ${month}월 ${day}일`;

  return (
    <section className="archive-header">
      <h3 className="current-date">{formattedDate}</h3>
    </section>
  );
}