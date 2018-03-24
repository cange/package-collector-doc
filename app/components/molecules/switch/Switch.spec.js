import { mount, shallow } from 'enzymeSetup'
import Switch from './Switch'
import React from 'react'

describe('<Switch />', () => {
  let wrapper
  const minimalProps = {
    label: 'Display label'
  }

  beforeEach(() => {
    wrapper = shallow(<Switch {...minimalProps} />)
  })

  it('renders minimal markup', () => {
    expect(wrapper.prop('title')).toBe(undefined)
    expect(wrapper.prop('disabled')).toBe(undefined)
  })
  it('renders the label as display label', () => {
    expect(wrapper.find('label').text()).toBe('Display label')
  })

  describe('when "className" is given', () => {
    beforeEach(() => {
      wrapper = shallow(<Switch className="additional-class" {...minimalProps} />)
    })

    it('renders the default className and the given one', () => {
      expect(wrapper.find('label').prop('className')).toBe('doc-input-switch additional-class')
    })
  })

  describe('when "checked" is given', () => {
    beforeEach(() => {
      wrapper = shallow(<Switch checked {...minimalProps} />)
    })

    it('renders a checked attribute', () => {
      expect(wrapper.find('input').props().checked).toBeTruthy()
    })

    describe('negative state', () => {
      beforeEach(() => {
        wrapper = shallow(<Switch checked={false} {...minimalProps} />)
      })

      it('does not render a checked attribute', () => {
        expect(wrapper.find('input').props().checked).toBeFalsy()
      })
    })
  })

  describe('when given "disabled" attribute is "true"', () => {
    beforeEach(() => {
      wrapper = shallow(<Switch disabled={true} {...minimalProps} />)
    })

    it('renders button with disabled attribute', () => {
      expect(wrapper.find('input').prop('disabled')).toBeTruthy()
    })
  })

  describe('when a "title" attribute is given', () => {
    beforeEach(() => {
      wrapper = shallow(<Switch title="A switch" {...minimalProps} />)
    })

    it('renders button with title attribute', () => {
      expect(wrapper.find('label').prop('title')).toBe('A switch')
    })
  })

  describe('when input has been changed', () => {
    const onChangeMock = jest.fn()

    beforeEach(() => {
      wrapper = mount(<Switch onChange={onChangeMock} {...minimalProps} />)
      wrapper.find('input').simulate('change')
    })

    it('bubbles onChange event', () => {
      expect(onChangeMock).toBeCalled()
    })
  })
})
