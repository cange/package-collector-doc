import { mount } from 'enzymeSetup'
import Menu from './Menu'
import React from 'react'

describe('<Menu />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Menu><div>hello</div></Menu>)
  })

  it('renders a list', () => {
    expect(wrapper.find('Menu [role="menu"]').exists()).toBeTruthy()
  })
  it('renders the given markup', () => {
    expect(wrapper.find('Menu div').html()).toBe('<div>hello</div>')
  })
})
