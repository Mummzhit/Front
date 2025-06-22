import React from 'react';
import ActivityCard from '../ActivityCard/ActivityCard';
import './HorizontalScroller.css';

// 데이터
const activityData = [
  { id: 1, text: '지식・공부', icon: '/Icons/Study.jsx' },
  { id: 2, text: '운동・레저', icon: '/images/exercise.png' },


];

export default function HorizontalScroller() {
  return (
    <div className="scroller-container">
      {activityData.map((activity) => (
        <ActivityCard 
          key={activity.id} 
          icon={activity.icon} 
          text={activity.text} 
        />
      ))}
    </div>
  );
}