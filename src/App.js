import React from 'react';
import ColorPicker from './ColorPicker';
import BoxTable from './BoxTable';

import './App.css';
import { generateBoxArr } from './utils';

class App extends React.Component {
  state = {
    boxes: 6,
    color1: '#ffffff',
    color2: '#000000',
  };

  handleBoxesChange = e => {
    this.setState({ boxes: parseInt(e.target.value, 10) });
  }

  handleColorChange = (key, color) => {
    const newState = {...this.state}
    newState[key] = color.hex
    this.setState(newState);
  };

  render() {
    const { boxes, color1, color2 } = this.state;
    const boxArr = generateBoxArr(boxes, color1, color2)
    console.log(boxArr)
    return (
      <div className="App">
        <div className="colorpicker-row">
          <label>Boxes</label>
          <input 
            className="box-input" 
            type="number"
            value={boxes} 
            onChange={this.handleBoxesChange}></input>
          <ColorPicker
            color={color1}
            handleColorChange={(color) => this.handleColorChange('color1', color)}
          />
          <ColorPicker
            color={color2}
            handleColorChange={(color) => this.handleColorChange('color2', color)}
          />
        </div>
        <BoxTable boxArr={boxArr} />
      </div>
    );
  }
}

export default App;
