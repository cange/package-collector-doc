import { shallow } from 'enzymeSetup'
import React from 'react'
import List from './List'

describe('<List />', () => {
  let wrapper
  const onPressMock = jest.fn()
  const minimalItem = {
    title: 'Minimal item'
  }
  const subheaderItem = {
    title: 'Subheader item',
    type: 'subheader'
  }
  const maximalActionItem = {
    title: 'Maximal item',
    type: 'action',
    onPress: onPressMock,
    icon: '<icon>'
  }

  describe('when an item with minimal data given', () => {
    beforeEach(() => {
      wrapper = shallow(<List items={[minimalItem]}/>)
    })

    it('renders component with an action item', () => {
      expect(wrapper.find('.doc-list__action').exists()).toBeTruthy()
    })

    it('does not render any icon', () => {
      expect(wrapper.find('.doc-list__icon').exists()).toBeFalsy()
    })

    it('does not render any subheader', () => {
      expect(wrapper.find('.doc-list__item--subheader').exists()).toBeFalsy()
    })
  })

  describe('when a subheader item is given', () => {
    beforeEach(() => {
      wrapper = shallow(<List items={[subheaderItem]}/>)
    })

    it('renders subheader', () => {
      expect(wrapper.find('dt.doc-list__item--subheader').exists()).toBeTruthy()
    })

    it('does not render any action item', () => {
      expect(wrapper.find('.doc-list__action').exists()).toBeFalsy()
    })

    it('does not render any icon', () => {
      expect(wrapper.find('.doc-list__icon').exists()).toBeFalsy()
    })
  })

  describe('when multiple items with different type are given', () => {
    beforeEach(() => {
      wrapper = shallow(<List items={[minimalItem, subheaderItem, minimalItem]}/>)
    })

    it('renders items in correct order', () => {
      const listLine = wrapper.find('dl')

      expect(listLine.childAt(0).prop('className')).toBe('doc-list__item')
      expect(listLine.childAt(1).prop('className')).toBe('doc-list__item doc-list__item--subheader')
      expect(listLine.childAt(2).prop('className')).toBe('doc-list__item')
    })
  })

  describe('when action item with icon items are given', () => {
    beforeEach(() => {
      wrapper = shallow(<List items={[maximalActionItem]}/>)
    })

    it('renders component with an action item', () => {
      expect(wrapper.find('.doc-list__action').exists()).toBeTruthy()
    })

    it('renders item with icon', () => {
      expect(wrapper.find('Icon').prop('name')).toBe('<icon>')
    })

    describe('when item has been pressed', () => {
      beforeEach(() => {
        wrapper.find('Button').simulate('press')
      })

      it('calls onPress handler', () => {
        expect(onPressMock).toHaveBeenCalled()
      })
    })
  })
})
