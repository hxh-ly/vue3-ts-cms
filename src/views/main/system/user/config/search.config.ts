import { IForm } from '@/base-ui/form'
export const searchFormConfig: IForm = {
  labelWidth: '120px',
  formItem: [
    { field: 'id', type: 'input', label: 'id', placeholder: '请输入id', otherOptions: {} },
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名',
      otherOptions: {}
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码',
      otherOptions: {}
    },
    {
      field: 'sport',
      type: 'select',
      label: '喜欢的运动',
      placeholder: '请选择喜欢的运动',
      options: [
        { title: '篮球', value: 'basketball' },
        { title: '足球', value: 'football' }
      ],
      otherOptions: {}
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      placeholder: '请选择创建时间范围',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  itemStyle: {
    padding: '10px 40px'
  },
  colLayout: {
    span: '8'
  }
}
