import React from 'react';
import './App.css';
import { Sidebar } from 'widgets/Sidebar';
import { Main } from './widgets/Main/Main';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
