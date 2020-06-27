import React, { createContext, useState } from 'react'
import cartItems from '../Cart-items'

//Create global context
export const GlobalContext = createContext();

//Create state and provide it globally inside a provider
export const GlobalProvider = ({ children }) => {
  const [cart, setCart] = useState(cartItems);

  return (
    <GlobalContext.Provider value={[cart, setCart]}>
      {children}
    </GlobalContext.Provider>
  );
}