import actions, { types } from './actions'

describe('actions', () => {
  describe('.navToggle()', () => {
    it('creates an action to update the navigation state', () => {
      const expectedAction = {
        type: types.NAV_TOGGLE
      }
      expect(actions.navToggle()).toEqual(expectedAction)
    })
  })

  describe('.updateActiveItem()', () => {
    it('creates an action to update the navigation id', () => {
      const id = '<identifier>'
      const expectedAction = {
        type: types.NAV_ACTIVE_ITEM,
        id
      }
      expect(actions.updateActiveItem(id)).toEqual(expectedAction)
    })
  })
})
