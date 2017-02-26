import React, { Component } from 'react'

const styles = {
  form: {
    left: 0,
    margin: '20px auto',
    maxWidth: '50%',
    right: 0,
  },
  textInput: {
    display: 'block',
    height: '20px',
    left: 0,
    margin: '10px auto',
    right: 0,
    width: '80%',
  },
  genderInput: {
    color: 'light-gray',
    fontSize: '12px',
    margin: '30px 40px',
  },
  selectInput: {
    backgroundColor: 'white',
    border: 'none',
    fontSize: '18px',
    height: '60px',
    width: '60px',
  },
  button: {
    backgroundColor: 'orange',
    border: 'none',
    color: 'white',
    fontSize: '14px',
    fontWeight: 'bold',
    left: '325px',
    padding: '10px 40px',
    position: 'relative',
  }
}

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
        <hr />
      </form>
    )
  }
}
