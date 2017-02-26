import React, { Component, PropTypes } from 'react'
import Gender from './gender'

export default class Contact extends Component {
  render() {
    const { firstName, lastName, age, gender } = this.props

    return(
      <li>
        <span><Gender gender={gender} /> - </span>
        <span>{`Firstname: ${firstName}`} - </span>
        <span>{`Lastname: ${lastName}`} - </span>
        <span>{`Age: ${age}`}</span>
      </li>
    )
  }
}

Contact.propTypes = {
  gender: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}
