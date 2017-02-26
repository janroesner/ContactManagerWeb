import React, { Component } from 'react'

export default class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: 'Donald',
      lastName: 'Duck',
      age: 76
    }
  }

  render() {
    const { firstName, lastName, age } = this.state

    return(
      <div>
        <span>{`Firstname: ${firstName}`} - </span>
        <span>{`Lastname: ${lastName}`} - </span>
        <span>{`Age: ${age}`}</span>
      </div>
    )
  }
}
