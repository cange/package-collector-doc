import './styles'
import React from 'react'
import classNames from 'classnames'
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

  handleHeaderMenuClick() {
    this.setState({ isNavOpen: !this.state.isNavOpen })
  }

  render() {
    const navClasses = classNames(
      'doc-layout__nav',
      { 'is-open': this.state.isNavOpen }
    )

    return (
      <div className="doc-layout">
        <header className="doc-layout__header">
          <Header title="Title" logo="Logo name" version="1.0.0" onMenuClick={this.handleHeaderMenuClick} />
        </header>
        <div className="doc-layout__body">
          <main className="doc-layout__main">
            <Main />
          </main>
          <nav className={navClasses}>
            <Nav />
          </nav>
        </div>
        <footer className="doc-layout__footer">
          <Footer />
        </footer>
      </div>
    )
  }
}
