import './styles.scss'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  /** Class to add additional styles */
  className: PropTypes.string,
  /** If true, disable all interactions for this component */
  disabled: PropTypes.bool,
  /** Text to display next to the switch */
  label: PropTypes.string,
  /** The value of the switch. If true the switch will be turned on. */
  value: PropTypes.bool,
  /** The change event is fired when a change to the element's value is committed by the user. */
  onChange: PropTypes.func,
  /** Text to display for blindness accessibility features */
  title: PropTypes.string
}
const defaultProps = {
  className: '',
  disabled: false,
  label: '',
  value: false,
  onChange: () => {},
  title: ''
}

/** On/off switches toggle the state of a single settings option. */
class Switch extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activated: props.value }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ activated: event.target.checked })
    this.props.onChange(event)
  }

  render() {
    const { label, className, disabled, title } = this.props
    const idName = `switch-${Number(String(Math.random() * Date.now()).replace(/\./, ''))}`
    let labelProps = {
      htmlFor: idName,
      className: classNames('doc-input-switch', className)
    }
    let inputProps = {
      checked: this.state.activated,
      className: 'doc-input-switch__input',
      id: idName,
      onChange: this.handleChange,
      type: 'checkbox'
    }

    if (title.length) {
      labelProps = { ...labelProps, title }
    }

    if (disabled) {
      inputProps = { ...inputProps, disabled }
    }

    return (
      <label {...labelProps}>
        <input {...inputProps} />
        {label}
        <span className="doc-input-switch__track">
          <span className="doc-input-switch__thumb"></span>
        </span>
      </label>
    )
  }
}

Switch.propTypes = propTypes
Switch.defaultProps = defaultProps

export default Switch
