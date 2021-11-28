import HXHRequest from './request'
import { VUE_APP_BASE_URL, TIMEOUT } from './request/config'
export const xhrequest = new HXHRequest({
  baseURL: VUE_APP_BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = 'a'
      if (token) {
        console.log(config.headers)
        //config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    resInterceptor: (config) => {
      console.log('响应的拦截')
      return config
    }
  }
})
/* xhrequest222 = new HXHRequest({
  baseURL: VUE_APP_BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求加loading=====')
      return config
    },
    resInterceptor: (config) => {
      console.log('响应的拦截')
      return config
    }
  }
}) */
