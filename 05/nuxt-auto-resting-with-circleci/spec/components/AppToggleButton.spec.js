import AppToggleButton from '~/components/AppToggleButton.vue'
import { mount } from '@vue/test-utils'

describe('AppToggleButton.vue', () => {
  let wrapper

  //beforeEach(() => {
  //  wrapper = null // null を指定して GC されるように
  //  wrapper = mount(AppToggleButton)
  //})

  test('デフォルト状態で off であるか', () => {
    wrapper = mount(AppToggleButton)
    expect(wrapper.findComponent('p').text()).toBe('off')
  })

  test('ボタンを押すことによって on になるか', () => {
    wrapper = mount(AppToggleButton)
    wrapper.findComponent('button').trigger('click') // click イベントで発火させる

    expect(wrapper.findComponent('p').text()).toBe('on')
  })
})
