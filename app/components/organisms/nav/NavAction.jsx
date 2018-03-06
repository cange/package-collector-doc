import React from 'react'
import PropTypes from 'prop-types'
import Atoms from './../../atoms'

const propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

class NavAction extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  renderIcon(name) {
    return (
      <div className="doc-nav__icon">
        <Atoms.Icon name={name} />
      </div>
    )
  }

  handleClick(event) {
    event.preventDefault()
    this.props.onPress()
  }

  render() {
    const { title, icon } = this.props

    return (
      <dd className="doc-nav__item">
        <Atoms.Button className="doc-nav__action" onClick={this.handleClick} >
          {icon && this.renderIcon(icon)}
          <div className="doc-nav__title">
            {title}
          </div>
        </Atoms.Button>
      </dd>
    )
  }
}

NavAction.propTypes = propTypes

export default NavAction
