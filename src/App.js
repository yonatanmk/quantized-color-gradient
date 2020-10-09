import React from 'react';
import ColorPicker from './ColorPicker';

import './App.css';

class App extends React.Component {
  state = {
    color1: '#fff',
    color2: '#000',
  };

  handleColorChange = (key, color) => {
    const newState = {...this.state}
    newState[key] = color.hex
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <div className="colorpicker-row">
          <ColorPicker
            color={this.state.color1}
            handleColorChange={(color) => this.handleColorChange('color1', color)}
          />
          <ColorPicker
            color={this.state.color2}
            handleColorChange={(color) => this.handleColorChange('color2', color)}
          />
        </div>
        <p>{this.state.color1}</p>
        <p>{this.state.color2}</p>
      </div>
    );
  }
}

export default App;
