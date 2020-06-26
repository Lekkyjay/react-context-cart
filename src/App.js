import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Navbar />
      <CartContainer />
    </GlobalProvider>
  );
}

export default App;
