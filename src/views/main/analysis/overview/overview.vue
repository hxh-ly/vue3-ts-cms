<template>
  <div class="overview">
    <el-row class="content-row">
      <el-col :span="24">
        <hy-card title="关于">
          <div class="card-body">
            Vue3Admin是基于Vue3,Vuex,VueRouter,Vite,ElementPlus,TypeScript,Echart5等后台系统解决方案
          </div>
        </hy-card>
      </el-col>
    </el-row>
    <el-row class="content-row">
      <el-col :span="24">
        <hy-card title="技术栈">
          <div class="listDesc">
            <ul>
              <template v-for="(item, idx) in toolList" :key="idx">
                <li class="listDesc-li">
                  {{ item.name }}:
                  <el-link type="primary" class="desc-link" :underline="false">{{
                    item.desc
                  }}</el-link>
                </li>
              </template>
            </ul>
          </div>
          <!-- 生产环境描述 -->
          <div class="desc-box">
   <el-descriptions
            title="生产环境依赖"
            direction="horizontal"
            :column="2"
            size="small"
            border
          >
            <template v-for="item in productDep">
              <el-descriptions-item :label="item.label">
                <el-tag size="small">{{ item.version }}</el-tag></el-descriptions-item
              >
            </template>
          </el-descriptions>
          </div>

          <!-- 描述 -->
            <el-descriptions
            class="desc-box"
            title="开发环境依赖"
            direction="horizontal"
            :column="2"
            size="small"
            border
          >
            <template v-for="item in dependDep">
              <el-descriptions-item :label="item.label">
                <el-tag size="small">{{ item.version }}</el-tag></el-descriptions-item
              >
            </template>
          </el-descriptions>

        </hy-card>
      </el-col>
    </el-row>
    <el-row class="content-row">
      <el-col :span="24">
        <hy-card title="git提交规范">
               <div class="desc-box">
   <el-descriptions
            title="生产环境依赖"
            direction="horizontal"
            :column="1"
            size="small"
            border
          >
            <template v-for="item in gitRule">
              <el-descriptions-item :label="item.label">
                <el-tag size="small">{{ item.way }}</el-tag></el-descriptions-item
              >
            </template>
          </el-descriptions>
          </div>
        </hy-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, version } from 'vue'
import HyCard from '@/base-ui/card'
export default defineComponent({
  name: 'overview',
  components: {
    HyCard
  },
  setup() {
    return {
      toolList: [
        {
          name: '开发工具',
          desc: 'Visual Studio Code'
        },
        {
          name: '编程语言',
          desc: 'TypeScript4.x + JavaScript'
        },
        {
          name: '构建工具',
          desc: 'Vite 2.x / Webpack 5.x'
        },
        {
          name: '前端框架',
          desc: 'Vue 3.x'
        },
        {
          name: '路由工具',
          desc: 'Vue Router 4.x'
        },
        {
          name: '状态管理',
          desc: 'Vuex 4.x'
        },
        {
          name: 'UI框架',
          desc: 'Element Plus'
        },
        {
          name: '可视化',
          desc: 'Ehcart5.x'
        },
        {
          name: '富文本',
          desc: 'WangEditor'
        },
        {
          name: '工具库',
          desc: '@vueuse/core + dayjs + countup.js'
        },
        {
          name: '数据模拟',
          desc: 'mockjs'
        },
        {
          name: 'CSS预编译',
          desc: 'Sass / Less'
        },
        {
          name: 'HTTP工具',
          desc: 'Axios'
        },
        {
          name: 'Git Hook工具',
          desc: 'Husky'
        },
        {
          name: '代码规范',
          desc: 'EditorConfig + Prettier + ESlint'
        },
        {
          name: '提交规范',
          desc: 'Commitizen + Commitlint'
        },
        {
          name: '自动部署',
          desc: 'Centos + JenKins + Nginx'
        }
      ],
      productDep: [
        {
          label: 'vue',
          version: '^3.2.26'
        },
        {
          label: 'vuex',
          version: '^4.0.2'
        },
        {
          label: 'vue-router',
          version: '^4.0.12'
        },
        {
          label: 'axios',
          version: '^0.24.0'
        },
        {
          label: 'less',
          version: '^3.0.4'
        },
        {
          label: 'Echarts',
          version: '^5.2.2'
        },
        {
          label: 'dayjs',
          version: '^1.10.7'
        },
        {
          label: 'element-plus',
          version: '^1.2.0-beta.3'
        },
        {
          label:'wangeditor',
          version:'^4.7.12'
        }
      ],
      dependDep:[
          {
          label: '@commitlint/cli',
          version: '^15.0.0'
        },
        {
          label: '@commitlint/config-conventional',
          version: '^15.0.0'
        },
        {
          label: 'commitizen',
          version: '^4.2.4'
        },
        {
          label: 'cz-conventional-changelog',
          version: '^3.3.0'
        },
        {
          label: 'eslint',
          version: '^6.7.2'
        },
        {
          label: 'eslint-plugin-prettier',
          version: '^3.3.1'
        },
        {
          label: 'typescript',
          version: '~4.1.5'
        },
        {
          label: 'husky',
          version: '^7.0.4'
        },
          {
          label: 'less',
          version: '^3.0.4'
        },
         {
          label: 'less-loader',
          version: '^5.0.0'
        },
        {
          label:'@vue/cli-plugin-babel',
          version:'~4.5.0'
        },
        {
          label:'babel-plugin-component',
          version:'^1.1.1'
        }
      ],
      gitRule:[
        {
          label:'add操作',
          way:'git add',
        },
        {
          label:'commit操作',
          way:'npm run commit',
        },
        {
          label:'pull操作',
          way:'git pull',
        },
         {
          label:'push操作',
          way:'git push',
        }
      ]
    }
  }
})
</script>

<style scoped lang='less'>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
}
.card-body {
  text-align: start;
  font-size: 22px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 100%;
}
.content-row {
  margin-bottom: 20px;
}
.listDesc {
  width: 50%;
  display: flex;
  justify-content: start;
  text-align: start;
  margin-left: 10px;
  ul {
    padding: 0;
  }
  & .listDesc-li {
    margin: 10px 0;
    font-size: 16px;
    & .desc-link {
      margin-left: 5px;
    }
  }
}
.desc-box {
    margin: 10px 0 20px 0;
  }
</style>
