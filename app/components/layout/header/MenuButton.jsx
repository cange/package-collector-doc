import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './../../icon'

export default class MenuButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.onClick(event)
  }

  render() {
    return (
      <button className="doc-toolbar__button" type="button" onClick={this.handleClick}>
        <Icon name="menu-handle"/>
      </button>
    )
  }
}

MenuButton.propTypes = {
  onClick: PropTypes.func
}
