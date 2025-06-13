import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './Pages/MainPage';
import BottomNav from './Component/BottomNav/BottomNav';
import LoginOnboardingPage from './Pages/LoginPage/LoginOnboardingPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignUpPage from './Pages/LoginPage/SignUpPage';
import SignUpSuccessPage from './Pages/LoginPage/SignUpSuccessPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/' element={<LoginOnboardingPage/>} />
          <Route path='/main' element={<MainPage/>} />
          <Route path='/sign-up' element={<SignUpPage/>} />
          <Route path='/sign-up-success' element={<SignUpSuccessPage/>} />
        </Routes>
          {/* <LoginPage/> */}
          {/* <LoginOnboardingPage/> */}
          {/* <MainPage />
          
          */}
      </div>
    </Router>
    
   
  );
}

export default App;
