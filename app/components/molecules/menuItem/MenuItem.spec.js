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

  describe('when item type "command" is given', () => {
    const onPressMock = jest.fn()

    beforeEach(() => {
      wrapper = mount(<MenuItem {...defaultProps} type="command" title="Tooltip title" onPress={onPressMock} />)
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
    it('bubbles onPress event', () => {
      wrapper.find('button').simulate('click')
      expect(onPressMock).toBeCalled()
    })
  })

  describe('when item type "checkbox" is given', () => {
    const onChangeMock = jest.fn()

    beforeEach(() => {
      wrapper = mount(<MenuItem {...defaultProps} type="checkbox" onChange={onChangeMock} />)
    })

    it('renders a checkbox element within the item', () => {
      expect(wrapper.find('[role="menuitem"]').find('Switch').exists()).toBeTruthy()
    })
    it('renders a label into the checkbox element', () => {
      expect(wrapper.find('Switch').text()).toBe('Display label')
    })
    it('bubbles onChange event', () => {
      wrapper.find('input').simulate('change')
      expect(onChangeMock).toBeCalled()
    })

    describe('when "checked" attribute is given', () => {
      beforeEach(() => {
        wrapper = mount(<MenuItem {...defaultProps} type="checkbox" checked />)
      })

      it('renders an checked checkbox item', () => {
        expect(wrapper.find('input[checked]').exists()).toBeTruthy()
      })
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
