import React, { Component } from 'react'

export default class ContactForm extends Component {

  constructor(props) {
    super(props)

    this.onAddContact = this.onAddContact.bind(this)
  }

  onAddContact(e) {
    e.preventDefault()

    const newContact = {
      firstName: this.firstNameInput.value,
      lastName: this.lastNameInput.value,
      age: this.ageInput.value,
      gender: this.genderInput.value
    }

    this.props.addContact(newContact)
    this.form.reset()
    this.firstNameInput.focus()
  }

  render() {
    return(
      <form onSubmit={this.onAddContact} ref={el => this.form = el}>
        <input type='text' placeholder='Firstname' ref={el => {this.firstNameInput = el}} />
        <input type='text' placeholder='Lastname' ref={el => this.lastNameInput = el} />
        <input type='text' placeholder='Age' ref={el => this.ageInput = el} />
        <select ref={el => {this.genderInput = el}}>
          <option value='f'>👩</option>
          <option value='m'>👨</option>
        </select>
        <br />
        <button>Add</button>
        <hr />
      </form>
    )
  }
}
