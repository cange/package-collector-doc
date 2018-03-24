export const types = {
  NAV_TOGGLE: 'nav toggle',
  NAV_ACTIVE_ITEM: 'nav active item'
}

export default {
  toggleNav: () => ({
    type: types.NAV_TOGGLE
  }),
  updateActiveItem: (id) => ({
    type: types.NAV_ACTIVE_ITEM,
    id
  })
}
