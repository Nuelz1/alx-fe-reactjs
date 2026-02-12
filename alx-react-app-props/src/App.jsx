import WelcomeMessage from './components/WelcomeMessage';
import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer'; 
import UserProfile from './components/UserProfile';
import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext';
import UserDetails from './components/UserDetails';

function App() {
  const [count, setCount] = useState(0)

  const userData = {
    name: "Osho Emmanuel",
    email: "oshoemmanuel3@gmail.com",
  };

  return (
    <>
      <div style = {{backgroundColor: '#a6d81c', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: 'calc(10px + 2vmin)', color: 'white'}}>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <UserContext.Provider value={userData}>
        <ProfilePage/>
        <userProfile/>
     </UserContext.Provider>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
