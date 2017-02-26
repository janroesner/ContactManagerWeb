import React, { Component } from 'react'
import Contact from './contact'

const styles = {
  list: {
    marginTop: '50px',
  },
  ul: {
    left: 0,
    margin: '0 auto',
    maxWidth: '50%',
    padding: 0,
    right: 0,
  }
}

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
