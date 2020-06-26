export default (state, action) => {
  switch(action.type) {
    case 'INCREASE_AMOUNT':
      return {
        ...state, 
        newState: state.map(cartItem => {
          if (cartItem.id === action.payload) 
            return (cartItem = { ...cartItem, amount: cartItem.amount + 1 })
        })
      }
      // console.log(action.payload)
    default:
      return state;
  }
}