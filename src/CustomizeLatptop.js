import React from 'react';

import CustomizationSelection from './CustomizationSelection';

function CustomizeLaptop(props) {
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
        <CustomizationSelection 
          features={props.features}
          currencyFormat={props.currencyFormat}
          updateFeature={props.updateFeature}
          selected={props.selected}
        />
    </form>
  )
}


export default CustomizeLaptop