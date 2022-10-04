import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import ChildPage from '~/pages/child'

const localVue = createLocalVue()

describe('pages/child.vue', () => {
  test('トップページへ戻る動線が存在する', () => {
    const wrapper = mount(ChildPage, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/')
  })
})
