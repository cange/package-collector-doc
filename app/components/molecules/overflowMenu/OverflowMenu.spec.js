import { mount } from 'enzymeSetup'
import OverflowMenu from './OverflowMenu'
import React from 'react'

describe('<OverflowMenu />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<OverflowMenu></OverflowMenu>)
  })

  it('renders toggle button with vertical icon as default', () => {
    expect(wrapper.find('Button').find('use').props().xlinkHref).toMatch(/#more-vert-handle$/)
  })

  it('does not render title attribute on toggle button', () => {
    expect(wrapper.find('button').prop('title')).toBeUndefined()
  })

  describe('when "horizontal" as type is given', () => {
    beforeEach(() => {
      wrapper = mount(<OverflowMenu type="horizontal"></OverflowMenu>)
    })

    it('renders toggle button with horzontal icon', () => {
      expect(wrapper.find('Button').find('use').props().xlinkHref).toMatch(/#more-hori-handle$/)
    })
  })

  describe('when "vertical" as type is given', () => {
    beforeEach(() => {
      wrapper = mount(<OverflowMenu type="vertical"></OverflowMenu>)
    })

    it('renders toggle button with horzontal icon', () => {
      expect(wrapper.find('Button').find('use').props().xlinkHref).toMatch(/#more-vert-handle$/)
    })
  })

  describe('when toggle button has been pressed', () => {
    beforeEach(() => {
      wrapper = mount(<OverflowMenu></OverflowMenu>)
    })

    it('does not render a state class name initially', () => {
      expect(wrapper.find('.is-open').exists()).toBeFalsy()
    })
    it('renders state class name', () => {
      wrapper.find('Button').simulate('click')
      expect(wrapper.find('nav.is-open').exists()).toBeTruthy()
    })
  })

  describe('when title is given', () => {
    beforeEach(() => {
      wrapper = mount(<OverflowMenu title="Tools"></OverflowMenu>)
    })

    it('renders item with the menu container', () => {
      expect(wrapper.find('button').prop('title')).toBe('Tools')
    })
  })

  describe('when children items given', () => {
    beforeEach(() => {
      wrapper = mount(<OverflowMenu><div>child</div></OverflowMenu>)
    })

    it('renders item with the menu container', () => {
      expect(wrapper.find('[role="menu"] div').html()).toBe('<div>child</div>')
    })
  })
})
