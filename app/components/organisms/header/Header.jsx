import React from 'react'
import PropTypes from 'prop-types'
import Atoms from './../../atoms'
import Molecules from './../../molecules'
import logoPath from './../../../assets/logo.svg'
import './styles.scss'

const propTypes = {
  items: PropTypes.array,
  onPressMainButton: PropTypes.func,
  title: PropTypes.string,
  version: PropTypes.string
}
const defaultProps = {
  onPressMainButton: () => {},
  title: 'Title',
  version: 'Version'
}

class Header extends React.Component {
  renderMenuItems(items) {
    return (
      <Molecules.OverflowMenu>
        {items.map((item, index) => (<Molecules.MenuItem key={index} {...item} />))}
      </Molecules.OverflowMenu>
    )
  }

  render() {
    const { title, version, items } = this.props

    return (
      <div className="doc-toolbar js-doc-sticky-header" role="banner">
        <div className="doc-toolbar__outer">
          <div className="doc-toolbar__column">
            <Atoms.Button className="doc-button--icon" onPress={(event) => this.props.onPressMainButton(event)}>
              <Atoms.Icon name="menu-handle" />
            </Atoms.Button>
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
              {this.renderMenuItems(items)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header
