import { useState } from 'react'
import './App.css'
import Search from './components/Search'

function App() {
  return (
    <div className="app-container">
      <header className="App-header">
      <h1>GitHub User Search</h1>
      </header>
      <Search />
    </div>
  )}

export default App