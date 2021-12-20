<!--  -->
<template>
  <div class="xh-table">
    <el-table
      :data="tableData"
      style="width: 100%"
      border
      @selection-change="handleSelectionChange"
    >
      <el-table-column v-if="isShowSelect" type="selection" width="80" align="center" />
      <el-table-column v-if="isShowId" label="id" type="index" width="80" align="center" />

      <template v-for="item in proplist" :key="item.prop">
        <el-table-column align="center" v-bind="item">
          <template #default="scope">
            <!-- slot 作用域插槽 1写在template上   2 slot传出数据 -->
            <slot :name="item.slotName" :row="scope.row">
              <!-- 默认 -->
              {{ scope.row[`${item.prop}`] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  components: {},
  props: {
    tableData: {
      type: Array,
      require: true
    },
    proplist: {
      type: Array,
      require: true
    },
    isShowId: {
      type: Boolean
    },
    isShowSelect: {
      type: Boolean
    }
  },
  emits: ['emitSelectionChange'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      emit('emitSelectionChange', value)
    }
    return {
      handleSelectionChange
    }
  }
})
</script>
<style scoped lang="less">
.xh-table {
  padding: 20px;
  border-top: 30px solid #f5f5f5;
}
</style>
