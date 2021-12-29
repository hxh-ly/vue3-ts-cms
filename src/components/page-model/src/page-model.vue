<!--  -->
<template>
  <div class="page-model">
    <el-dialog
      v-model="dialogVisible"
      title="新建用户"
      width="30%"
      :before-close="handleClose"
      destroy-on-close
    >
      <xh-form v-bind="modelConfig" v-model="formData"></xh-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import XhForm from '@/base-ui/form'
/* xhfrom的配置 */
export default defineComponent({
  props: {
    modelConfig: {
      type: Object,
      require: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    XhForm
  },
  setup(props) {
    const dialogVisible = ref(true)
    const formData = ref<any>({})
    watch(
      () => props.defaultInfo,
      (newVal) => {
        for (const item of props.modelConfig?.formItem) {
          formData.value[`${item.field}`] = newVal[`${item.field}`]
        }
      }
    )
    return {
      dialogVisible,
      formData
    }
  }
})
</script>
<style scoped lang="less">
</style>
