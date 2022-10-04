import Vuex from 'vuex'
import index from '../../app/store'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'

describe('store/index.js', () => {
  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
  })

  describe('mutations', () => {
    test(
      'increment ミューテーションがコミットされると、count ステートの値が +1 される',
      () => {
        const store = new Vuex.Store(cloneDeep(index))
        expect(store.getters['count']).toBe(0)
        store.commit('increment')
        expect(store.getters['count']).toBe(1)
      })
  })

  describe('actions', () => {
    test(
      'increment アクションを dispatch するたびに、increment ミューテーションがコミットされる',
      () => {
        const store = new Vuex.Store(cloneDeep(index))
        expect(store.getters['count']).toBe(0)
        store.dispatch('increment')
        expect(store.getters['count']).toBe(1)
      })
  })
})
