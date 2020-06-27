import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import Cartitem from './Cartitem'

const CartContainer = () => {
  const [cart, setCart] = useContext(GlobalContext);

  //Calculate total cost and round it to 2 decimal places
  const totalCost = cart.reduce((acc, item) => (
    acc += item.price * item.amount
  ), 0).toFixed(2)
  

  //Clear cart
  const clearCart = () => {
    setCart([])
  }
  
  //Empty cart rendering
  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  //Non-Empty cart rendering
  return (
    <section className="cart">
      <header>
      <h2>your bag</h2>
      </header>
      <article>
      {cart.map(item => {
        return <Cartitem key={item.id} {...item} />;
      })}
      </article>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${ totalCost }</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => clearCart()}>
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
