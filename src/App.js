import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './Pages/MainPage';
import LoginOnboardingPage from './Pages/LoginPage/LoginOnboardingPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignUpPage from './Pages/LoginPage/SignUpPage';
import SignUpSuccessPage from './Pages/LoginPage/SignUpSuccessPage';
import ArchivePage from './Pages/ArchivePage';
import ArchiveAddingPage from './Pages/ArchiveAddingPage';
import ArchiveAddedPage from './Pages/ArchiveAddedPage';
import AddEmotionOnboardingPage from './Pages/EmotionRecord/OnboardingPage';
import SelectEmotion from './Pages/EmotionRecord/SelectEmotion';

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
          <Route path='/archive' element={<ArchivePage />} /> 
          <Route path='/archive-adding' element={<ArchiveAddingPage />} /> 
          <Route path='/archive-added' element={<ArchiveAddedPage />} />
          <Route path='/add-emotion' element={<AddEmotionOnboardingPage />} />
          <Route path='/select-emotion' element={<SelectEmotion />} />
        
          

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
