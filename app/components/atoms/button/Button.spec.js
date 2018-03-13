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

  it('renders minimal markup', () => {
    expect(wrapper.prop('title')).toBe(undefined)
    expect(wrapper.prop('disabled')).toBe(undefined)
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

  describe('when a "title" attribute is given', () => {
    beforeEach(() => {
      wrapper = shallow(<Button title="A button"></Button>)
    })

    it('renders button with title attribute', () => {
      expect(wrapper.find('button').prop('title')).toBe('A button')
    })
  })

  describe('when given "disabled" attribute is "true"', () => {
    beforeEach(() => {
      wrapper = shallow(<Button disabled={true}></Button>)
    })

    it('renders button with disabled attribute', () => {
      expect(wrapper.find('button').prop('disabled')).toBeTruthy()
    })
  })

  describe('when button has been clicked', () => {
    const onPressMock = jest.fn()

    beforeEach(() => {
      wrapper = mount(<Button onPress={onPressMock} />)
      wrapper.simulate('click')
    })

    it('bubbles onPress event', () => {
      expect(onPressMock).toHaveBeenCalled()
    })
  })
})
