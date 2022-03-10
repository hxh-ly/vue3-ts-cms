

<script lang="tsx">
import { onMounted, onBeforeUnmount, ref, reactive, defineComponent } from 'vue'
import E from 'wangeditor'
const TestSlotComponent = defineComponent({
  name: 'TestSlotComponent',
  data() {
    return {
      propData: 'cqc'
    }
  },
  render() {
    const { default: defaultSlot, headerSlot } = this.$slots
    return (
      <div>
        <div>{headerSlot && headerSlot(this.propData)}</div>
        <div>{defaultSlot && defaultSlot()}</div>
      </div>
    )
  }
})
const UseSlotComponent = defineComponent({
  setup() {
    return () => {
      //方式一
      const Test1 = (
        <TestSlotComponent>
          <div>这里为默认default插槽</div>
        </TestSlotComponent>
      )
      const TestSlot2 = {
        default: () => {
          return <div>默认插槽</div>
        },
        headerSlot: (props: any) => {
          return <div>自定义插槽{props}是作用域数据</div>
        }
      }
      //方式二
      const Test2 = <TestSlotComponent>{TestSlot2}</TestSlotComponent>
      //方式三
      // const Test3 = (<TestSlotComponent v-slot={TestSlot2} />)
      return (
        <div>
          {Test1}
          {Test2}
        </div>
      )
    }
  }
})
export default defineComponent({
  name: 'chat',
  setup() {
    const editor = ref()
    const content = reactive({
      html: '',
      text: ''
    })
    let instance: any
    onMounted(() => {
      instance = new E(editor.value)
      Object.assign(instance.config, {
        onchange() {
          console.log('change')
        }
      })
      instance.create()
    })
    onBeforeUnmount(() => {
      instance.destroy()
      instance = null
    })
    // 或者 const editor = new E( document.getElementById('div1') )
    const syncHTML = () => {
      instance.txt.clear()
      //content.html = instance.txt.html()
    }
    return () => {
      return (
        <div class="chat">
          <div ref={editor} ></div>
           <el-button class='button-send-text' onClick={syncHTML} type="primary" >发表</el-button>
        </div>
      )
    }
  }
})
</script>

<style scoped>
.button-send-text{
  margin-top: 20px;
}
</style>
