import './layout.scss'

export default class Layout {
  constructor() {
    this.defaults = {
      nav: 'nav',
      footer: 'footer',
      header: 'header',
      main: 'main'
    }
  }

  render(props = {}) {
    const sections = Object.assign({}, this.defaults, props)

    return `
    <div class="doc-layout">
      <header class="doc-layout__header">${sections.header}</header>
      <div class="doc-layout__body">
        <main class="doc-layout__main">${sections.main}</main>
        <nav class="doc-layout__nav">${sections.nav}</nav>
      </div>
      <footer class="doc-layout__footer">${sections.footer}</footer>
    </div>
    `
  }
}
