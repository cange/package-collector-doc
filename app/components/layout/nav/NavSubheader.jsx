import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  title: PropTypes.string.isRequired
}

const NavSubheader = ({ title }) => {
  return (
    <dt className="doc-nav__subheader">
      {title}
    </dt>
  )
}

NavSubheader.propTypes = propTypes

export default NavSubheader
