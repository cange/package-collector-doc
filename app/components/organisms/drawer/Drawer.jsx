import './styles.scss'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Molecules from './../../molecules'

const propTypes = {
  items: PropTypes.array,
  onClose: PropTypes.func,
  open: PropTypes.bool
}
const propDefaults = {
  items: {},
  onClose: () => {},
  open: false
}

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

  render() {
    const wrapperClasses = classNames(
      'doc-drawer doc-drawer--temporary',
      { 'is-open': this.state.isOpen }
    )

    return (
      <div className={wrapperClasses} ref={(ref) => { this.wrapper = ref }}>
        <div className="doc-drawer__container">
          <Molecules.Nav items={this.props.items} />
        </div>
      </div>
    )
  }
}

Drawer.propTypes = propTypes
Drawer.propDefaults = propDefaults

export default Drawer
