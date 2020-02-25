import React from 'react';
import Header from './components/Header/Header.js';
import './App.scss'
import TodoItem from './components/Todo-Item/TodoItem.js'
import ProgressBar from './components/Progress-Bar/ProgressBar.js'

function App() {
  return (
    <div className="App">
      <Header />
      <TodoItem />
      <ProgressBar />
    </div>
  );
}

export default App;
