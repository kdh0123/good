import React from 'react';
import { FriendCard } from './components/FriendCard';
import { Counter } from './components/Counter';
import { TextSaver } from './components/TextSaver';
import './App.css';

function App() {
  return (
    <div>
          <Counter /> 
          <TextSaver />
    </div>
  );
}

export default App;