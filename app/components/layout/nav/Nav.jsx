import './styles'
import { Icon } from './../../icon'

export default () => (
  <div className="doc-nav nav-nav--drawer">
    <dl className="doc-nav__list">
      <dt className="doc-nav__list-item">
        <a className="doc-nav__link">
          <Icon name="inbox" />
          Inbox
        </a>
      </dt>
    </dl>
  </div>
)
