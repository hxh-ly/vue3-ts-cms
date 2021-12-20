import { ILoginState } from './login/type'
import { ISystemState } from './main/system/types'
interface IRootStore {
  name: string
  age: string
}
interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}
export { IRootStore }
export type IStoreType = IRootStore & IRootWithModule
