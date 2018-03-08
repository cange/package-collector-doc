import './styles.scss'
import React from 'react'
import PropTypes from 'prop-types'
import Atoms from './../../atoms'

const navTypes = {
  ACTION: 'action',
  SUBHEADER: 'subheader'
}
const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    onPress: PropTypes.func,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf([navTypes.ACTION, navTypes.SUBHEADER])
  }))
}
const propDefaults = {
  items: []
}

class Nav extends React.Component {
  renderIcon(name) {
    return (
      <div className="doc-nav__icon">
        <Atoms.Icon name={name} />
      </div>
    )
  }

  renderItems(items) {
    return items.map((item, index) => {
      if (item.type === navTypes.SUBHEADER) {
        return (
          <dt key={index} className="doc-nav__subheader">
            {item.title}
          </dt>
        )
      } else {
        return (
          <dd key={index} className="doc-nav__item">
            <Atoms.Button className="doc-nav__action" onPress={(event) => item.onPress(event)} >
              {item.icon && this.renderIcon(item.icon)}
              <div className="doc-nav__title">
                {item.title}
              </div>
            </Atoms.Button>
          </dd>
        )
      }
    })
  }

  render() {
    return (
      <dl className="doc-nav" role="navigation">
        {this.renderItems(this.props.items)}
      </dl>
    )
  }
}

Nav.propTypes = propTypes
Nav.propDefaults = propDefaults

export default Nav
