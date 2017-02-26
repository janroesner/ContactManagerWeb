import React, { PropTypes } from 'react'

const Gender = ({gender}) => {
  return(
    <span>
      { gender === 'm' ? '👨' : '👩' }
    </span>
  )
}

// Note: here we should check the prop for being 'm' or 'f' in addition
Gender.propTypes = {
  gender: PropTypes.string.isRequired
}

export default Gender
