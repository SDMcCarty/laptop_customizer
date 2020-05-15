import React, { Component } from 'react';

import Header from './Header';
import CustomizeLaptop from './CustomizeLatptop';
import TotalPrice from './TotalPrice';

import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <CustomizeLaptop 
            features={this.props.features}
            USCurrencyFormat={USCurrencyFormat}
            updateFeature={this.updateFeature}
            selected={this.state.selected}
          />
          <TotalPrice
            features={this.props.features}
            USCurrencyFormat={USCurrencyFormat}
            selected={this.state.selected}
          />
        </main>
      </div>
    );
  }
}

export default App;
