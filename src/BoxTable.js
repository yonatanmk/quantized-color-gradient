import React from 'react';

class App extends React.Component {
  render() {
    const { boxArr } = this.props;
    // console.log(boxArr)
    return (
      <div className="boxTable">
        <table>
          <tbody>
            <tr>
              {boxArr.map(boxColor => 
                <td 
                  key={Math.random() + boxColor} 
                  className="box"
                  style={{ backgroundColor: boxColor}}>
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
