<!--  -->
<template>
  <div class="page-search">
    <xh-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="title">高级检索</h1>
      </template>
      <template #footer>
        <div class="right-btn">
          <el-button type="primary">重置</el-button>
          <el-button type="primary">检索</el-button>
        </div>
      </template>
    </xh-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import XhForm, { IForm } from '@/base-ui/form'
export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      require: true
    }
  },
  components: {
    XhForm
  },
  setup(props) {
    const formData = ref({
      field: '',
      id: '',
      name: '',
      password: '',
      createTime: ''
    })
    return {
      formData
    }
  }
})
</script>
<style scoped lang="less">
.page-search {
  .title {
    color: red;
  }
  .right-btn {
    text-align: right;
    padding: 0 50px 20px 0;
  }
}
</style>
