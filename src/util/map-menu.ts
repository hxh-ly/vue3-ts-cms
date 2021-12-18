import { RouteRecordRaw } from 'vue-router'
export function mapMenuToRoutes(useMenus: RouteRecordRaw[]) {
  const routes: RouteRecordRaw[] = []
  //1 默认加载全部路由
  const allRoutes: RouteRecordRaw[] = []
  //文件上下文
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    // key ---> ./src/main/product/goods
    // 一个个的模块
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  console.log(allRoutes)
  //2 属于menus的路由
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(useMenus)

  return routes
}
