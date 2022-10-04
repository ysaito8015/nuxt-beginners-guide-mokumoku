import { mount } from '@vue/test-utils'
import AppButton from '~/components/AppButton.vue'

describe('components/AppBUtton.vue', () => {
  test('match snapshot(unclicked)', () => {
    const wrapper = mount(AppButton)
    expect(wrapper.element).toMatchSnapshot()
  })
  test('match snapshot(clicked)', () => {
    const wrapper = mount(AppButton)
    wrapper.findComponent('button').trigger('click')
    expect(wrapper.element).toMatchSnapshot()
  })
})
