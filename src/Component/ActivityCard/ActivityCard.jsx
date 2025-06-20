import React from 'react';
import './ActivityCard.css';

export default function ActivityCard({ icon, text }) {
  return (
    <div className="activity-card">
      <img src={icon} alt={text} className="activity-icon" />
      <p className="activity-text">{text}</p>
    </div>
  );
}