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
  /** Name of the input value */
  name: PropTypes.string.isRequired,
  /** If true, the switch is on, otherwise is off */
  on: PropTypes.bool,
  onChange: PropTypes.func,
  /** Text to display for blindness accessibility features */
  title: PropTypes.string
}
const defaultProps = {
  className: '',
  disabled: false,
  label: '',
  on: false,
  onChange: () => {},
  title: ''
}

/** On/off switches toggle the state of a single settings option. */
class InputSwitch extends React.Component {
  constructor(props) {
    super(props)
    this.state = { on: props.on }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ on: event.target.checked })
    this.props.onChange(event)
  }

  render() {
    const { label, name, className, disabled, title } = this.props
    const idName = `switch-${Number(String(Math.random() * Date.now()).replace(/\./, ''))}`
    let labelProps = {
      htmlFor: idName,
      className: classNames('doc-input-switch', className)
    }
    let inputProps = {
      checked: this.state.on,
      className: 'doc-input-switch__input',
      id: idName,
      name,
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

InputSwitch.propTypes = propTypes
InputSwitch.defaultProps = defaultProps

export default InputSwitch
