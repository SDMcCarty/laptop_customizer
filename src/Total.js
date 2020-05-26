import React from 'react';

function Total(props) {
  //calculates total
  console.log(props)
  const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost,
    0
  );
  console.log(total);
  return (
    // <div></div>
    <div>{props.currencyFormat.format(total)}</div>
  )
}

export default Total;