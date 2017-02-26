import React, { Component } from 'react'
import Contact from './components/contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Contact firstName='Hillary' lastName='Clinton' age={57} gender='f' />
        <Contact firstName='Donald' lastName='Duck' age={76} gender='m' />
        <Contact firstName='Donald' lastName='Trump' age={99} gender='m' />
      </div>
    );
  }
}

export default App
