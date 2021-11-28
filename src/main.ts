import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//import './serve/axios_demo'
import { xhrequest } from './serve/index'
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')

/* xhrequest.request({
  url: '/home/multidata',
  method: 'GET',
  interceptors: {
    requestInterceptor: (config) => {
      console.log('config,', config)
      console.log('实例request的请求的拦截')
      return config
    },
    resInterceptor: (config) => {
      console.log('实例request的响应的拦截')
      return config
    }
  }
}) */
interface DataType {
  data: any
  returnCode: string
  success: boolean
}
xhrequest
  .get<DataType>({
    url: '/home/multidata',
    method: 'GET',
    isShowLoading: true
  })
  .then((res) => {
    console.log(res.data)
  })
console.log(process.env)
console.log(process.env.VUE_APP_BASE_URL)
