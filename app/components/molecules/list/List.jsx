import './styles.scss'
import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Atoms from './../../atoms'

const navTypes = {
  ACTION: 'action',
  SUBHEADER: 'subheader'
}
const propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    active: PropTypes.bool,
    icon: PropTypes.string,
    onPress: PropTypes.func,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf([navTypes.ACTION, navTypes.SUBHEADER])
  }))
}
/**
 * Lists present multiple line items vertically as a single continuous element.
 * @link https://material.io/guidelines/components/lists.html
 */
class List extends React.Component {
  renderIcon(name) {
    return (
      <div className="doc-list__icon">
        <Atoms.Icon name={name} />
      </div>
    )
  }

  renderActionLine(item) {
    const className = classNames(
      'doc-list__action', {
        'is-active': (item.active && item.active === true)
      }
    )
    return (
      <Atoms.Button className={className} onPress={(event) => item.onPress(event)} >
        {item.icon && this.renderIcon(item.icon)}
        <div className="doc-list__title">
          {item.title}
        </div>
      </Atoms.Button>
    )
  }

  renderItems(items) {
    return items.map((item, index) => {
      if (item.type === navTypes.SUBHEADER) {
        return (
          <dt key={index} className="doc-list__item doc-list__item--subheader">
            {item.title}
          </dt>
        )
      } else {
        return (
          <dd key={index} className="doc-list__item">
            {this.renderActionLine(item)}
          </dd>
        )
      }
    })
  }

  render() {
    return (
      <dl className="doc-list" role="navigation">
        {this.renderItems(this.props.items)}
      </dl>
    )
  }
}

List.propTypes = propTypes

export default List
