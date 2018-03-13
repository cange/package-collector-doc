import './styles.scss'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import iconsPath from './../../../assets/icons.svg'

/** This Component helps to load and display icons. */
const Icon = ({ name }) => {
  const xmlns = 'http://www.w3.org/2000/svg'
  const props = {
    className: classNames('doc-icon', `doc-icon--${name}`),
    height: '24',
    viewBox: '0 0 24 24',
    width: '24',
    xmlns
  }

  return (
    <svg {...props}>
      <use xmlns={xmlns} xlinkHref={`${iconsPath}#${name}`} />
    </svg>
  )
}

Icon.propTypes = {
  name: PropTypes.string
}

export default Icon
