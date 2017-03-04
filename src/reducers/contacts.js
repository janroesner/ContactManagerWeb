import initialData from './data'
import * as constants from '../actions/constants'

const initialState = {
  data: initialData.contacts,
  isLoading: false,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type){
    case constants.ADD_CONTACT: {
      return {
        ...state,
        data: [...state.data, action.payload.contact]
      }
    }
    default:
      return state
  }
}
