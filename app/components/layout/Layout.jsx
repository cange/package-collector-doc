import './styles'
import React from 'react'
import PropTypes from 'prop-types'
import { Header } from './header'
import { Footer } from './footer'
import { Main } from './main'
import { Nav } from './nav'

export default class Layout extends React.Component {
  render() {
    return (
      <div className="doc-layout">
        <header className="doc-layout__header">
          <Header title="Title" logo="Logo name" version="1.0.0" />
        </header>
        <div className="doc-layout__body">
          <main className="doc-layout__main">
            <Main />
          </main>
          <nav className="doc-layout__nav">
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
