import React from 'react';
import Summary from './Summary';
import Total from './Total';

function Cart() {
    return (<section className="main__summary">
    <h2>Your cart</h2>
    {/* {summary} */}
    <Summary />
    <Total />
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        {/* {USCurrencyFormat.format(total)} */}
      </div>
    </div>
  </section>)
}

export default Cart;