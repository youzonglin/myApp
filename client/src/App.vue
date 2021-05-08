<template>
  <div class="wrap">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Footer from "./views/Home/footer.vue"

export default {
//   注册组件
    components:{
      Footer
    },
   setup(){
      const state = reactive(
        {a:111,
        //  n: computed(()=>{
        //    return state.a++
        //  })
        }
      )

      const change = ()=>{
        state.a++
      }

      return {...toRefs(state), change}
   }
}
</script>

<style lang="less">
.wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
