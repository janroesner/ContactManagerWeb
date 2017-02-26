import React, { Component, PropTypes } from 'react'

export default class Gender extends Component {
  render() {
    const { gender } = this.props

    return(
      <span>
        { gender === 'm' ? '👨' : '👩' }
      </span>
    )
  }
}

// Note: here we should check the prop for being 'm' or 'f' in addition
Gender.propTypes = {
  gender: PropTypes.string.isRequired
}
