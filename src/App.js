import React from 'react';
import './App.css';
import Background from './components/Background';
import Logo from './components/Logo'
import SocialMedia from './components/SocialMedia'
import BournemouthInfo from './components/BournemouthInfo'
import SouthbourneInfo from './components/SouthbourneInfo'


function App() {
  return(
    <div className='maingrid'>
    <Background />
    <Logo />
    <SocialMedia />
    <BournemouthInfo />
    <SouthbourneInfo />
    </div>
  )
}


export default App;
