import AppToggleButton from '~/components/AppToggleButton.vue'
import { mount } from '@vue/test-utils'

describe('AppToggleButton.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = null // null を指定して GC されるように

    wrapper = mount(AppToggleButton)
  })

  test('デフォルト状態で off であるか', () => {
    expect(wrapper.find('p').text()).toBe('off')
  })

  test('ボタンを押すことによって on になるか', () => {
    wrapper.find('button').trigger('click') // click イベントで発火させる

    expect(wrapper.find('p').text()).toBe('on')
  })
})
