import React from 'react'
import ReactDom from 'react-dom'
import headerItems from './data/headerItems'
import navigationItems from './data/navigationItems'
import './styles/base.scss'
import { Templates } from './components'
import { connect } from 'react-redux'
import store, { actions } from './appStore'

const mapStateToProps = state => (
  {
    navOpen: state.navOpen,
    activePageId: state.activePageId,
    navigationItems,
    headerItems
  }
)
const mapDispatchToProps = dispatch => ({
  onCloseNav: () => dispatch(actions.toggleNav()),
  onPressMainButton: () => dispatch(actions.toggleNav()),
  onPressNav: (_, id) => {
    dispatch(actions.updateActiveItem(id))
  }
})
const App = connect(mapStateToProps, mapDispatchToProps)(Templates.Start)

ReactDom.render(<App store={store} />, document.getElementById('mount'))
