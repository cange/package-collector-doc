import './styles'
import React from 'react'
import PropTypes from 'prop-types'
import { Header } from './header'
import { Footer } from './footer'
import { Main } from './main'
import { Nav } from './nav'

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.handleHeaderMenuClick = this.handleHeaderMenuClick.bind(this)
    this.state = {
      isNavOpen: true
    }
  }

  handleHeaderMenuClick(event) {
    this.setState({ isNavOpen: !this.state.isNavOpen })
  }

  render() {
    const data = {
      navItems: [
        { title: 'Atoms', icon: 'inbox' },
        { title: 'Molecules', icon: 'inbox' },
        { title: 'Organisms', icon: 'inbox' },
        { title: 'Templates', icon: 'inbox' }
      ]
    }

    return (
      <div className="doc-layout">
        <header className="doc-layout__header">
          <Header title="Title" logo="Logo name" version="1.0.0" onMenuClick={this.handleHeaderMenuClick} />
        </header>
        <div className="doc-layout__body">
          <main className="doc-layout__main">
            <Main />
          </main>
          <aside className="doc-layout__nav">
            <Nav open={this.state.isNavOpen} items={data.navItems} />
          </aside>
        </div>
        <footer className="doc-layout__footer">
          <Footer />
        </footer>
      </div>
    )
  }
}
