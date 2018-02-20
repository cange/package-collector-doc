import React from 'react'
import PropTypes from 'prop-types'
import Button from './../../button'
import { Switch } from './../../inputs'
import './styles.scss'

const itemTypes = {
  COMMAND: 'command',
  CHECKBOX: 'checkbox',
  DIVIDER: 'divider'
}

const propTypes = {
  /** Handler to be called when the user taps/clicks the `button` */
  onPress: PropTypes.func,
  /** Handler to be called when the user taps/clicks the `checkbox`. */
  onChange: PropTypes.func,
  /** The name of the command as shown to the user. */
  label: PropTypes.string,
  /** Text to display for blindness accessibility features */
  title: PropTypes.string,
  /** This attribute indicates the kind of command, and can be one of three values.

  - `command`: A regular command with an associated action. This is the missing value default.
  - `checkbox`: Represents a command that can be toggled between two different states.
  - `divider`: Represents a separation between other menu items.
  */
  type: PropTypes.oneOf([itemTypes.COMMAND, itemTypes.CHECKBOX, itemTypes.DIVIDER
  ]),
  /** Boolean attribute which indicates whether the command is selected. May only be used when the type attribute is `checkbox`. */
  checked: PropTypes.bool
}
const defaultProps = {
  checked: false,
  label: '',
  onChange: () => {},
  onPress: () => {},
  title: '',
  type: itemTypes.COMMAND
}

class MenuItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handlePress = this.handlePress.bind(this)
  }

  handleChange(event) {
    this.props.onChange(event)
  }

  handlePress(event) {
    this.props.onPress(event)
  }

  renderItem(type, props) {
    let content

    switch (type) {
      case itemTypes.COMMAND:
        content = (
          <li className="doc-menu__item" role="menuitem">
            <Button {...props}>{props.label}</Button>
          </li>
        )
        break
      case itemTypes.CHECKBOX:
        content = (
          <li className="doc-menu__item" role="menuitem">
            <Switch {...props} />
          </li>
        )
        break
      default:
        content = (
          <li className="doc-menu__item doc-menu__item--divider" role="menuitem">
          </li>
        )
    }

    return content
  }

  render() {
    const { label, title, type, checked } = this.props
    let props = {
      className: 'doc-menu__action',
      onPress: this.handlePress,
      onChange: this.handleChange,
      checked,
      label
    }

    if (title.length) {
      props.title = title
    }

    return this.renderItem(type, props)
  }
}

MenuItem.propTypes = propTypes
MenuItem.defaultProps = defaultProps

export default MenuItem
