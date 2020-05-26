import React from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

function CustomizationSelection(props) {
//renders the whole customize laptop section
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const options = props.features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
//this is for each customize laptop selection - Professorとか
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(feature)}
            checked={item.name === props.selected[feature].name}
            onChange={e => props.updateFeature(feature, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({props.currencyFormat.format(item.cost)})
          </label>
        </div>
      );
    });
    
// fieldset for Procesor/OS/VC/Display
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
          {options}
      </fieldset>
    );
  });
  
  return (
    <section>{features}</section>
  )
}

export default CustomizationSelection