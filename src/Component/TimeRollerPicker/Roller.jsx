import React, { useState, useRef, useEffect } from 'react';
import './Roller.css';

const ITEM_HEIGHT = 40; // 각 항목의 높이

export default function Roller({ items, value, onChange }) {
  const rollerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [initialScrollTop, setInitialScrollTop] = useState(0);

  // ▼▼▼ 1. 현재 활성화된 인덱스를 저장할 state 추가 ▼▼▼
  const [activeIndex, setActiveIndex] = useState(items.indexOf(value));

  // value prop이 변경될 때 스크롤 위치 및 activeIndex 동기화
  useEffect(() => {
    const selectedIndex = items.indexOf(value);
    if (selectedIndex > -1 && rollerRef.current) {
      const targetScrollTop = selectedIndex * ITEM_HEIGHT;
      rollerRef.current.scrollTop = targetScrollTop;
      setActiveIndex(selectedIndex);
    }
  }, [value, items]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.clientY);
    setInitialScrollTop(rollerRef.current.scrollTop);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !rollerRef.current) return;
    e.preventDefault();
    const deltaY = e.clientY - startY;
    rollerRef.current.scrollTop = initialScrollTop - deltaY;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const currentScrollTop = rollerRef.current.scrollTop;
    const closestIndex = Math.round(currentScrollTop / ITEM_HEIGHT);
    const targetScrollTop = closestIndex * ITEM_HEIGHT;
    
    rollerRef.current.scrollTo({ top: targetScrollTop, behavior: 'smooth' });
    
    onChange(items[closestIndex]);
    setActiveIndex(closestIndex); // 활성화 인덱스 업데이트
  };

  // ▼▼▼ 2. 스크롤 이벤트 핸들러 추가 ▼▼▼
  const handleScroll = () => {
    if (!isDragging && rollerRef.current) {
      const currentScrollTop = rollerRef.current.scrollTop;
      const newActiveIndex = Math.round(currentScrollTop / ITEM_HEIGHT);
      setActiveIndex(newActiveIndex);
    }
  }

  return (
    <div 
      className="roller-container"
      ref={rollerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onScroll={handleScroll} // 스크롤 이벤트 리스너 추가
    >
      <div className="roller-content">
        {items.map((item, index) => (
          // ▼▼▼ 3. activeIndex와 현재 index를 비교하여 'active' 클래스 추가 ▼▼▼
          <div key={index} className={`roller-item ${index === activeIndex ? 'active' : ''}`}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}