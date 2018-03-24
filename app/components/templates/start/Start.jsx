import React from 'react'
import Organisms from './../../organisms'
import PropTypes from 'prop-types'
import './styles.scss'

const propTypes = {
  activePageId: PropTypes.string,
  headerItems: PropTypes.array.isRequired,
  navigationItems: PropTypes.array.isRequired,
  navOpen: PropTypes.bool,
  onCloseNav: PropTypes.func,
  onPressMainButton: PropTypes.func,
  onPressNav: PropTypes.func
}
const defaultTypes = {
  navOpen: false,
  activePageId: '',
  onPressMainButton: () => {},
  onCloseNav: () => {},
  onPressNav: () => {}
}

class Start extends React.Component {
  handleCloseNav(event) {
    this.props.onCloseNav(event)
  }

  handlePressNav(event, id) {
    this.props.onPressNav(event, id)
  }

  render() {
    const { activePageId, onPressMainButton, navOpen, headerItems, navigationItems } = this.props

    return (
      <div className="doc-layout">
        <div className="doc-layout__body">
          <header className="doc-layout__header">
            <Organisms.Header items={headerItems} onPressMainButton={(event) => onPressMainButton(event)} title="Title" version="1.0.0" />
          </header>
          <main className="doc-layout__main">
            <Organisms.Main />
          </main>
          <footer className="doc-layout__footer">
            <Organisms.Footer />
          </footer>
        </div>
        <aside className="doc-layout__nav">
          <Organisms.Drawer
            items={navigationItems}
            activeItemId={activePageId}
            onClose={this.handleCloseNav.bind(this)}
            onPress={this.handlePressNav.bind(this)}
            open={navOpen} />
        </aside>
      </div>
    )
  }
}

Start.propTypes = propTypes
Start.defaultTypes = defaultTypes

export default Start
