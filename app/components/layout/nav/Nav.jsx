import './styles.scss'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Icon } from './../../essentials'

const ListItem = (props) => {
  return (
    <dt className="doc-nav__item">
      <a className="doc-nav__action" href="#">
        <div className="doc-nav__icon">
          <Icon name={props.icon} />
        </div>
        <div className="doc-nav__title">
          {props.title}
        </div>
      </a>
    </dt>
  )
}

ListItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

const propTypes = {
  icon: PropTypes.string,
  items: PropTypes.array,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string
}
const propDefaults = {
  items: {},
  onClose: () => {},
  open: false
}

class Nav extends React.Component {
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
    const listItems = this.props.items.map((item, index) => (<ListItem key={index} {...item} />))
    const wrapperClasses = classNames(
      'doc-nav',
      { 'is-open': this.state.isOpen }
    )

    return (
      <div className={wrapperClasses} ref={(ref) => { this.wrapper = ref }}>
        <div className="doc-nav__drawer">
          <dl className="doc-nav__list">
            {listItems}
          </dl>
        </div>
      </div>
    )
  }
}

Nav.propTypes = propTypes
Nav.propDefaults = propDefaults

export default Nav
