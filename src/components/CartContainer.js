import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import Cartitem from './Cartitem'

const CartContainer = () => {
  const { cart } = useContext(GlobalContext);
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
            total <span>$1800</span>
          </h4>
        </div>
        <button className="btn clear-btn">
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
