import React from 'react';

import './App.css';
import MainPage from './Pages/MainPage';
import BottomNav from './Component/BottomNav/BottomNav';

function App() {
  return (
    <div className="App">
      <MainPage />
      <BottomNav className='BottomNav' onTabChange={(tabId) => console.log(`Active tab changed to: ${tabId}`)} /> 
      
    </div>
   
  );
}

export default App;
