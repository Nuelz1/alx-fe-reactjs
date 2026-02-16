import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <h1>GitHub User Search</h1>
      <p>Project Setup Complete!</p>
      
      {/* We will add our SearchBar and UserList components here later */}
      <div className="search-section">
        <input type="text" placeholder="Search for a user..." />
        <button disabled>Search</button>
      </div>
    </div>
  )
}

export default App