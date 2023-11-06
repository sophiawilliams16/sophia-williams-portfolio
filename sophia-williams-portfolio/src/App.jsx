import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Navigation/>
      <Footer/>
    </div>
  );
};

export default App;
