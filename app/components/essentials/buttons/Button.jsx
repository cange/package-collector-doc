import './styles.scss'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.onClick(event)
  }

  render() {
    const { children, className, type } = this.props
    const props = {
      className: classNames('doc-button', className),
      type,
      onClick: this.handleClick
    }

    return (
      <button {...props}>
        {children}
      </button>
    )
  }
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  type: 'button',
  className: '',
  onClick: () => {}
}

export default Button
