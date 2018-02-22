import './styles.scss'
import React from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { Main } from './main'
import { Nav } from './nav'
import headerMenuItems from './headerMenuItems'
import sidebarItems from './sidebarItems'

export default class Layout extends React.Component {
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
            <Header title="Title" version="1.0.0" onPressMainButton={() => this.setState({ isNavOpen: !this.state.isNavOpen })} menuItems={headerMenuItems} />
          </header>
          <main className="doc-layout__main">
            <Main />
          </main>
          <footer className="doc-layout__footer">
            <Footer />
          </footer>
        </div>
        <aside className="doc-layout__nav">
          <Nav
            items={sidebarItems}
            open={this.state.isNavOpen}
            onClose={() => this.setState({ isNavOpen: !this.state.isNavOpen })} />
        </aside>
      </div>
    )
  }
}
