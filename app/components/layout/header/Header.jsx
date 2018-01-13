import './styles'
import React from 'react'
import PropTypes from 'prop-types'
import { IconButton } from './../../buttons'
import logoPath from './../../../assets/logo.svg'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }

  handleMenuClick(event) {
    this.props.onMenuClick(event)
  }

  render() {
    const { title, version } = this.props

    return (
      <div className="doc-toolbar js-doc-sticky-header" role="banner">
        <div className="doc-toolbar__outer">
          <div className="doc-toolbar__column">
            <IconButton name="menu-handle" onClick={this.handleMenuClick} />
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
              <nav className="overflow-menu" role="navigation">
                <IconButton name="more-vert-handle" onClick={() => { }} />
                <ul className="menu__list#doc-tools-menu" role="menu" hidden>
                  <li className="menu__item" role="menuitem">
                    <div className="toggle-button">
                      <input id="doc-invert-toggle" type="checkbox" name="page-theme-inverted"/>
                      <label htmlFor="doc-invert-toggle">Use Inverted Page Theme></label>
                    </div>
                  </li>
                  <li className="menu__item" role="menuitem">
                    <div className="toggle-button">
                      <input id="doc-contrast-toggle" type="checkbox" name="doc-page-theme-contrast-dark"/>
                      <label htmlFor="doc-contrast-toggle">Increase Contrast in Examples</label>
                    </div>
                  </li>
                  <li className="menu__item" role="menuitem">
                    <div className="toggle-button">
                      <input id="doc-grid-toggle" type="checkbox" name="doc-show-example-grid"/>
                      <label htmlFor="doc-grid-toggle"> Show Grid in Examples</label>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  onMenuClick: PropTypes.func,
  title: PropTypes.string,
  version: PropTypes.string
}

Header.propDefaults = {
  title: 'Title',
  version: 'Version'
}
