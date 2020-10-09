import React from 'react';
import { getContrast } from './utils';

class App extends React.Component {
  render() {
    const { boxArr } = this.props;
    return (
      <div className="boxTable">
        <table>
          <tbody>
            <tr>
              {boxArr.map(boxColor => {
                const contrastColor = getContrast(boxColor);
                return (
                  <td 
                    key={Math.random() + boxColor} 
                    className="box"
                    style={{ backgroundColor: boxColor, color: contrastColor, border: `1px solid ${contrastColor === 'white' ? boxColor : contrastColor}`}}
                  >
                    {boxColor.toUpperCase()}
                  </td>
                )
              }
              )}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
