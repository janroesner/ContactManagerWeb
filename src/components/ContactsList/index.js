import React, { Component } from 'react'
import Contact from '../Contact'
import styles from './styles'

export default class ContactsList extends Component {

  componentWillReceiveProps(nextProps) {
    console.log('ContactList#componentWillReceiveProps: ', nextProps)
  }

  render() {
    const { contacts } = this.props

    return(
      <div style={styles.list}>
        <ul style={styles.ul}>
          {contacts.map(contact => {
            return(
              <Contact key={contact.id} {...contact} />
            )
          })}
        </ul>
      </div>
    )
  }
}
