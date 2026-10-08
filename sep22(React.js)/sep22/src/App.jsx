import React from 'react'
import Foods from './food.jsx'
import { useState } from 'react'
import './App.css'

function App() {

  const [cartCount, setcartCount] = useState(0);

  function AddtoCart() {
    console.log("updating cartcount");
    setcartCount(cartCount + 1);
  }

  return (
    <div>

      <h2>🛒 Cart: {cartCount}</h2>

      <div className="food-container">

        {
          Foods.map((Element) => {

            return (
              <div className="food-card" key={Element.id}>

                <p className="food-id">{Element.id}</p>

                <p className="food-name">{Element.name}</p>

                <p className="food-category">{Element.cotegry}</p>

                <p className="food-price">₹{Element.price}</p>

                <p className="food-available">
                  {Element.availabile}
                </p>

                <p className="food-emoji">{Element.emoji}</p>

                <button
                  disabled={!Element.available}
                  onClick={AddtoCart}
                >
                  Add to Cart
                </button>

              </div>
            );

          })
        }

      </div>

    </div>
  )
}

export default App