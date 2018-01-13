import './styles'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Icon } from './../../icon'

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

export default class Nav extends React.Component {
  render() {
    const items = [
      { title: 'Atoms', icon: 'inbox' },
      { title: 'Molecules', icon: 'inbox' },
      { title: 'Organisms', icon: 'inbox' },
      { title: 'Templates', icon: 'inbox' }
    ]
    const listItems = items.map((item) => (<ListItem key={item.name} {...item} />))
    const wrapperClasses = classNames(
      'doc-nav',
      { 'is-open': this.props.open }
    )

    return (
      <div className={wrapperClasses}>
        <div className="doc-nav__drawer">
          <dl className="doc-nav__list">
            {listItems}
          </dl>
        </div>
      </div>
    )
  }
}

Nav.propTypes = {
  open: PropTypes.bool
}

Nav.propDefaults = {
  open: true
}
