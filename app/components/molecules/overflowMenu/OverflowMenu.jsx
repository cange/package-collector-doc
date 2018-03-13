import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Atoms from './../../atoms'
import './styles.scss'

const menuTypes = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical'
}

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  /** Handler to be called when the user taps/clicks the menu button. */
  onPress: PropTypes.func,
  /** Describes how the toggle button icon should looks like. */
  type: PropTypes.oneOf([menuTypes.VERTICAL, menuTypes.HORIZONTAL]),
  /** Text to display for blindness accessibility features */
  title: PropTypes.string
}
const defaultProps = {
  onPress: () => {},
  type: menuTypes.VERTICAL,
  title: ''
}

class OverflowMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.handlePress = this.handlePress.bind(this)
    this.handlePressOutside = this.handlePressOutside.bind(this)
  }

  componentDidMount() {
    document.addEventListener('touchend', this.handlePressOutside, true)
    document.addEventListener('click', this.handlePressOutside, true)
  }

  componentWillUnmount() {
    document.removeEventListener('touchend', this.handlePressOutside, true)
    document.removeEventListener('click', this.handlePressOutside, true)
  }

  handlePressOutside(event) {
    if (!this.wrapper.contains(event.target)) {
      this.setState({ isOpen: false })
    }
  }

  handlePress(event) {
    this.props.onPress(event)
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { children, title, type } = this.props
    const iconName = `more-${type.substr(0, 4)}-handle`
    const wrapperClassName = classNames(
      'doc-overflow-menu',
      { 'is-open': this.state.isOpen }
    )
    let props = {
      className: 'doc-button--icon doc-overflow-menu__toggle',
      onPress: this.handlePress
    }

    if (title.length) {
      props.title = title
    }

    return (
      <nav className={wrapperClassName} ref={(ref) => { this.wrapper = ref }}>
        <Atoms.Button {...props}>
          <Atoms.Icon name={iconName} />
        </Atoms.Button>
        <div className="doc-overflow-menu__container">
          <Atoms.Menu>
            {children}
          </Atoms.Menu>
        </div>
      </nav>
    )
  }
}

OverflowMenu.propTypes = propTypes
OverflowMenu.defaultProps = defaultProps

export default OverflowMenu
