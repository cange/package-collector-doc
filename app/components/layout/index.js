import './main.scss'

export default class Layout {
  constructor() {
    this.propsDefault = {
      nav: 'nav',
      footer: 'footer',
      header: 'header',
      main: 'main'
    }
  }

  render(props = {}) {
    props = Object.assign({}, this.propsDefault, props)

    return `
    <div class="doc-layout">
      <header class="doc-layout__header">${props.header}</header>
      <div class="doc-layout__body">
        <main class="doc-layout__main">${props.main}</main>
        <nav class="doc-layout__nav">${props.nav}</nav>
      </div>
      <footer class="doc-layout__footer">${props.footer}</footer>
    </div>
    `
  }
}
