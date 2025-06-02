import React from 'react';
import BottomNav from './Component/BottomNav/BottomNav';

function App() {
  return (
    <div className="App">
      <h1>mummzhit
      </h1>
      <BottomNav onTabChange={(tabId) => console.log(`Active tab changed to: ${tabId}`)} />
    </div>
   
  );
}

export default App;
