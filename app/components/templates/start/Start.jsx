import React from 'react'
import Organisms from './../../organisms'
import headerMenuItems from './headerMenuItems'
import sidebarItems from './sidebarItems'
import './styles.scss'

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
              menuItems={headerMenuItems}
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
            items={sidebarItems}
            onClose={() => this.setState({ isNavOpen: !this.state.isNavOpen })}
            open={this.state.isNavOpen}
          />
        </aside>
      </div>
    )
  }
}

export default Start
