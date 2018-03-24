import { createStore } from 'redux'
import reducer from './reducer'
import { toggleNav, updateActiveItem } from './actions'

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export {
  toggleNav,
  updateActiveItem
}
