import React, { Component } from 'react'
import ContactsContainer from './containers/contacts-container'
import classnames from 'classnames/bind'
import styles from './App.css'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dark: true
    }

    this.usesDarkTheme = this.usesDarkTheme.bind(this)
    this.toggleTheme = this.toggleTheme.bind(this)
  }

  usesDarkTheme() {
    return this.state.dark
  }

  toggleTheme() {
    this.setState({
      dark: !this.state.dark
    })
  }

  render() {
    const cx = classnames.bind(styles)

    return (
      <div className={cx(['App'], {'dark': this.usesDarkTheme()})}>
        <button onClick={this.toggleTheme}>Toggle Theme</button>
        <ContactsContainer />
      </div>
    )
  }
}

export default App
