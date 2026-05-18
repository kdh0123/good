import React, { useState } from 'react';

export function TextSaver() {
  const [input, setInput] = useState('');
  const [saved, setSaved] = useState('');

  const handleSave = () => setSaved(input);

  const handleReset = () => {
    setInput('');  
    setSaved('');  
  };

  return (
    <div style={{ padding: '20px' }}>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{ padding: '8px', marginRight: '5px', fontSize: '16px' }}
      />
      
      <button onClick={handleSave} style={{ marginRight: '5px', padding: '8px 14px', fontSize: '16px' }}>
        저장
      </button>

      <button onClick={handleReset} style={{ padding: '8px 14px', fontSize: '16px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        초기화
      </button>

      {/* 💡 저장된 이름 문구 스타일 수정 */}
      {saved && (
        <h1 style={{ 
          marginTop: '25px', 
          color: '#ffffff',     // 글자 색상을 흰색으로 변경!
          fontSize: '2.5rem',   // 글자 크기를 더 크게 확대! (기존 h2보다 훨씬 큽니다)
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          안녕하세요, 저는 {saved}입니다!
        </h1>
      )}
    </div>
  );
}