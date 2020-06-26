import React, { createContext, useReducer } from 'react'
import Reducer from './Reducer'
import cartItems from '../Cart-items'

// Initial state
// const initialState = cartItems

//Create global context
export const GlobalContext = createContext(cartItems);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, cartItems);
  // const [cart, setCart] = useState([]);


  function increaseAmount(id) {
    dispatch({
      type: 'INCREASE_AMOUNT',
      payload: id
    })
  }

  return (
    <GlobalContext.Provider value={{ name: 'Hello world', cart: cartItems, state, increaseAmount }}>
        {children}
  </GlobalContext.Provider>
  // return (
  //   <GlobalContext.Provider value={[cart, setCart]}>
  //       {children}
  // </GlobalContext.Provider>
  );
}