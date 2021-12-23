<!--  -->
<template>
  <div class="xh-table">
    <div class="header">
      <slot name="header">
        <div class="header-left">{{ title }}</div>
        <div class="header-handle">
          <el-button size="mini" type="primary">添加用户</el-button>
        </div>
      </slot>
    </div>
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
    <div class="footer">
      <slot name="footer">
        <!-- 分页器 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </slot>
    </div>
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
    },
    title: {
      type: String,
      default: ''
    }
  },
  emits: ['emitSelectionChange'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      emit('emitSelectionChange', value)
    }
    return {
      handleSelectionChange
      /*  handleSizeChange,
      handleCurrentChange,
      currentPage4 */
    }
  }
})
</script>
<style scoped lang="less">
.xh-table {
  padding: 20px;
  border-top: 30px solid #f5f5f5;
  .header {
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    .header-left {
      color: #111;
      font-size: 29px;
      font-weight: 800;
    }
  }
  .footer {
    margin-top: 15px;

    .el-pagination {
      text-align: right;
    }
  }
}
</style>
