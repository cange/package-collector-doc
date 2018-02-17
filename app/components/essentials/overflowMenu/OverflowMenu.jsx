import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Menu } from './../menus'
import Icon from './../icon'
import Button from './../button'
import './styles.scss'

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  /** Handler to be called when the user taps/clicks the menu button */
  onPress: PropTypes.func,
  title: PropTypes.string
}
const defaultProps = {
  onPress: () => {},
  title: 'Tools'
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
    const { children, title } = this.props
    const wrapperClassName = classNames(
      'doc-overflow-menu',
      { 'is-open': this.state.isOpen }
    )

    return (
      <nav className={wrapperClassName} ref={(ref) => { this.wrapper = ref }}>
        <Button className="doc-button--icon doc-overflow-menu__toggle foo" title={title} onPress={this.handlePress}>
          <Icon name="more-vert-handle" />
        </Button>
        <div className="doc-overflow-menu__container">
          <Menu>
            {children}
          </Menu>
        </div>
      </nav>
    )
  }
}

OverflowMenu.propTypes = propTypes
OverflowMenu.defaultProps = defaultProps

export default OverflowMenu
