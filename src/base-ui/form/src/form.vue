<!--  -->
<template>
  <div class="xh-form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItem" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemStyle">
              <template v-if="item.type == 'input' || item.type == 'password'">
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                ></el-input>
              </template>
              <template v-else-if="item.type == 'select'">
                <el-select :placeholder="item.placeholder" style="width: 100%">
                  <el-option
                    v-for="option in item.options"
                    v-bind="item.otherOptions"
                    :key="option.value"
                    :value="option.value"
                    v-model="formData[`${item.field}`]"
                  >
                    {{ option.title }}
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type == 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { formItem } from '../type'
export default defineComponent({
  components: {},
  props: {
    formItem: {
      type: Array as PropType<formItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '120px'
    },
    itemStyle: {
      type: Object,
      default: () => {
        return { padding: '10px 40px' }
      }
    },
    colLayout: {
      type: Object,
      default: () => {
        return {
          xl: 6,
          lg: 8,
          md: 12,
          sm: 24,
          xs: 24
        }
      }
    },
    modelValue: {
      type: Object,
      require: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue })
    watch(
      formData,
      (newVal) => {
        emit('update:modelValue', newVal)
      },
      { deep: true }
    )
    return {
      formData
    }
  }
})
</script>
<style scoped lang="less">
.xh-form {
  padding-top: 22px;
}
</style>
