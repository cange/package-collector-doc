import { mount, shallow } from 'enzymeSetup'
import React from 'react'
import List from './List'

describe('<List />', () => {
  let wrapper
  const itemMinimal = {
    id: 'abc123',
    title: 'Minimal item'
  }
  const actionItemMaximal = {
    id: 'abc123',
    title: 'Maximal item',
    type: 'action',
    onPress: jest.fn(),
    icon: '<icon>'
  }
  const subheaderItem = {
    title: 'Subheader item',
    type: 'subheader'
  }

  describe('when an item with minimal data given', () => {
    beforeEach(() => {
      wrapper = shallow(<List items={[itemMinimal]}/>)
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
      wrapper = shallow(<List items={[itemMinimal, subheaderItem, itemMinimal]}/>)
    })

    it('renders items in correct order', () => {
      const listLine = wrapper.find('dl')

      expect(listLine.childAt(0).prop('className')).toBe('doc-list__item')
      expect(listLine.childAt(1).prop('className')).toBe('doc-list__item doc-list__item--subheader')
      expect(listLine.childAt(2).prop('className')).toBe('doc-list__item')
    })
  })

  describe('when action item given', () => {
    describe('and an icon is given', () => {
      beforeEach(() => {
        wrapper = shallow(<List items={[actionItemMaximal]}/>)
      })

      it('renders component with an action item', () => {
        expect(wrapper.find('Button').exists()).toBeTruthy()
      })

      it('renders item with icon', () => {
        expect(wrapper.find('Icon').prop('name')).toBe('<icon>')
      })
    })

    describe('and has been pressed', () => {
      const onPressListMock = jest.fn()

      beforeEach(() => {
        wrapper = mount(<List onPress={onPressListMock} items={[actionItemMaximal]}/>)
        wrapper.find('button').simulate('click')
      })

      it('calls button onPress handler', () => {
        expect(actionItemMaximal.onPress).toBeCalledWith(
          expect.objectContaining({ target: expect.any(Object) })
        )
      })
      it('calls list onPress handler', () => {
        expect(onPressListMock).toBeCalledWith(
          expect.objectContaining({ target: expect.any(Object) }),
          'abc123'
        )
      })
    })

    describe('and has matching activeItemId given', () => {
      beforeEach(() => {
        wrapper = shallow(<List activeItemId="abc123" items={[itemMinimal]}/>)
      })

      it('renders item with an active flag', () => {
        expect(wrapper.find('Button').hasClass('is-active')).toBeTruthy()
      })
    })

    describe('and non matching activeItemId given', () => {
      beforeEach(() => {
        wrapper = shallow(<List activeItemId="anything" items={[itemMinimal]}/>)
      })

      it('renders item without active flag', () => {
        expect(wrapper.find('Button').length).toBe(1)
        expect(wrapper.find('Button').hasClass('is-active')).toBeFalsy()
      })
    })
  })
})
