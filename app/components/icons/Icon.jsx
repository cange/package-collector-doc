import './styles'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import iconsPath from './../../assets/icons.svg'

const Icon = (props) => {
  const wrapperClasses = classNames('doc-icon', `doc-icon--${props.name}`)

  return (
    <svg viewBox="0 0 24 24" width="24" height="24" className={wrapperClasses}>
      <use width="24" height="24" href={`${iconsPath}#${props.name}`} />
    </svg>
  )
}

Icon.propTypes = {
  name: PropTypes.string
}

export default Icon
