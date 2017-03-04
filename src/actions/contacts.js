import * as constants from './constants'

export const addContact = (contact) => {
  return {
    type: constants.ADD_CONTACT,
    payload: {
      contact
    }
  }
}
