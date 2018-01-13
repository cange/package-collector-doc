import './styles'
import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from './../icon'

export default class IconButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.onClick(event)
  }

  render() {
    return (
      <button className="doc-button doc-button--icon" type="button" onClick={this.handleClick}>
        <Icon name={this.props.name} />
      </button>
    )
  }
}

IconButton.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func
}
