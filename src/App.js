import React, { Component } from 'react'
import Contact from './components/contact'

class App extends Component {
  render() {
    const { store } = this.props

    return (
      <div className="App">
        {store.map(contact => {
          return(
            <Contact {...contact} />
          )
        })}
      </div>
    );
  }
}

App.defaultProps = {
  store: [
    {
      firstName: 'Hillary',
      lastName: 'Clinton',
      age: 57,
      gender: 'f'
    },
    {
      firstName: 'Donald',
      lastName: 'Duck',
      age: 76,
      gender: 'm'
    },
    {
      firstName: 'Donald',
      lastName: 'Trump',
      age: 76,
      gender: 'm'
    }
  ]
}

export default App
