<template>
  <div class="banner">
    <ul>
      <li v-show="index === 0">
        <img src="@/assets/image/1.jpg" alt />
      </li>
      <li v-show="index === 1">
        <img src="@/assets/image/2.jpg" alt />
      </li>
      <li v-show="index === 2">
        <img src="@/assets/image/3.jpg" alt />
      </li>
      <li v-show="index === 3">
        <img src="@/assets/image/4.jpg" alt />
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, onUnmounted } from 'vue'
export default {

   setup(){
      const state = reactive(
        {index: 0,
         n: 0,
         timer: null
        }
      );

      //  state.n = computed(()=>{
      //      return state.index++
      //    })

      onMounted(()=>{
        // debugger
        state.timer = setInterval(()=>{
          console.log(1111)
          state.index++
          if(state.index > 3){
            state.index = 0  
          }
        },2000)

      });

      onUnmounted(()=>{
        clearInterval(state.timer)
      })


      return {...toRefs(state)}
   }
}
</script>

<style lang="less">
.banner {
  ul {
    width: 100%;
    height: 100px;
    overflow: hidden;
  }
}
</style>
