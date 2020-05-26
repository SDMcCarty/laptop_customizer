import React from 'react';
import Total from './Total';

function TotalPrice(props) {
  // Total
  const summary = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.selected[feature];
//sets up what's been selected
    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {props.currencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
  });
// //calculates total
//   const total = Object.keys(props.selected).reduce(
//     (acc, curr) => acc + props.selected[curr].cost,
//     0
//   );
  return (
    <section className="main__summary">
    <h2>Your cart</h2>
    {summary}
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        {/* {props.currencyFormat.format(total)} */}
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