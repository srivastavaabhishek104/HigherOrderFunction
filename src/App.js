import React, { Component } from 'react';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

class App extends Component {
  render() {
    return (
      <div>
        <ClickCounter />
        <HoverCounter name="Abhishek Srivastava"/>
      </div>
    );
  }
}

export default App;