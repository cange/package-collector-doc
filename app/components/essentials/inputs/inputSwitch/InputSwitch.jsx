import './styles.scss'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  activated: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func
}
const defaultProps = {
  className: '',
  activated: false,
  onChange: () => {}
}

class InputSwitch extends React.Component {
  constructor(props) {
    super(props)
    this.state = { checked: props.activated }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log('event.target.checked', event.target.checked)
    this.setState({ checked: event.target.checked })
    this.props.onChange(event)
  }

  render() {
    const { label, name, className } = this.props
    const idName = `switch-${Number(String(Math.random() * Date.now()).replace(/\./, ''))}`
    const props = {
      htmlFor: idName,
      className: classNames('doc-input-switch', className)
    }
    const inputProps = {
      checked: this.state.checked,
      className: 'doc-input-switch__input',
      id: idName,
      name,
      onChange: this.handleChange,
      type: 'checkbox'
    }

    return (
      <label {...props}>
        <input {...inputProps} />
        {label}
        <span className="doc-input-switch__bar">
          <span className="doc-input-switch__dot"></span>
        </span>
      </label>
    )
  }
}

InputSwitch.propTypes = propTypes
InputSwitch.defaultProps = defaultProps

export default InputSwitch
