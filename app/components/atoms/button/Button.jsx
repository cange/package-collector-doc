import './styles.scss'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  /** Class to add additional styles */
  className: PropTypes.string,
  /** If true, disable all interactions for this component */
  disabled: PropTypes.bool,
  /** Text to display for blindness accessibility features */
  title: PropTypes.string,
  /** The [type values](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) of the button */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** Handler to be called when the user taps the button */
  onPress: PropTypes.func
}

const defaultProps = {
  type: 'button',
  className: '',
  title: '',
  disabled: false,
  onPress: () => {}
}

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.defaultClassName = 'doc-button'
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.onPress(event)
  }

  render() {
    const {
      children,
      className,
      disabled,
      title,
      type
    } = this.props
    let props = {
      className: classNames(this.defaultClassName, className),
      type,
      onClick: this.handleClick
    }

    if (title.length) {
      props.title = title
    }

    if (disabled) {
      props.disabled = disabled
    }

    return (
      <button {...props}>
        {children}
      </button>
    )
  }
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
