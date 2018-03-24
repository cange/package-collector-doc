import { types } from './actions'
import reducer, { initialState } from './reducer'

describe('reducer', () => {
  it('provides the initial state', () => {
    expect(reducer(undefined, {})).toBe(initialState)
  })

  it('handles NAV_TOGGLE action', () => {
    expect(reducer(undefined, { type: types.NAV_TOGGLE })).toEqual(expect.objectContaining({ navOpen: false }))
  })

  it('handles continuation NAV_TOGGLE action', () => {
    const state = { navOpen: false }

    expect(reducer(state, { type: types.NAV_TOGGLE })).toEqual(expect.objectContaining({ navOpen: true }))
  })

  it('handles NAV_ACTIVE_ITEM action', () => {
    expect(reducer(undefined, { type: types.NAV_ACTIVE_ITEM, id: '<identifier>' })).toEqual(expect.objectContaining({ activePageId: '<identifier>' }))
  })
})
