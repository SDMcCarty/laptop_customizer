import React from 'react';
import Total from './Total';
import Summary from './Summary';

function TotalPrice(props) {

  return (
    <section className="main__summary">
    <h2>Your cart</h2>
    <Summary 
      selected={props.selected}
      currencyFormat={props.currencyFormat}
    />
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        <Total 
          currencyFormat={props.currencyFormat}
          selected={props.selected}
        />
      </div>
    </div>
  </section>
  )
}

export default TotalPrice