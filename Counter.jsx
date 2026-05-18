import React, { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  // 💡 0으로 초기화하는 함수 추가
  const reset = () => setCount(0); 

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>카운터: {count}</h1>
      <button onClick={increment} style={buttonStyle}>+1</button>
      <button onClick={decrement} style={buttonStyle}>-1</button>
      {/* 💡 초기화 버튼 추가 */}
      <button onClick={reset} style={resetButtonStyle}>초기화</button>
    </div>
  );
}

// 버튼들을 보기 좋게 만드는 간단한 스타일 (선택 사항)
const buttonStyle = {
  margin: '5px',
  padding: '8px 16px',
  fontSize: '16px',
  cursor: 'pointer'
};

const resetButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#e74c3c', // 빨간색 계열로 포인트
  color: 'white',
  border: 'none',
  borderRadius: '4px'
};
