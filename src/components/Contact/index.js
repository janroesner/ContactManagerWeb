import React, { PropTypes } from 'react'
import Gender from '../Gender'
import styles from './styles'

const Contact = ({firstName, lastName, age, gender}) => {
  return(
    <li style={styles.listItem}>
    <span style={styles.span}><Gender gender={gender} /></span>
      <span style={styles.span}>{`Firstname: ${firstName}`}</span>
      <span style={styles.span}>{`Lastname: ${lastName}`}</span>
      <span style={styles.span}>{`Age: ${age}`}</span>
    </li>
  )
}

Contact.propTypes = {
  gender: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default Contact
