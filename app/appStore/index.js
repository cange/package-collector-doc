import { createStore } from 'redux'
import reducer from './reducer'
import { navToggle, updateActiveItem } from './actions'

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export {
  navToggle,
  updateActiveItem
}
