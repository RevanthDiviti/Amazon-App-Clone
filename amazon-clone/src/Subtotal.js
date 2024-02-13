import React from "react";
import './Subtotal.css';

function Subtotal() {
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  
  const formattedValue = formatter.format(0);

  return (
    <div className="subtotal">
      <>
        <p>
          Subtotal (0 items) : <strong>{formattedValue}</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" /> This Order contains a gift
        </small>
      </>

      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;