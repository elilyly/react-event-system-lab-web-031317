import React from 'react';
import ReactDOM from 'react-dom';

class Keypad extends React.Component {
    constructor() {
      super();

      this.input = this.input.bind(this)
    }

      input() {
        console.log('Entering password...')

      }

    render() {
      return (
        <input type="password" onKeyUp={this.input}></input>
      )
    }
}

export default Keypad;
