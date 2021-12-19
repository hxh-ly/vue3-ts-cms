<template>
  <div class="user">
    <xh-form v-bind="searchFormConfig" v-model="formData"></xh-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, reactive } from 'vue'
import XhForm, { IForm } from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'
export default defineComponent({
  name: 'user',
  components: {
    XhForm
  },
  setup() {
    const formData = ref({
      field: '',
      id: '',
      name: '',
      password: '',
      createTime: ''
    })
    return {
      searchFormConfig,
      formData
    }
  }
})
</script>

<style scoped></style>
