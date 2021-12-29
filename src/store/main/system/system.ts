import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootStore } from '../../type'
import { getPageListData, deletePageData } from '@/serve/main/system/system'
const system: Module<ISystemState, IRootStore> = {
  namespaced: true,
  state: () => {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageName = payload.pageName
      const pageUrl = `${pageName}/list`
      //网络请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResult.data
      const changePageName = pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
    },
    async deletePageData(context, playload: any) {
      const { pageName, id } = playload
      const pageUrl = `${pageName}/${id}`
      await deletePageData(pageUrl)
      context.dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  },
  mutations: {
    changeUsersList(state, data: any) {
      state.usersList = data
    },
    changeUsersCount(state, data: any) {
      state.usersCount = data
    },
    changeRoleList(state, data: any) {
      state.roleList = data
    },
    changeRoleCount(state, data: any) {
      state.roleCount = data
    },
    changeGoodsList(state, data: any) {
      state.goodsList = data
    },
    changeGoodsCount(state, data: any) {
      state.goodsCount = data
    },
    changeMenuList(state, data: any) {
      state.menuList = data
    },
    changeMenuCount(state, data: any) {
      state.menuCount = data
    }
  },
  getters: {
    pageListData(state) {
      return function (pageName: string) {
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return function (pageName: string) {
        return (state as any)[`${pageName}Count`]
      }
    }
  }
}
export { system }
