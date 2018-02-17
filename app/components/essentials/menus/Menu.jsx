import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
const Menu = ({children}) => (
  <ul className="doc-menu" role="menu">
    {children}
  </ul>
)

Menu.propTypes = propTypes

export default Menu
