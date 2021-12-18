<!--  -->
<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="clickFold"><fold /></el-icon>
    <div class="container">
      <div>面包屑</div>
      <div>
        <el-icon size="20"><collection-tag /></el-icon>
        <el-icon size="20"><bell /></el-icon>
        <el-icon size="20"><chat-dot-round /></el-icon>
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-icon size="20"><avatar /></el-icon>

            {{ userName }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item disabled>Action 4</el-dropdown-item>
              <el-dropdown-item divided>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { Avatar, Fold, ArrowDown, ChatDotRound, Bell, CollectionTag } from '@element-plus/icons'
import { useStore } from 'vuex'
export default defineComponent({
  emits: ['foldChange'],
  components: {
    Fold,
    ArrowDown,
    Avatar,
    ChatDotRound,
    Bell,
    CollectionTag
  },
  setup(props, { emit }) {
    const isFold = ref(false)
    const store = useStore()
    const userName = computed(() => store.state.login.userInfo.name)
    const clickFold = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return {
      isFold,
      clickFold,
      userName
    }
  }
})
</script>
<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .container {
    flex: 1;
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    .el-dropdown-link {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
