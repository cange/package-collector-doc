import './styles'
import React from 'react'
import PropTypes from 'prop-types'

export default class Footer extends React.Component {
  render() {

    return (
      <div className="doc-footer">
        <div className="doc-footer__claim">footer claim</div>
        <div className="doc-footer__copyright">footer copyright</div>
      </div>
    )
  }
}
