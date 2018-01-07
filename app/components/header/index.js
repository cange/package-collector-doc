import './main.scss'

export default class Layout {
  constructor() {
    this.propsDefault = {
      title: 'Title',
      version: 'Version',
      logo: 'logo'
    }
  }

  render(props = {}) {
    props = Object.assign({}, this.propsDefault, props)

    return `
    <div className="doc-toolbar js-doc-sticky-header" role="banner">
      <div className="doc-toolbar__outer">
        <div className="doc-toolbar__column">
          <button className="doc-toolbar__button" type="button">
            <svg id="main-menu-handle"/>
          </button>
        </div>
        <div className="doc-toolbar__column">
          <div className="doc-toolbar__inner">
            <a className="doc-toolbar__logo" href="#">
              <img alt="${props.logo}" src="#logo"/>
            </a>
            <strong className="doc-toolbar__title">${props.title}</strong>
            <small className="doc-toolbar__version">${props.version}</small>
          </div>
          <div className="doc-toolbar__column">
            <div className="doc-toolbar__menu">
              <nav className="overflow-menu" role="navigation">
                <button className="doc-toolbar__button doc-overflow-menu__button" type="button" title="Tools">
                  <svg id="overflow-menu-handle"/>
                </button>
                <ul className="menu__list#doc-tools-menu" role="menu">
                  <li className="menu__item" role="menuitem">
                    <div className="toggle-button">
                      <input id="doc-invert-toggle" type="checkbox" name="page-theme-inverted"/>
                      <label for="doc-invert-toggle">Use Inverted Page Theme></label>
                    </div>
                  </li>
                  <li className="menu__item" role="menuitem">
                     <div className="toggle-button">
                      <input id="doc-contrast-toggle" type="checkbox" name="doc-page-theme-contrast-dark"/>
                      <label for="doc-contrast-toggle">Increase Contrast in Examples</label>
                    </div>
                  </li>
                  <li className="menu__item" role="menuitem">
                     <div className="toggle-button">
                      <input id="doc-grid-toggle" type="checkbox" name="doc-show-example-grid"/>
                      <label for="doc-grid-toggle"> Show Grid in Examples</label>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
}
