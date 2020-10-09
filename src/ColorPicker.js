import React from 'react';
import { SketchPicker } from 'react-color';

class ColorPicker extends React.Component {
  state = {
    display: false,
  };

  toggleDisplay = () => this.setState({ display: !this.state.display });

  render() {
    const {color, handleColorChange} = this.props;
    const { display } = this.state;
    return (
      <div className="colorpicker">
        <button className="colorpicker-button" onClick={this.toggleDisplay}>{display ? 'Hide' : color.toUpperCase() }</button>
        {display && <div className="colorpicker-container">
          <SketchPicker
            color={ color }
            onChangeComplete={handleColorChange}
          />
        </div>}
      </div>
    );
  }
}

export default ColorPicker;
