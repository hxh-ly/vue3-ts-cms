<template>
  <div class="department">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content
      :contentTableConfig="contentTableConfig"
      ref="pageContentRef"
      pageName="department"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-model
      ref="pageModalRef"
      pageName="role"
      :modelConfig="modelFormConfigRef"
      :defaultInfo="defaultInfo"
      :other-info="otherInfo"
    >
      <div class="tree-panel">
        <el-tree
          ref="elTreeRef"
          :data="menu"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheckChange"
        />
      </div>
    </page-model>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { userStore } from '@/store'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modelFormConfig } from './config/model.config'

//查询hook
import { usePageSearch } from '@/hooks/use-page-config'
//弹窗hook
import { usePageModal } from '@/hooks/use-page-modal'
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import pageModel from '@/components/page-model'

export default defineComponent({
  name: 'department',
  components: {
    pageContent,
    pageSearch,
    pageModel
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] = usePageModal()
    // 部门 角色
    const store = userStore()
    console.log('entriesDepartment', store.state.entriesDepartment)

    const modelFormConfigRef = computed(() => {
      const store = userStore()
      let map = new Map()
      const departMentItem = modelFormConfig.formItem.find((item) => item.field === 'leader')
      for (let item of store.state.entriesDepartment) {
        if (!map.has(item.leader)) {
          map.set(item.leader, { title: item.leader, value: item.leader })
        }
      }
      departMentItem!.options = [...map.values()]
      map.clear()
      return modelFormConfig
    })

    return {
      searchFormConfig,
      contentTableConfig,
      modelFormConfig,

      pageContentRef,
      handleResetClick,
      handleQueryClick,

      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      //弹窗
      modelFormConfigRef
    }
  }
})
</script>

<style scoped></style>
