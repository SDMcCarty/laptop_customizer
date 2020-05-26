import React from 'react';

function Total(props) {
  const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost,
    0
  );

  return (
    <div>{props.currencyFormat.format(total)}</div>
  )
}

export default Total;