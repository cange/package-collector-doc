import { shallow } from 'enzymeSetup'
import React from 'react'
import Icon from './Icon'

describe('<Icon />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Icon name="blubber" />)
  })

  it('renders SVG element with correct namespace', () => {
    expect(wrapper.find('svg').prop('xmlns')).toBe('http://www.w3.org/2000/svg')
  })

  it('renders SVG element with correct dimensions', () => {
    expect(wrapper.find('svg').prop('height')).toBe('24')
    expect(wrapper.find('svg').prop('width')).toBe('24')
    expect(wrapper.find('svg').prop('viewBox')).toBe('0 0 24 24')
  })

  it('renders use tag with correct namespace', () => {
    expect(wrapper.find('use').prop('xmlns')).toBe('http://www.w3.org/2000/svg')
  })

  it('points an external SVG sprite reference', () => {
    expect(wrapper.find('use').prop('xlinkHref')).toBe('test-file-stub#blubber')
  })
})
