import { xhrequest } from '@/serve'
import { IDataType } from '@/serve/type'
export function getPageListData(url: string, queryInfo: any): any {
  return xhrequest.post<IDataType>({
    url: url,
    data: queryInfo,
    isShowLoading: false
  })
}
export function deletePageData(url: string) {
  return xhrequest.delete<IDataType>({
    url: url
  })
}
