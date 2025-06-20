import React, { useState, useRef, useEffect } from 'react';
import './Roller.css';

const ITEM_HEIGHT = 40; // 각 항목의 높이

export default function Roller({ items, value, onChange }) {
  const rollerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [initialScrollTop, setInitialScrollTop] = useState(0);

  // value prop이 변경될 때 스크롤 위치를 동기화
  useEffect(() => {
    const selectedIndex = items.indexOf(value);
    if (selectedIndex > -1 && rollerRef.current) {
      const targetScrollTop = selectedIndex * ITEM_HEIGHT;
      rollerRef.current.scrollTop = targetScrollTop;
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

    // 드래그가 끝나면 가장 가까운 항목으로 스크롤을 '스냅'
    const currentScrollTop = rollerRef.current.scrollTop;
    const closestIndex = Math.round(currentScrollTop / ITEM_HEIGHT);
    const targetScrollTop = closestIndex * ITEM_HEIGHT;

    rollerRef.current.scrollTo({ top: targetScrollTop, behavior: 'smooth' });

    // 부모 컴포넌트로 변경된 값을 알림
    onChange(items[closestIndex]);
  };

  return (
    <div 
      className="roller-container"
      ref={rollerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // 컨테이너 밖으로 마우스가 나가도 드래그가 멈추도록
    >
      <div className="roller-content">
        {items.map((item, index) => (
          <div key={index} className="roller-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}