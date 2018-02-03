import { mount, shallow } from 'enzymeSetup'
import InputSwitch from './InputSwitch'
import React from 'react'

describe('<InputSwitch />', () => {
  let wrapper
  const minimalProps = {
    name: 'input-name',
    label: 'Display label'
  }

  beforeEach(() => {
    wrapper = shallow(<InputSwitch {...minimalProps} />)
  })

  it('renders minimal markup', () => {
    expect(wrapper.prop('title')).toBe(undefined)
    expect(wrapper.prop('disabled')).toBe(undefined)
  })
  it('renders the given name as input property', () => {
    expect(wrapper.find('input').prop('name')).toBe('input-name')
  })
  it('renders the label as display label', () => {
    expect(wrapper.find('label').text()).toBe('Display label')
  })

  describe('when "className" is given', () => {
    beforeEach(() => {
      wrapper = shallow(<InputSwitch className="additional-class" {...minimalProps} />)
    })

    it('renders the default className and the given one', () => {
      expect(wrapper.find('label').prop('className')).toBe('doc-input-switch additional-class')
    })
  })

  describe('when "on" is given', () => {
    beforeEach(() => {
      wrapper = shallow(<InputSwitch on={true} {...minimalProps} />)
    })

    it('renders a checked attribute', () => {
      expect(wrapper.find('input').prop('checked')).toBeTruthy()
    })

    describe('negative state', () => {
      beforeEach(() => {
        wrapper = shallow(<InputSwitch on={false} {...minimalProps} />)
      })

      it('does not render a checked attribute', () => {
        expect(wrapper.find('input').prop('checked')).toBeFalsy()
      })
    })
  })

  describe('when given "disabled" attribute is "true"', () => {
    beforeEach(() => {
      wrapper = shallow(<InputSwitch disabled={true} {...minimalProps} />)
    })

    it('renders button with disabled attribute', () => {
      expect(wrapper.find('input').prop('disabled')).toBeTruthy()
    })
  })

  describe('when a "title" attribute is given', () => {
    beforeEach(() => {
      wrapper = shallow(<InputSwitch title="A switch" {...minimalProps} />)
    })

    it('renders button with title attribute', () => {
      expect(wrapper.find('label').prop('title')).toBe('A switch')
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
