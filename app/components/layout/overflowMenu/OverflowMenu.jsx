import './styles.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon, InputSwitch } from './../../essentials'

const propTypes = {
  onMenuClick: PropTypes.func,
  items: PropTypes.array
}

class OverflowMenu extends React.Component {
  render() {
    const { items } = this.props
    const list = (
      <ul className="doc-overflow-menu__list" role="menu">
        {items.map((item, index) =>
          <li key={index} className="doc-overflow-menu__item" role="menuitem">
            <InputSwitch {...item} />
          </li>
        )}
      </ul>
    )

    return (
      <nav className="doc-overflow-menu">
        <Button className="doc-button--icon doc-overflow-menu__toggle" title="Tools">
          <Icon name="more-vert-handle"/>
        </Button>
        {list}
      </nav>
    )
  }
}

OverflowMenu.propTypes = propTypes

export default OverflowMenu
