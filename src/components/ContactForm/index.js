import React, { Component } from 'react'
import styles from './styles'

export default class ContactForm extends Component {

  constructor(props) {
    super(props)

    this.onAddContact = this.onAddContact.bind(this)
    this.toBeUnitTested = this.toBeUnitTested.bind(this)
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

  toBeUnitTested(input) {
    if (typeof(input) === 'number') { return input + 1}

    return -1
  }

  render() {
    return(
      <form style={styles.form} onSubmit={this.onAddContact} ref={el => this.form = el}>
        <input style={styles.textInput} type='text' placeholder='Firstname' ref={el => {this.firstNameInput = el}} />
        <input style={styles.textInput} type='text' placeholder='Lastname' ref={el => this.lastNameInput = el} />
        <input style={styles.textInput} type='text' placeholder='Age' ref={el => this.ageInput = el} />
        <span style={styles.genderInput}>
          Gender:
          <select style={styles.selectInput} ref={el => {this.genderInput = el}}>
            <option value='f'>👩</option>
            <option value='m'>👨</option>
          </select>
        </span>
        <br />
        <button style={styles.button}>Add</button>
      </form>
    )
  }
}
