import React from 'react';

import './App.css';
import MainPage from './Pages/MainPage';
import BottomNav from './Component/BottomNav/BottomNav';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <div className="App">
      <LoginPage/>
      {/* <MainPage />
      <BottomNav className='BottomNav' onTabChange={(tabId) => console.log(`Active tab changed to: ${tabId}`)} /> 
       */}
    </div>
   
  );
}

export default App;
