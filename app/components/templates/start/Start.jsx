import React from 'react'
import Organisms from './../../organisms'
import PropTypes from 'prop-types'
import './styles.scss'

const propTypes = {
  headerItems: PropTypes.array.isRequired,
  navigationItems: PropTypes.array.isRequired
}

class Start extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isNavOpen: false
    }
  }

  render() {
    return (
      <div className="doc-layout">
        <div className="doc-layout__body">
          <header className="doc-layout__header">
            <Organisms.Header
              items={this.props.headerItems}
              onPressMainButton={() => this.setState({ isNavOpen: !this.state.isNavOpen })}
              title="Title"
              version="1.0.0"
            />
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
            items={this.props.navigationItems}
            onClose={() => this.setState({ isNavOpen: !this.state.isNavOpen })}
            open={this.state.isNavOpen}
          />
        </aside>
      </div>
    )
  }
}

Start.propTypes = propTypes

export default Start
