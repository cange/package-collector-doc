import { mount, shallow } from 'enzymeSetup'
import Button from './Button'
import React from 'react'

describe('<Button />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Button />)
  })

  it('renders button as "button" type', () => {
    expect(wrapper.prop('type')).toBe('button')
  })

  describe('when a button type is given', () => {
    beforeEach(() => {
      wrapper = shallow(<Button type="submit" />)
    })

    it('renders button with given type', () => {
      expect(wrapper.prop('type')).toBe('submit')
    })
  })

  describe('when no child element exists', () => {
    it('does render any content', () => {
      expect(wrapper.children()).toHaveLength(0)
    })
  })

  describe('when a child element is given', () => {
    beforeEach(() => {
      wrapper = shallow(<Button><div>child element</div></Button>)
    })

    it('renders child element', () => {
      expect(wrapper.children()).toHaveLength(1)
    })
  })

  describe('when button has been clicked', () => {
    const onClickMock = jest.fn()

    beforeEach(() => {
      wrapper = mount(<Button onClick={onClickMock} />)
      wrapper.simulate('click')
    })

    it('bubbles onClick event', () => {
      expect(onClickMock).toHaveBeenCalled()
    })
  })
})
