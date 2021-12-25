<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content :contentTableConfig="contentTableConfig" pageName="role"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, reactive } from 'vue'
import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
export default defineComponent({
  name: 'users',
  components: {
    pageContent,
    pageSearch
  },
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
