import React from 'react';

// 친구 정보를 보여주는 컴포넌트입니다.
export function FriendCard({ name, MBTI, hobby }) {
  return (
    <div style={cardStyle}>
      <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>이름: {name}</h3>
      <p style={{ margin: '5px 0' }}><strong>MBTI:</strong> {MBTI}</p>
      <p style={{ margin: '5px 0' }}><strong>취미:</strong> {hobby}</p>
    </div>
  );
}

// 간단한 카드 디자인 스타일
const cardStyle = {
  border: '2px solid #646cff',
  borderRadius: '12px',
  padding: '20px',
  margin: '10px 0',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  color: '#213547',
  textAlign: 'left'
};