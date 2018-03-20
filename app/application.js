import React from 'react'
import ReactDom from 'react-dom'
import headerItems from './data/headerItems'
import navigationItems from './data/navigationItems'
import './styles/base.scss'
import { Templates } from './components'
import { connect } from 'react-redux'
import store, { navToggle, updateActiveItem } from './appStore'

const mapStateToProps = state => (
  {
    navOpen: state.navOpen,
    activePageId: state.activePageId,
    navigationItems,
    headerItems
  }
)
const mapDispatchToProps = dispatch => ({
  onCloseNav: () => dispatch(navToggle()),
  onPressMainButton: () => dispatch(navToggle()),
  onPressNav: (_, id) => {
    dispatch(updateActiveItem(id))
  }
})
const App = connect(mapStateToProps, mapDispatchToProps)(Templates.Start)

ReactDom.render(<App store={store} />, document.getElementById('mount'))
