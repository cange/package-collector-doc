import { mount, shallow } from 'enzymeSetup'
import MenuItem from './MenuItem'
import React from 'react'

describe('<MenuItem />', () => {
  let wrapper
  const defaultProps = {
    label: 'Display label'
  }

  beforeEach(() => {
    wrapper = mount(<MenuItem {...defaultProps} />)
  })

  it('renders a button as default element', () => {
    expect(wrapper.find('Button').exists()).toBeTruthy()
  })
  it('renders minimal markup', () => {
    expect(wrapper.find('button[title]').exists()).toBeFalsy()
    expect(wrapper.prop('disabled')).toBe(undefined)
  })

  describe('when item type "button" is given', () => {
    const onPressMock = jest.fn()

    beforeEach(() => {
      wrapper = mount(<MenuItem {...defaultProps} type="button" title="Tooltip title" onPress={onPressMock} />)
    })

    it('renders a button element within the item', () => {
      expect(wrapper.find('[role="menuitem"]').find('Button').exists()).toBeTruthy()
    })
    it('renders a label into the button', () => {
      expect(wrapper.find('Button').text()).toBe('Display label')
    })
    it('renders title onto button', () => {
      expect(wrapper.find('button').prop('title')).toBe('Tooltip title')
    })
    it('buttons onPress event', () => {
      wrapper.find('button').simulate('click')
      expect(onPressMock).toHaveBeenCalled()
    })
  })

  describe('when item type "switch" is given', () => {
    const onChangeMock = jest.fn()

    beforeEach(() => {
      wrapper = mount(<MenuItem {...defaultProps} type="switch" onPress={onChangeMock} />)
    })

    it('renders a switch element within the item', () => {
      expect(wrapper.find('[role="menuitem"]').find('Switch').exists()).toBeTruthy()
    })
    it('renders a label into the switch element', () => {
      expect(wrapper.find('Switch').text()).toBe('Display label')
    })
    it('transforms onPress as onChange event', () => {
      wrapper.find('input').simulate('change')
      expect(onChangeMock).toHaveBeenCalled()
    })
  })

  describe('when item type "divider" is given', () => {
    beforeEach(() => {
      wrapper = shallow(<MenuItem {...defaultProps} type="divider" />)
    })

    it('provides a special style class at the item markup', () => {
      expect(wrapper.find('[role="menuitem"]').props().className.includes('divider')).toBeTruthy()
    })
    it('renders empty item', () => {
      expect(wrapper.find('[role="menuitem"]').text()).toBe('')
    })
  })
})
