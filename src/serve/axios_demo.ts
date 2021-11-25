import axios from 'axios'
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 5000
//axios.defaults.headers = {}
axios
  .get('/get', {
    params: {
      name: 'aa',
      age: 11
    }
  })
  .then((res) => {
    console.log(res.data)
  })
axios
  .post('/post', {
    data: {
      name: 'bbb',
      age: 33
    }
  })
  .then((res) => {
    console.log(res.data)
  })
/*
promise<T> 类的泛型
new Promise<string>((resolve)=>{
  resolve('aaaaa')
})
*/
/*
5.
axios.all([axios.get(),axios.post()]).then(res=>{})
*/
/*
6
*/
axios.interceptors.request.use(
  (config) => {
    // 加loading
    // 加token
    return config
  },
  (err) => {
    //404
    return err
  }
)
axios.interceptors.response.use(
  (data) => {
    console.log('响应成功的拦截')
    return data
  },
  (err) => {
    console.log('响应失败的拦截')
    return err
  }
)
