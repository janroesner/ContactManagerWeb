import React, { Component } from 'react'
import ContactForm from '../components/contact-form'
import ContactsList from '../components/contacts-list'

export default class ContactsContainer extends Component {

  constructor(props) {
    super(props)

    // this.state = {
    //  ...
    // }
    this.addContact = this.addContact.bind(this)
  }

  // you can set initial(!!) state like so, or do it in the constructor
  state = {
    contacts: [
      {
        id: 1,
        firstName: 'Hillary',
        lastName: 'Clinton',
        age: 57,
        gender: 'f'
      },
      {
        id: 2,
        firstName: 'Donald',
        lastName: 'Duck',
        age: 76,
        gender: 'm'
      },
      {
        id: 3,
        firstName: 'Donald',
        lastName: 'Trump',
        age: 76,
        gender: 'm'
      }
    ]
  }

  addContact(contact) {
    // first create a copy of contacts
    let newContacts = [...this.state.contacts]

    //this is, where you better manage your id generation
    //the following is just quick & dirty
    contact.id = newContacts[newContacts.length - 1].id + 1

    // add the new contact to the copy
    newContacts.push(contact)

    // set new state and trigger re-rendering of components
    this.setState({contacts: newContacts})
  }

  render() {
    return(
      <div>
        <ContactForm addContact={this.addContact} />
        <ContactsList contacts={this.state.contacts} />
      </div>
    )
  }
}
