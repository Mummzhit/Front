import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './Pages/MainPage';
import BottomNav from './Component/BottomNav/BottomNav';
import LoginOnboardingPage from './Pages/LoginPage/LoginOnboardingPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignUpPage from './Pages/LoginPage/SignUpPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/' element={<LoginOnboardingPage/>} />
          <Route path='/main' element={<MainPage/>} />
          <Route path='/sign-up' element={<SignUpPage/>} />
        </Routes>
          {/* <LoginPage/> */}
          {/* <LoginOnboardingPage/> */}
          {/* <MainPage />
          <BottomNav className='BottomNav' onTabChange={(tabId) => console.log(`Active tab changed to: ${tabId}`)} /> 
          */}
      </div>
    </Router>
    
   
  );
}

export default App;
