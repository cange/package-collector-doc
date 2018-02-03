import React from 'react'
import PropTypes from 'prop-types'
import { OverflowMenu } from './../overflowMenu'
import { Button, Icon } from './../../essentials'
import logoPath from './../../../assets/logo.svg'
import './styles.scss'

const propTypes = {
  onMenuClick: PropTypes.func,
  title: PropTypes.string,
  version: PropTypes.string,
  menuItems: PropTypes.array
}

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }

  handleMenuClick(event) {
    this.props.onMenuClick(event)
  }

  render() {
    const { title, version, menuItems } = this.props

    return (
      <div className="doc-toolbar js-doc-sticky-header" role="banner">
        <div className="doc-toolbar__outer">
          <div className="doc-toolbar__column">
            <Button className="doc-button--icon" onClick={this.handleMenuClick}>
              <Icon name="menu-handle" />
            </Button>
          </div>
          <div className="doc-toolbar__column">
            <div className="doc-toolbar__inner">
              <a className="doc-toolbar__logo" href="#">
                <img alt="" src={logoPath} />
              </a>
              <strong className="doc-toolbar__title">{title}</strong>
              <small className="doc-toolbar__version">{version}</small>
            </div>
          </div>
          <div className="doc-toolbar__column">
            <div className="doc-toolbar__menu">
              <OverflowMenu items={menuItems} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Header.propTypes = propTypes

export default Header
