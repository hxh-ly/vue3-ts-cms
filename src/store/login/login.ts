import { Module } from 'vuex'
import { IRootStore } from '../type'
import { ILoginState } from './type'
import router from '@/router'
import { mapMenuToRoutes } from '@/util/map-menu'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusRoleId
} from '@/serve/login/login'
import { IAccount } from '@/serve/login/type'
import localCache from '@/util/cache'
const login: Module<ILoginState, IRootStore> = {
  namespaced: true,
  state: () => {
    return {
      token: 'aa',
      userInfo: 'asdas',
      userMenus: []
    }
  },
  actions: {
    async accountLoginAction({ commit }, playload: IAccount) {
      console.log('执行accountLoginAction', playload)
      //1
      const loginData = await accountLoginRequest(playload)
      const { id, token } = loginData.data
      commit('changeToken', token)
      localCache.setItem('token', token)
      //2 用户信息
      const LoginUserInfo = (await requestUserInfoById(id)).data
      localCache.setItem('userInfo', LoginUserInfo)
      commit('changeUserInfo', LoginUserInfo)
      //3 菜单
      const UserInfoMenuRes = await requestUserMenusRoleId(LoginUserInfo.role.id)
      const userMenus = UserInfoMenuRes.data
      localCache.setItem('userMenus', userMenus)
      commit('changeUserMenus', userMenus)
      //4 跳到首页
      router.push('/main')
    },
    phoneLoginAction({ commit }, playload: any) {
      console.log('执行phoneLoginAction', playload)
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getItem('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getItem('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getItem('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
      console.log(state.token)
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
      console.log(state.userInfo)
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      //Menus --> routes
      //将menus设在vuex时，
      const routes = mapMenuToRoutes(userMenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
      console.log(router)
    }
  }
}
export { login }
