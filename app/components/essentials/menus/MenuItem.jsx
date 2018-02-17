import React from 'react'
import PropTypes from 'prop-types'
import Button from './../button'
import { Switch } from './../inputs'
import menuTypes from './types'
import './styles.scss'

const propTypes = {
  /** Handler to be called when the user taps/clicks the button */
  onPress: PropTypes.func,
  /** Text to display inside the button */
  label: PropTypes.string,
  /** Text to display for blindness accessibility features */
  title: PropTypes.string,
  /** Name of the switch value */
  name: PropTypes.string.isRequired,
  /** The type of the button. Possible values are */
  type: PropTypes.string
}
const defaultProps = {
  name: '',
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
          <li className="doc-menu__item doc-menu__item--action" role="menuitem">
            <Button {...props}>{props.label}</Button>
          </li>
        )
        break
      case menuTypes.SWITCH:
        props.onChange = props.onPress
        delete props.onPress
        content = (
          <li className="doc-menu__item doc-menu__item--action" role="menuitem">
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
      onPress: this.handlePress,
      label
    }
    console.log(type)

    if (title.length) {
      props.title = title
    }

    return this.renderItem(type, props)
  }
}

MenuItem.propTypes = propTypes
MenuItem.defaultProps = defaultProps

export default MenuItem
