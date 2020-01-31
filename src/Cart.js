import React from 'react';
import Summary from './Summary';

function Cart(props) {
    return (<section className="main__summary">
    <h2>Your cart</h2>
    {/* {summary} */}
    { Object.keys(props.stateSelected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = props.stateSelected[feature];

      return <Summary />;
    })}

    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        {/* {USCurrencyFormat.format(total)} */}
      </div>
    </div>
  </section>)
}

export default Cart;