import './styles'
import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import iconsPath from './../../assets/icons.svg'

const Icon = (props) => {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" className={cn('doc-icon', `doc-icon--${props.name}`)}>
      <use width="24" height="24" href={`${iconsPath}#${props.name}`} />
    </svg>
  )
}

Icon.propTypes = {
  name: PropTypes.string
}

export default Icon
