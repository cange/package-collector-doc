export const types = {
  NAV_TOGGLE: 'nav toggle',
  NAV_ACTIVE_ITEM: 'nav active item'
}

export const navToggle = () => ({ type: types.NAV_TOGGLE })
export const updateActiveItem = (id) => ({
  type: types.NAV_ACTIVE_ITEM,
  id
})
