import React from 'react'
import PropTypes from 'prop-types'
import Button from './../../button'
import { Switch } from './../../inputs'
import './styles.scss'

const menuTypes = {
  /* A button element is a user interface object that sends an action message to a target when clicked. */
  BUTTON: 'button',
  /* A switch element displays an ON/OFF button that can be toggled by the user. */
  SWITCH: 'switch',
  /* A divider element displays a separation between other menu items. */
  DIVIDER: 'divider'
}

/* TODO use definition and names for associated props types
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menuitem
 */

const propTypes = {
  /** Handler to be called when the user taps/clicks the button */
  onPress: PropTypes.func,
  /** Text to display inside the button */
  label: PropTypes.string,
  /** Text to display for blindness accessibility features */
  title: PropTypes.string,
  /** The type of the content. */
  type: PropTypes.oneOf([
    'button',
    'switch',
    'divider'
  ])
}
const defaultProps = {
  label: '',
  title: '',
  type: menuTypes.BUTTON,
  onPress: () => {}
}

class MenuItem extends React.Component {
  constructor(props) {
    super(props)
    this.handlePress = this.handlePress.bind(this)
  }

  handlePress(event) {
    this.props.onPress(event)
  }

  renderItem(type, props) {
    let content

    switch (type) {
      case menuTypes.BUTTON:
        content = (
          <li className="doc-menu__item" role="menuitem">
            <Button {...props}>{props.label}</Button>
          </li>
        )
        break
      case menuTypes.SWITCH:
        props.onChange = props.onPress
        delete props.onPress
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
    const { label, title, type } = this.props
    let props = {
      className: 'doc-menu__action',
      onPress: this.handlePress,
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
