import React, { useState } from 'react';
import Roller from './Roller';
import './TimeRollerPicker.css';

export default function TimeRollerPicker() {
  // 시간, 분, 오전/오후 데이터
  const hourData = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
  const minuteData = Array.from({ length: 12 }, (_, i) => String(i * 5).padStart(2, '0'));
  const periodData = ['AM', 'PM'];

  // 선택된 시간 전체를 관리하는 state
  const [time, setTime] = useState({
    hour: '08',
    minute: '00',
    period: 'AM',
  });

  return (
    <div className="time-roller-picker">
      <div className="picker-column">
        <Roller items={hourData} value={time.hour} onChange={(newHour) => setTime(t => ({...t, hour: newHour}))} />
      </div>
      <div className="picker-separator">:</div>
      <div className="picker-column">
        <Roller items={minuteData} value={time.minute} onChange={(newMinute) => setTime(t => ({...t, minute: newMinute}))} />
      </div>
      <div className="picker-column">
        <Roller items={periodData} value={time.period} onChange={(newPeriod) => setTime(t => ({...t, period: newPeriod}))} />
      </div>
      {/* 중앙 선택 영역을 표시하는 하이라이트 오버레이 */}
      <div className="picker-highlight-overlay"></div>
    </div>
  );
}