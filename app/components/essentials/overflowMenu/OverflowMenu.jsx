import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon } from './../../essentials'
import './styles.scss'

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onMenuClick: PropTypes.func
}

class OverflowMenu extends React.Component {
  renderItem(child, index) {
    return (
      <li key={index} className="doc-overflow-menu__item" role="menuitem">
        {child}
      </li>
    )
  }

  render() {
    const { children } = this.props
    const list = children.length === 1 ? this.renderItem(children, 0) : children.map(this.renderItem)

    return (
      <nav className="doc-overflow-menu">
        <Button className="doc-button--icon doc-overflow-menu__toggle" title="Tools">
          <Icon name="more-vert-handle" />
        </Button>
        <ul className="doc-overflow-menu__list" role="menu">
          {list}
        </ul>
      </nav>
    )
  }
}

OverflowMenu.propTypes = propTypes

export default OverflowMenu
