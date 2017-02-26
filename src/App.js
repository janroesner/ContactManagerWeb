import React, { Component } from 'react'
import Contact from './components/contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Contact firstName='Donald' lastName='Duck' age={76} />
        <Contact firstName='Donald' lastName='Trump' age={99} />
      </div>
    );
  }
}

export default App
