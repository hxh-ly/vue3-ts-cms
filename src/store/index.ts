import localCache from '@/util/cache'
import { createStore, Store, useStore as useVueStore } from 'vuex'
import { login } from './login/login'
import { system } from './main/system/system'
import { IRootStore, IStoreType } from './type'
const store = createStore<IRootStore>({
  state: () => {
    return {
      name: 'hxh',
      age: 'asda'
    }
  },
  mutations: {},
  actions: {},
  modules: {
    login,
    system
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
export function userStore(): Store<IStoreType> {
  return useVueStore()
}
export default store
