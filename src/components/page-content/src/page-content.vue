<!--  -->
<template>
  <div class="page-content">
    <xh-table
      :listData="userList"
      :listCount="userCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
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
        <div class="handle-btn">
          <el-button icon="el-icon-remove" type="text">删除</el-button>
          <el-button icon="el-icon-edit" type="text">编辑</el-button>
        </div>
      </template>
    </xh-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import XhTable from '@/base-ui/table'
import { userStore } from '@/store'
export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    XhTable
  },
  setup(props) {
    console.log(props.contentTableConfig)
    const store = userStore()
    const pageInfo = ref({ currentPage: 0, pageSize: 10 })
    watch(pageInfo, (newVal) => {
      console.log('pageInfo', pageInfo)

      getPageData()
    })

    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        /* pageUrl: '/users/list', */
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }

    getPageData()
    //自己的userStore能拿到类型
    const userList = computed(() => store.getters['system/pageListData'](props.pageName))
    const userCount = computed(() => store.getters['system/pageListCount'](props.pageName))

    console.log('%c aaa', 'color:red', userCount.value)
    console.log('%c aaa', 'color:red', userList.value)

    return {
      userList,
      userCount,
      getPageData,
      pageInfo
    }
  }
})
</script>
<style scoped lang="less"></style>
