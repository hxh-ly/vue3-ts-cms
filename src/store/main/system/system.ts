import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootStore } from '../../type'
import { getPageListData } from '@/serve/main/system/system'
const system: Module<ISystemState, IRootStore> = {
  namespaced: true,
  state: () => {
    return {
      userPageList: [],
      pageCount: 0
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      console.log(payload.pageUrl)
      console.log(payload.queryInfo)
      //网络请求
      const pageResult = await getPageListData(payload.pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResult.data
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  },
  mutations: {
    changeUserList(state, data: any) {
      state.userPageList = data
      console.log(
        '🚀 ~ file: system.ts ~ line 25 ~ changeUserList ~ state.userPageList',
        state.userPageList
      )
    },
    changeUserCount(state, data: any) {
      state.pageCount = data
      console.log(
        '🚀 ~ file: system.ts ~ line 32 ~ changeUserCount ~ state.pageCount',
        state.pageCount
      )
    }
  }
}
export { system }
