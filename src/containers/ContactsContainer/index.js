import React, { Component } from 'react'
import { ContactForm } from '../../components'
import { ContactsList } from '../../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/contacts'

class ContactsContainer extends Component {

  render() {
    const { actions: { addContact } } = this.props

    return(
      <div>
        <ContactForm addContact={addContact} />
        <ContactsList contacts={this.props.contacts} />
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    contacts: store.contacts.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer)
