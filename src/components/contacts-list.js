import React, { Component } from 'react'
import Contact from './contact'

export default class ContactsList extends Component {
  render() {
    const { contacts } = this.props

    return(
      <ul>
        {contacts.map(contact => {
          return(
            <Contact key={contact.id} {...contact} />
          )
        })}
      </ul>
    )
  }
}
