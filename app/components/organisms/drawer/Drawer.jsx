import './styles.scss'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Molecules from './../../molecules'

const propTypes = {
  /** Identifier of the current active item */
  activeItemId: PropTypes.string,
  items: PropTypes.array,
  onClose: PropTypes.func,
  onPress: PropTypes.func,
  open: PropTypes.bool
}
const propDefaults = {
  activeItemId: '',
  items: {},
  onClose: () => {},
  onPress: () => {},
  open: false
}
/** The navigation drawer slides in from the left and contains the navigation destinations for your app */
class Drawer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.open
    }
    this.handlePressOutside = this.handlePressOutside.bind(this)
  }

  componentWillReceiveProps(props) {
    this.setState({ isOpen: props.open })
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
    if (!this.wrapper.contains(event.target) && this.state.isOpen) {
      this.setState({ isOpen: false })
      this.props.onClose()
    }
  }

  handleListPress(event, id) {
    this.props.onPress(event, id)
  }

  render() {
    const wrapperClasses = classNames(
      'doc-drawer doc-drawer--temporary',
      { 'is-open': this.state.isOpen }
    )

    return (
      <div className={wrapperClasses} ref={(ref) => { this.wrapper = ref }}>
        <div className="doc-drawer__container">
          <Molecules.List
            activeItemId={this.props.activeItemId}
            items={this.props.items}
            onPress={this.handleListPress.bind(this)} />
        </div>
      </div>
    )
  }
}

Drawer.propTypes = propTypes
Drawer.propDefaults = propDefaults

export default Drawer
