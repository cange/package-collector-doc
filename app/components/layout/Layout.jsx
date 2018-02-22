import './styles.scss'
import React from 'react'
import classNames from 'classnames'
import { Header } from './header'
import { Footer } from './footer'
import { Main } from './main'
import { Nav } from './nav'

const headerMenuItems = [
  {
    type: 'checkbox',
    checked: false,
    label: 'Inverted Page Theme',
    onChange: (event) => {
      console.log('Theme:target', event.target)
    }
  }, {
    type: 'divider'
  }, {
    type: 'command',
    label: 'Simple item',
    onPress: (event) => {
      console.log('Theme:target', event.target)
    }
  }, {
    type: 'divider'
  }, {
    type: 'checkbox',
    checked: true,
    label: 'Contrast in Examples',
    onChange: (event) => {
      console.log('Contrast:target', event.target)
    }
  }, {
    type: 'checkbox',
    checked: false,
    label: 'Grid in Examples',
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
          <Header title="Title" version="1.0.0" onMenuClick={this.handleHeaderMenuClick} menuItems={headerMenuItems} />
        </header>
        <div className="doc-layout__body">
          <main className="doc-layout__main">
            <Main />
          </main>
          <aside className={navClasses}>
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
