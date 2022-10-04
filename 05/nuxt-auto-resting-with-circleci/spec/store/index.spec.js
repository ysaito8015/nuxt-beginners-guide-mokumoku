const Vuex = require('vuex')
const index = require('../../app/store')
const { createLocalVue } = require('@vue/test-utils')
const cloneDeep = require('lodash.clonedeep')

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/index.js', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(index))
  })

  describe('mutations', () => {
    test(
      'increment ミューテーションがコミットされると、count ステートの値が +1 される',
      () => {
        expect(store.getters['count']).toBe(0)
        store.commit('increment')
        expect(store.getters['count']).toBe(1)
      })
  })

  describe('actions', () => {
    test(
      'increment アクションを dispatch するたびに、increment ミューテーションがコミットされる',
      () => {
        expect(store.getters['count']).toBe(0)
        store.dispatch('increment')
        expect(store.getters['count']).toBe(1)
      })
  })
})
