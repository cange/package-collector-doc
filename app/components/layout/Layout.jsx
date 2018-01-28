import './styles.scss'
import React from 'react'
import classNames from 'classnames'
import { Header } from './header'
import { Footer } from './footer'
import { Main } from './main'
import { Nav } from './nav'

const headerMenuItems = [
  {
    name: 'page-theme-inverted',
    label: 'Inverted Page Theme',
    activated: false,
    onChange: (event) => {
      console.log('Theme:target', event.target)
    }
  }, {
    name: 'doc-page-theme-contrast-dark',
    label: 'Contrast in Examples',
    activated: true,
    onChange: (event) => {
      console.log('Contrast:target', event.target)
    }
  }, {
    name: 'doc-show-example-grid',
    label: 'Grid in Examples',
    activated: false,
    onChange: (event) => {
      console.log('Example:target', event.target)
    }
  }
]

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
          <Header title="Title" version="1.0.0" onMenuClick={this.handleHeaderMenuClick} menuItems={headerMenuItems} />
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
