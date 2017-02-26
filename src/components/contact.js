import React, { Component, PropTypes } from 'react'

export default class Contact extends Component {
  render() {
    const { firstName, lastName, age } = this.props

    return(
      <div>
        <span>{`Firstname: ${firstName}`} - </span>
        <span>{`Lastname: ${lastName}`} - </span>
        <span>{`Age: ${age}`}</span>
      </div>
    )
  }
}

Contact.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}
