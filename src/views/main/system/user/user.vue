<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="container">
      <xh-table
        :tableData="userList"
        :proplist="propList"
        :isShowSelect="isShowSelect"
        :isShowId="isShowId"
        @emitSelectionChange="emitSelectionChange"
      >
        <!-- id  -->
        <!-- 选中 -->
        <!-- 操作 -->
        <template #status="scope">
          <slot
            ><el-button size="mini" :type="scope.row.enable ? 'success' : 'primary'">{{
              scope.row.enable ? '启用' : '禁用'
            }}</el-button></slot
          >
        </template>
        <template #createAt="scope">
          <slot
            ><span>{{ $filters.formatTime(scope.row.createAt) }}</span></slot
          >
        </template>
        <template #update="scope">
          <slot
            ><span>{{ $filters.formatTime(scope.row.update) }}</span></slot
          >
        </template>
        <template #handle>
          <div class='handle-btn'>
            <el-button  icon="el-icon-remove" type="text">删除</el-button>
            <el-button  icon="el-icon-edit" type="text">编辑</el-button>
          </div>
        </template>
      </xh-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, reactive } from 'vue'
import { searchFormConfig } from './config/search.config'
import pageSearch from '@/components/page-search'
import { userStore } from '@/store/index'
import XhTable from '@/base-ui/table'
export default defineComponent({
  name: 'user',
  components: {
    pageSearch,
    XhTable
  },
  setup() {
    //自己的userStore能拿到类型
    const store = userStore()
    //请求userList
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.system.userPageList)
    const userCount = computed(() => store.state.system.pageCount)
    console.log(userList)
    //table的列
    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实性名', minWidth: '100' },
      { prop: 'cellphone', label: '手机号码', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
      { prop: 'createAt', label: '创建时间', minWidth: '220', slotName: 'createAt' },
      { prop: 'updateAt', label: '更新时间', minWidth: '220', slotName: 'update' },
      { prop: 'handle', label: '操作', minWidth: '140', slotName: 'handle' }
    ]
    const isShowId = true
    const isShowSelect = true
    const emitSelectionChange = (value: any) => {
      console.log(value)
    }
    return {
      searchFormConfig,
      userList,
      propList,
      isShowId,
      isShowSelect,
      emitSelectionChange
    }
  }
})
</script>

<style scoped></style>
