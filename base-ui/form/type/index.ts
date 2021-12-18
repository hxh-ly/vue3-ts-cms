export interface formItem {
  type: string
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[]
  otherOptions?: any
}

export interface IForm {
  labelWidth: string
  formItem: formItem[]
  itemStyle?: any
  colLayout?: any
}
