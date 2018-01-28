import { mount, shallow } from 'enzymeSetup'
import InputSwitch from './InputSwitch'
import React from 'react'

describe('<InputSwitch />', () => {
  let wrapper
  const minimalProps = {
    name: 'input-name',
    label: 'Display label'
  }

  describe('when minimal props setup is given', () => {
    beforeEach(() => {
      wrapper = shallow(<InputSwitch {...minimalProps} />)
    })

    it('renders the given name as input property', () => {
      expect(wrapper.find('input').prop('name')).toBe('input-name')
    })
    it('renders the label as display label', () => {
      expect(wrapper.find('label').text()).toBe('Display label')
    })
  })

  describe('when className is given', () => {
    beforeEach(() => {
      wrapper = shallow(<InputSwitch className="additional-class" {...minimalProps} />)
    })

    it('renders the default className and the given one', () => {
      expect(wrapper.find('label').prop('className')).toBe('doc-input-switch additional-class')
    })
  })

  describe('when activated is given', () => {
    beforeEach(() => {
      wrapper = shallow(<InputSwitch activated={true} {...minimalProps} />)
    })

    it('renders a checked attribute', () => {
      expect(wrapper.find('input').prop('checked')).toBeTruthy()
    })

    describe('negative state', () => {
      beforeEach(() => {
        wrapper = shallow(<InputSwitch activated={false} {...minimalProps} />)
      })

      it('does not render a checked attribute', () => {
        expect(wrapper.find('input').prop('checked')).toBeFalsy()
      })
    })
  })

  describe('when input has been changed', () => {
    const onChangeMock = jest.fn()

    beforeEach(() => {
      wrapper = mount(<InputSwitch onChange={onChangeMock} {...minimalProps} />)
      wrapper.find('input').simulate('change')
    })

    it('bubbles onChange event', () => {
      expect(onChangeMock).toHaveBeenCalled()
    })
  })
})
