import localCache from '@/util/cache'
import { createStore, Store, useStore as useVueStore } from 'vuex'
import { login } from './login/login'
import { system } from './main/system/system'
import { IRootStore, IStoreType } from './type'
import { getPageListData } from '@/serve/main/system/system'
const store = createStore<IRootStore>({
  state: () => {
    return {
      name: 'hxh',
      age: 'asda',
      entriesDepartment: [],
      entriesRole: []
    }
  },
  mutations: {
    changeEntriesDepartMent(state, list: any) {
      state.entriesDepartment = list
    },
    changeEntriesRole(state, list: any) {
      state.entriesRole = list
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      const departMentResult = await getPageListData('/department/list', { offset: 0, size: 1000 })
      const { list: departmentList } = departMentResult.data
      commit('changeEntriesDepartMent', departmentList)
      const RoleResult = await getPageListData('/role/list', { offset: 0, size: 1000 })
      const { list: roleList } = RoleResult.data
      commit('changeEntriesRole', roleList)
    }
  },
  modules: {
    login,
    system
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  store.dispatch('getInitialDataAction')
}
export function userStore(): Store<IStoreType> {
  return useVueStore()
}
export default store
