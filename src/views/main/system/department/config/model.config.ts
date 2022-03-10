import { IForm } from '@/base-ui/form'
export const modelFormConfig: IForm = {
  labelWidth: '80px',
  formItem: [
    {
      field: 'name',
      type: 'input',
      label: '部门名',
      placeholder: '请输入部门名'
    },
    {
      field: 'leader',
      type: 'select',
      label: 'leader',
      placeholder: '请选择leader'
    }
  ],
  itemStyle: {
    padding: ''
  },
  colLayout: {
    span: 24
  }
}
