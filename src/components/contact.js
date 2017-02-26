import React, { Component, PropTypes } from 'react'
import Gender from './gender'

const styles = {
  listItem: {
    border: '1px solid gray',
    fontSize: '16px',
    listStyleType: 'none',
    marginTop: '10px',
    padding: '10px',
  },
  span: {
    marginLeft: '20px',
  }
}

export default class Contact extends Component {

  componentWillMount() {
    console.log('Contact will mount.')
  }

  render() {
    const { firstName, lastName, age, gender } = this.props

    return(
      <li style={styles.listItem}>
      <span style={styles.span}><Gender gender={gender} /></span>
        <span style={styles.span}>{`Firstname: ${firstName}`}</span>
        <span style={styles.span}>{`Lastname: ${lastName}`}</span>
        <span style={styles.span}>{`Age: ${age}`}</span>
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
