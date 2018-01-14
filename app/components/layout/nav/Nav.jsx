import './styles'
import React from 'react'
import { Icon } from './../../icons'

export default class Nav extends React.Component {
  render() {
    return (
      <div className="doc-nav nav-nav--drawer">
        <dl className="doc-nav__list">
          <dt className="doc-nav__list-item">
            <Icon name="inbox" />
            Inbox
          </dt>
        </dl>
      </div>
    )
  }
}
