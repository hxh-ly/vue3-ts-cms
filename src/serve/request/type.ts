import { AxiosRequestConfig, AxiosResponse } from 'axios'
class HXHRequestInterceptor<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  resInterceptor?: (config: T) => T
  resInterceptorCatch?: (err: any) => any
}
//在原有的配置上加给属性interceptors【hooks】
interface HXHRequestConfig<T = AxiosResponse>  extends AxiosRequestConfig {
  interceptors?: HXHRequestInterceptor<T>
  isShowLoading?: boolean
}
export { HXHRequestInterceptor, HXHRequestConfig }
