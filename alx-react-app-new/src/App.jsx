import WelcomeMessage from './components/WelcomeMessage';
import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer'; 
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {

  return (
    <>
     <Counter />
      <WelcomeMessage />
      <Header />
      <UserProfile
        name="Osho Emmanuel"
        age="75"
        bio="Loves hiking and photography."
      />
      <MainContent />
      <Footer />
  
      
    </>
  )
}

export default App
