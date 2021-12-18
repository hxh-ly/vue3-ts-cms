import { ILoginState } from './login/type'
interface IRootStore {
  name: string
  age: string
}
interface IRootWithModule {
  login: ILoginState
}
export { IRootStore }
export type IStoreType = IRootStore & IRootWithModule
