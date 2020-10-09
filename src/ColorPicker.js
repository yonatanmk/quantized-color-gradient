import React from 'react';
import { SketchPicker } from 'react-color';

class ColorPicker extends React.Component {
  state = {
    display: false,
    background: '#fff',
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
    const {color, handleColorChange} = this.props;
    return (
      <div>
        <SketchPicker
          color={ color }
          onChangeComplete={handleColorChange}
        />
      </div>
    );
  }
}

export default ColorPicker;
