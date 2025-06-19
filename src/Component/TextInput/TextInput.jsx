import React, { useState } from 'react';
import './TextInput.css';

export default function MemoInput() {
  // 입력된 텍스트를 저장하기 위한 state
  const [text, setText] = useState('');

  // 텍스트가 변경될 때마다 state를 업데이트하는 함수
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="text-input-container">
      <textarea
        className="text-textarea"
        placeholder="상세 기록은 선택 사항이므로, 편하게 입력해 주세요."
        value={text}
        onChange={handleTextChange}
      />
    </div>
  );
}