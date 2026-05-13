import React from 'react';
import { FriendCard } from './components/FriendCard';
import './App.css';

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>
        나의 친구들
      </h1>
      
      {/* 과제 내용: 김시헌 친구 정보 전달 */}
      <FriendCard 
        name="김시헌" 
        MBTI="ISTP" 
        hobby="독서" 
      />

      {/* 다른 친구 정보 추가 예시 */}
      <FriendCard 
        name="홍길동" 
        MBTI="ENFP" 
        hobby="러닝" 
      />
      
      <p style={{ marginTop: '20px', color: '#888', textAlign: 'center' }}>
        src/App.jsx를 수정해서 더 많은 친구를 추가해보세요!
      </p>
    </div>
  );
}

export default App;